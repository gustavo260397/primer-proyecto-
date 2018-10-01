function buscarFecha(){
var palabra = document.getElementById('palabra').value;
var exp = new RegExp(/\d{2}([\/.-]))\d{2\1\d/,'g')
var re = exp;

var result= contenido.match(re);
mostrarContenido(result);

}