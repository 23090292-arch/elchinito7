
function buscarJuego(){

var input = document.getElementById("buscador");

var filtro = input.value.toLowerCase();

var tabla = document.getElementById("tabla");

var tr = tabla.getElementsByTagName("tr");

for(var i=1; i<tr.length; i++){

var td = tr[i].getElementsByTagName("td")[2];

if(td){

var texto = td.textContent || td.innerText;

if(texto.toLowerCase().indexOf(filtro) > -1){

tr[i].style.display = "";

}else{

tr[i].style.display = "none";

}

}

}

}


