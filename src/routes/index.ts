import express, { Request, Response } from 'express';

const routes = express.Router();

const array: Array<any> = [];

routes.get('/', (req: Request, res: Response): void => {
  res.json({ name: 'frodo' });
});

routes.get('/test', (req, res): Response => res.json({ array }));

routes.post('/test', (req: Request, res: Response): void => {
  array.push(req.body.item);
  res.send('success!');
});

export default routes;
