import { Router, Request, Response } from 'express';
import FarmersMarketsProvider from '../dataProviders/farmers-markets.provider';

const router: Router = Router();

const farmersMarketProvider = new FarmersMarketsProvider();

router.all('/', (req: Request, res: Response) => {
  console.log('getting fm');
  const { north, east, south, west } = req.query;

  res.send(farmersMarketProvider.getMarkets({ north, east, south, west }));
});

export const FarmersMarketController: Router = router;