import { Request, Response } from 'express'

export class HomeController {
  public async handler (req: Request, res: Response) {
    return res.render('index.html')
  }

  public async search (req: Request, res: Response) {

  }
}
