
import * as bodyParser from 'body-parser';
import * as express from 'express';

import { PORT } from './config';

import { getScreenshot } from './examples/';

const app = express();

// JSON
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/:name', (req, res) => {
  res.send(req.body);
  getScreenshot({ url: 'https://github.com/', width: 1200, height: 600 });
});

const admin = express();
admin.get('/', (req, res) => {
  res.send('Hello Admin World!');
});

const secret = express();
secret.get('/', (req, res) => {
  res.send('Hello Secret World!');
});

// load the 'secret' router on '/secr*t', on the 'admin' sub app
admin.use('/secr*t', secret);
// load the 'admin' router on '/adm*n' and '/manager', on the parent app
app.use(['/adm*n', '/manager'], admin);

// Port Setting
app.listen(PORT.EXPRESS_PORT, () => {
  console.log(`Listening the server ${PORT.EXPRESS_PORT}`);
}).on('error', (err) => {
  console.error(err);
});
