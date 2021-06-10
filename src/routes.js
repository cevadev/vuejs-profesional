/** creacion de rutas de la app e importacion de componentes */
import Search from './components/Search.vue'

/** array con las rutas definidas de la app para exportar */
const routes = [
  // path home or default
  {
    path: '/',
    name: 'search',
    component: Search
  }
]

export default routes
