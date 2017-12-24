import _ from 'lodash';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import db from '../../db';

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  try {
    const user = await db.User.findOne({ _id: id }).select(
      '-password'
    );
    return done(null, user);
  } catch (err) {
    done(err);
  }
});

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    async (email, password, done) => {
      try {
        const user = await db.User.findOne({
          email: email.toLowerCase()
        });
        if (!user) return done(null, false);

        const isValidPassword = await user.comparePassword(
          password
        );
        if (!isValidPassword) return done(null, false);
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

export const login = ({ email, password, req }) =>
  new Promise((resolve, reject) => {
    if (req.user) return resolve(req.user);

    passport.authenticate('local', (err, user) => {
      if (err) return reject(err);
      if (!user) return resolve();

      req.logIn(user, () => resolve(user));
    })({ body: { email, password } });
  });
