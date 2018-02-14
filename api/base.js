import {create} from 'apisauce'
// import fetch from 'isomorphic-unfetch'

// define the api
const api = create({
  baseURL: process.env.API_URL,
  headers: {Accept: 'application/json'}
})

export default api
