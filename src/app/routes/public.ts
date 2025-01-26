import { Request, Response, Router } from 'express';

const publicRoutes = Router();

publicRoutes.get('/*', async (req: Request, res: Response) => {
  const url = req.url.replace('/explosion-api/', '/');
  const authorization = req.headers.authorization;

  const response = await fetch(`https://api.brawlstars.com/v1${url}`, {
    headers: {
      Authorization: authorization
    }
  })

  const data = await response.json();

  res.json(data);
})

export { publicRoutes };