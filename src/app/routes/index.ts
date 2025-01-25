import { Router } from 'express';
import { publicRoutes } from './public';

const routes = Router();

routes.use(publicRoutes);

export { routes };