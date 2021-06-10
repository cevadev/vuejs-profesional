/** creacion de rutas de la app e importacion de componentes */
import Search from "./components/Search.vue";
import About from "./components/About.vue";
import TrackDetail from "./components/TrackDetail.vue";
/** array con las rutas definidas de la app para exportar */
const routes = [
  // path home or default
  {
    path: "/",
    name: "search",
    component: Search
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  // ruta dinamica
  {
    path: "/track/:id",
    component: TrackDetail,
    name: "track"
  }
];

export default routes;
