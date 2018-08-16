import path from 'path';

export type BuildEnv = 'production' | 'local' | 'dev';

export type Config = {
  buildEnv: BuildEnv;
  arcGisOrigin: string;
  farmersMarketFilePath: string;
  snapOfficesFilePath: string;
  staticFilesPath: string;
};

let envConfig = {};

if (process.env.NODE_ENV === 'local') {
  envConfig = require('./config.local').default;
} else if (process.env.NODE_ENV === 'production') {
  envConfig = require('./config.production').default;
}

const defaultConfig: Config = {
  buildEnv: (process.env.NODE_ENV as BuildEnv) || 'dev',
  arcGisOrigin: 'http://snap-load-balancer-244858692.us-east-1.elb.amazonaws.com/',
  farmersMarketFilePath: path.join(__dirname, '../../data/national-farmers-market-directory_snap.csv'),
  snapOfficesFilePath: path.join(__dirname, '../../data/snap-offices.csv'),
  staticFilesPath: path.join(__dirname, 'site'),
};

const serverConfig: Config = {
  ...defaultConfig,
  ...envConfig
};

export default serverConfig;