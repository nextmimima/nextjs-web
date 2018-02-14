const production = process.env.NODE_ENV === 'production'
const staging = process.env.NODE_ENV === 'staging'
const testing = process.env.NODE_ENV === 'testing'
const development = process.env.NODE_ENV === 'development'

module.exports = {
  'process.env.API_URL': production
    ? 'http://www-api.httpeace.com'
    : staging
      ? 'http://www-staging-api.httpeace.com'
      : testing ? 'http://www-testing-api.httpeace.com:8210' : development ? 'http://localhost:8210' : ''
}
