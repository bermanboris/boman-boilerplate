import mongoose from 'mongoose';
import passport from 'passport';
import session from 'express-session';
import cors from 'cors';
import connectMongo from 'connect-mongo';
import './auth/local';

export const applyMiddlewares = app => {
  const MongoStore = connectMongo(session);
  app.use(
    cors({
      origin(origin, callback) {
        callback(null, true);
      }
    })
  );
  app.use(
    session({
      secret: 'usah89dhs98fdh982hrg2389rh',
      resave: false,
      name: 'session',
      saveUninitialized: true,
      store: new MongoStore({
        mongooseConnection: mongoose.connection
      })
      // cookie: { secure: true },
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
};
