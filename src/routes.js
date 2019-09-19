import {
  Router
} from 'express'

const routes = new Router()

routes.get('/', (req, res) => {
  res.json('bombou')
})

export default routes