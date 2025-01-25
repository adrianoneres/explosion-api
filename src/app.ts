import express from 'express';

import { routes } from './app/routes';
import cors from 'cors';

const app = express();

app.set('view engine', 'ejs');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded());

app.use(routes);

app.listen(5003, () => console.log('Server started.'));