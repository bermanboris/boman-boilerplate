import express from 'express';
import boman from 'boman';

const app = express();

app.use(boman());

app.listen(5050, () =>
  console.log('server is running on port 5050')
);
