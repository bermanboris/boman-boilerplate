import passport from 'passport';

import './Local';
// import GoogleAuth from './Google';

export const registerAuthService = app => {
  app.use(passport.initialize());
  app.use(passport.session());
  // GoogleAuth(app);
};
