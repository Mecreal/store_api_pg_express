import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import config from './config';
import bodyParser from 'body-parser';

const app: express.Application = express();
const port = config.port || 3030;
const address: string = '0.0.0.0:' + port;

app.use(bodyParser.json());
app.get('/', function (req: Request, res: Response) {
  res.send('Hello World!');
});
app.listen(port, function () {
  console.log(`starting app on: ${address}`);
});

export default app;
