import path from 'path';
import express from 'express';
import cors from 'cors';

import serverConfig from './config';
import { FarmersMarketController, RetailersController, SnapOfficesController } from './controllers';


// Create a new express application instance
const app = express();
// The port the express app will listen on
const port = process.env.PORT || 3000;

// CORS only needs to be enabled when developing locally
if (serverConfig.buildEnv === 'dev') {
  app.use(cors({
    origin: 'http://localhost:4200'
  }));
}

app.use('/farmersmarkets', FarmersMarketController);
app.use('/retailers', RetailersController);
app.use('/snapoffices', SnapOfficesController);

if (serverConfig.buildEnv !== 'dev') {
  app.use(express.static(serverConfig.staticFilesPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'site/index.html'));
  });
}

// Serve the application at the given port
app.listen(port, () => {
  // Success callback
  console.log(`Listening at http://localhost:${port}/`);
});
