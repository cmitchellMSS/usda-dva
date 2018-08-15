import path from 'path';

import { Config } from './config';

const localConfig: Partial<Config> = {
  farmersMarketFilePath: path.join(__dirname, '../data/national-farmers-market-directory_snap.csv'),
  staticFilesPath: path.join(__dirname, '../site'),
};

export default localConfig;