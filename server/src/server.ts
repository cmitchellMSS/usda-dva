import path from 'path';
import express from 'express';
import cors from 'cors';
import proxy from 'http-proxy-middleware';

import serverConfig from './config';
import { FarmersMarketController, WelcomeController } from './controllers';


// Create a new express application instance
const app = express();
// The port the express app will listen on
const port = process.env.PORT || 3000;

console.log(serverConfig.buildEnv);

// CORS only needs to be enabled when developing locally
if (serverConfig.buildEnv === 'dev') {
  app.use(cors({
    origin: 'http://localhost:4200'
  }));
}

// Proxy for data coming from USDA ArcGIS retailers
const argGisRetailersProxy = proxy('/ArcGIS', {
  target: serverConfig.arcGisOrigin,
  logLevel: serverConfig.buildEnv === 'production' ? 'error' : 'debug',
  changeOrigin: true,
});
app.use(argGisRetailersProxy);

app.use('/farmersmarkets', FarmersMarketController);
app.use('/welcome', WelcomeController);

if (serverConfig.buildEnv !== 'dev') {
  app.use(express.static(path.join(__dirname, 'site')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'site/index.html'));
  });
}

// Serve the application at the given port
app.listen(port, () => {
  // Success callback
  console.log(`Listening at http://localhost:${port}/`);
});
