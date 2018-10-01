   function probarexpre(){
    var palabra = document.getElementById('palabra').value;
    var exp = new RegExp(/\b[a-zA-Z]+([^aeiouAEIOUáéíóú]\b)/,'g')
    var re = exp;
    var result= contenido.match(re);
    mostrarContenido(result);}
  function longitud7(){
    var palabra = document.getElementById('palabra').value;
    var exp = new RegExp(/\b[a-zA-Z]{6}\w\b/,'g')
    var re = exp;
    var result= contenido.match(re);
    mostrarContenido(result);}

  function m(){
    var palabra = document.getElementById('palabra').value;
    var exp = new RegExp(/\bM[^aeiouAEIOUáéíóú]\w+\b/,'g')
    var re = exp;
    var result= contenido.match(re);
    mostrarContenido(result);}

  function comillas(){
    var palabra = document.getElementById('palabra').value;
    var exp = new RegExp(/"([^"]*)"|'([^']*)'/,'g')
    var re = exp;
    var result= contenido.match(re);
    mostrarContenido(result);}

  function ip(){  
    var palabra = document.getElementById('palabra').value;
    var exp = new RegExp(/([1-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(\.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3}/,'g')
    var re = exp;
    var result= contenido.match(re);
    mostrarContenido(result);}

  function buscarFecha(){
    var palabra = document.getElementById('palabra').value;
    var exp = new RegExp(/\d{2}([\/.-])\d{2}\1\d{4}/,'g')
    var re = exp;
    var result= contenido.match(re);
    mostrarContenido(result);}

  function buscarTel(){
    var palabra = document.getElementById('palabra').value;
    var exp = new RegExp(/[0-9]{10}/,'g')
    var re = exp;
    var result= contenido.match(re);
    mostrarContenido(result);}

  function buscarCoreeo(){
    var palabra = document.getElementById('palabra').value;
    var exp = new RegExp(/([a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9._-]+)/,'g')
    var re = exp;
    var result= contenido.match(re);
    mostrarContenido(result);}

  function url(){
    var palabra = document.getElementById('palabra').value;
    var exp = new RegExp(/(http|https|ftp)+\:+\/\/+(www\.|)+[a-z0-9\-\.]+([a-z\.]|)+\.[a-z]{2,4}/,'g')
    var re = exp;
    var result= contenido.match(re);
    mostrarContenido(result);}

  function postal(){
    var palabra = document.getElementById('palabra').value;
    var exp = new RegExp(/[0-9]{5,5}/,'g')
    var re = exp;
    var result= contenido.match(re);
    mostrarContenido(result);}

function leerArchivo(e) {
    var archivo = e.target.files[0];
    if (!archivo){return;}

        var lector = new FileReader();
        lector.onload = function(e){
          contenido = e.target.result;
          mostrarContenido(contenido);
      };
    lector.readAsText(archivo);
}

function mostrarContenido(contenido) {
  var elemento = document.getElementById('preview');
  elemento.innerHTML = contenido;
}

document.getElementById('file-input')
  .addEventListener('change', leerArchivo, false);

/*


function search_final(){
  
  var palabra = document.getElementById('palabra').value;
  buscar();
  var pos = occurrences(contenido, palabra);
  console.log(palabra, contenido);
  if(pos>0){
    alert( "Encontrado: " + pos + " veces");
  }else{
    alert("No Encontrado");
  }

}

function buscar(){
  var palabra = document.getElementById('palabra').value;
  
  
  var exp = new RegExp(palabra,'g')
var re = exp;
var result = contenido.replace(re, "<span class='buscado'>"+palabra+"</span>") ;
mostrarContenido(result);
}

function reemplazar(){
  var palabra = document.getElementById('palabra').value;
  var nueva_palabra=document.getElementById("nuevapalabra").value;
  
  var exp = new RegExp(palabra,'g')
var re = exp;
var result = contenido.replace(re, nueva_palabra) ;
mostrarContenido(result);
alert(reemplazar());
}



function occurrences(string, subString, allowOverlapping) {

    string += "";
    subString += "";
    var longitud = subString.length;
    if (subString.length <= 0) return (string.length + 1);

    var n = 0,
        pos = 0,
        step = allowOverlapping ? 1 : subString.length;

    while (true) {
        pos = parseFloat(string.indexOf(subString, pos));
        if (pos >= 0) {
            ++n;
            pos += parseFloat(step);
            
        } else break;
    }
    return n;
}
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}*/