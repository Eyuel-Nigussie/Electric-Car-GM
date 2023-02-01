import { boot } from 'quasar/wrappers'
import axios from 'axios'

const server = axios.create({ baseURL: 'http://localhost:8000' })
server.defaults.withCredentials = true

export default boot(({ app }) => {
  app.config.globalProperties.$server = server
})

export { server }
