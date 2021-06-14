/** hace que una imagen se vuelva borrosa. Aplicamos el blur a una imagen que no posee un preview
 * para escuchar la cancion, es decir un track que tiene su atributo preview_url null
 */
const blur = {}

// De la misma manera que tenemos hooks en los componentes, también tenemos directivas, como bind o update, unbind, updated y vienen con 4 atributos: el (El elemento), binding (El valor), una referencia al nodo del virtual DOM y una referencia al nodo anterior del virtual DOM

function setBlur (elementHmtl, binding) {
  // si el valor dentro de la directiva es false, aplicamos un blur a la imagen
  elementHmtl.style.filter = !binding.value ? 'blur(3px)' : 'none'
  // si el valor dentro de la directiva es false, deshabilidatos el cursor del mouse
  elementHmtl.style.cursor = !binding.value ? 'not-allowed' : 'inherit'

  // si el valor dentro de la directiva es false, deshabilitamos los botones play / go to track
  elementHmtl.querySelectorAll('button').forEach(button => {
    if (!binding.value) button.setAttribute('disabled', true)
    else button.removeAttribute('disabled')
  })
}

blur.install = function (Vue) {
  // Recibe un objeto con los hooks de la directiva
  Vue.directive('blur', {
    bind (elementHmtl, binding) {
      setBlur(elementHmtl, binding)
    }
  })
}

export default blur
