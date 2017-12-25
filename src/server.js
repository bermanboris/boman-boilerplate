import express from 'express';
import expressSession from 'express-session';
import boman from 'boman';
import db from './db';
import { applyMiddlewares } from './middlewares';

const app = express();
applyMiddlewares(app);

app.use(boman({ db }));

app.get('/', (req, res) => res.json(req.user));

app.listen(5050, () => console.log('server is running on port 5050'));
