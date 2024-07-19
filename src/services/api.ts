import axios from 'axios'

const instanceAxios = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
})

export { instanceAxios }
