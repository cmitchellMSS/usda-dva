import path from 'path';

export type BuildEnv = 'production' | 'local' | 'dev';

export type Config = {
  buildEnv: BuildEnv;
  arcGisOrigin: string;
  farmersMarketFilePath: string;
};

let envConfig = {};

console.log('NODE_ENV: ' + process.env.NODE_ENV);

if (process.env.NODE_ENV === 'local') {
  envConfig = require('./config.local');
}

console.log(envConfig);

const serverConfig: Config = {
  buildEnv: (process.env.NODE_ENV as BuildEnv) || 'dev',
  arcGisOrigin: 'http://snap-load-balancer-244858692.us-east-1.elb.amazonaws.com/',
  farmersMarketFilePath: path.join(__dirname, '../../data/national-farmers-market-directory_snap.csv'),
  ...envConfig
};

export default serverConfig;