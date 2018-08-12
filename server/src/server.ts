import express, { Application, Request } from 'express';
import proxy from 'http-proxy-middleware';

import { WelcomeController } from './controllers';

// Create a new express application instance
const app = express();
// The port the express app will listen on
const port = process.env.PORT || 3000;

// Proxy for data coming from USDA ArcGIS retailers
const argGisRetailersProxy = proxy('/ArcGIS', { target: 'http://snap-load-balancer-244858692.us-east-1.elb.amazonaws.com/', logLevel: 'debug' });
app.use(argGisRetailersProxy);

app.use('/welcome', WelcomeController);

// Serve the application at the given port
app.listen(port, () => {
  // Success callback
  console.log(`Listening at http://localhost:${port}/`);
});