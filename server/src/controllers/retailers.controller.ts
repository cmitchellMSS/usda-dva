import { Router, Request, Response } from 'express';
import RetailersProvider from '../dataProviders/retailers.provider';

const router: Router = Router();

const retailersProvider = new RetailersProvider();

router.all('/', (req: Request, res: Response) => {
  const { north, east, south, west } = req.query;

  res.send(retailersProvider.getMarkets({ north, east, south, west }));
});

export const RetailersController: Router = router;