const eventBus = {};

// Esta funció (install) es la que usará Vue para instalar el plugin
// param vue -> recibe la instancia dd Vue de la app que usara para inyectarlo dentro de los componentes
eventBus.install = function(Vue) {
  // le agregamos al prototype de Vue un objeto llamado $bus
  // con el signo $ la identificamos que es un objeto de vue
  // de esta manera tendremos disponile this.$bus en cada uno de nuestros componentes asi  como ths.$emit entre otros
  Vue.prototype.$bus = new Vue();
};

export default eventBus;
