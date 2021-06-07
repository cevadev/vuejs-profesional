/**
 * Servicio que nos permite interactuar con platziMusicService y recuperar datos
 */
import platziMusicService from "./platzi-music";

const trackService = {};

/**
 * search()-> interactua con platziMusicService y obtiene info de ella
 * q-> query que recibe la funcion
 */
trackService.search = function(q) {
  //vamos a buscar canciones (tracks)
  const type = "track";

  //platziMusicService es una instancia de trae por lo que usamosel metodo get que retorna una promise
  //llamamos al endpoint search de la api de Platzi-Music
  //retornamos o devolvemos la promesa para que el servicio o componente que la vaya a utilizar pueda hacer uso de
  //de la funcion
  return (
    platziMusicService
      .get("/search", {
        //pasamos los params que seran parte del http request
        params: {
          q: q,
          type: type
        }
      })
      //en caso de respesta satisfactoria devolvemos datos de la respuesta con una anonima
      .then(res => res.data)
  );
};

export default trackService;
