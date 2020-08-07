import { Router } from 'express'
import { HomeController } from '../controllers/HomeController'

const routes = Router()
const homeController = new HomeController()

routes.get('/', homeController.handler)
routes.get('/search', homeController.search)

export default routes
