import { Router, Request, Response } from 'express';
import SnapOfficesProvider from '../dataProviders/snap-offices.provider';

const router: Router = Router();

const snapOfficesProvider = new SnapOfficesProvider();

router.all('/', (req: Request, res: Response) => {
  const { north, east, south, west } = req.query;

  res.send(snapOfficesProvider.getMarkets({ north, east, south, west }));
});

export const SnapOfficesController: Router = router;