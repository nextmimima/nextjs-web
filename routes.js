const routes = (module.exports = require('next-routes')())

routes
  .add('/')
  .add('about')
  .add('service/web-development', '/services/web-development')
