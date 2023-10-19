import express, { Request, Response } from 'express';
import indexRoutes from './routes/index';
// Set up Express app
const app = express();

// Listen for requests
app.listen(3000);

app.use('/index', indexRoutes);

// Render a view
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});
