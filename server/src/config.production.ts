import path from 'path';

import { Config } from './config';

const productionsConfig: Partial<Config> = {
  retailersFilePath: path.join(__dirname, './data/retailers.db'),
  farmersMarketFilePath: path.join(__dirname, './data/national-farmers-market-directory_snap.csv'),
  snapOfficesFilePath: path.join(__dirname, './data/snap-offices.csv'),
  staticFilesPath: path.join(__dirname, './site'),
};

export default productionsConfig;