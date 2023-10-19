import express, { Request, Response } from 'express';

// Set up Express app
const app = express();

// Listen for requests
app.listen(3000);

// Render a view
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});
