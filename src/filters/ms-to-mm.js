/** Convierte duracion de una cancion en milisegundos en minutos */
const msToMm = {}

function convertMsToMm (milliseconds) {
  const min = Math.floor(milliseconds / 60000)
  const sec = ((milliseconds % 60000) / 1000).toFixed(0)

  return `${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}`
}

/** Todo objeto para tener una instalacion global debe tener una funcion install */
msToMm.install = function (Vue) {
  // recibe el valor original (en milisegundos)
  Vue.filter('convertMillisecondsToMinutes', milliseconds => {
    // llamamos a la funcion que convierte a minutos sin afectar el valor real de la propiedad
    return convertMsToMm(milliseconds)
  })
}

export default msToMm
