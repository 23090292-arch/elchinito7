/* =========================
   TEMAS
========================= */

function modoOscuro(){

document.body.style.background = "#666";
document.body.style.color = "white";

localStorage.setItem("tema","oscuro");

}

function modoNeon(){

document.body.style.background = "#090018";
document.body.style.color = "#00ffff";

localStorage.setItem("tema","neon");

}

function verdeGamer(){

document.body.style.background = "#001a00";
document.body.style.color = "#00ff66";

localStorage.setItem("tema","verde");

}

function rojoRGB(){

document.body.style.background = "#220000";
document.body.style.color = "#ff3b3b";

localStorage.setItem("tema","rojo");

}

/* =========================
   CURSORES
========================= */

function cursorMira(){

document.body.style.cursor = "crosshair";

localStorage.setItem("cursor","mira");

}

function cursorControl(){

document.body.style.cursor = "pointer";

localStorage.setItem("cursor","control");

}

function cursorEspada(){

document.body.style.cursor = "cell";

localStorage.setItem("cursor","espada");

}

/* =========================
   MUSICA
========================= */

function activarMusica(){

document.getElementById("musica").play();

}

function silenciar(){

document.getElementById("musica").pause();

}

function sonidoGamer(){

var sonido = new Audio("click.mp3");

sonido.play();

}

/* =========================
   VOLUMEN
========================= */

const volumen = document.getElementById("volumen");
const musica = document.getElementById("musica");

if(volumen && musica){

volumen.addEventListener("input", function(){

musica.volume = volumen.value;

});

}

/* =========================
   RGB
========================= */

function toggleRGB(toggle){

toggle.classList.toggle("activo");

document.body.classList.toggle("rgb");

if(document.body.classList.contains("rgb")){

localStorage.setItem("rgb","activo");

}else{

localStorage.removeItem("rgb");

}

}

/* =========================
   CYBERPUNK
========================= */

function toggleCyber(toggle){

toggle.classList.toggle("activo");

document.body.classList.toggle("cyberpunk");

if(document.body.classList.contains("cyberpunk")){

localStorage.setItem("cyber","activo");

}else{

localStorage.removeItem("cyber");

}

}

/* =========================
   PARTICULAS
========================= */

var neonActivo = false;

function toggleParticulas(elemento){

elemento.classList.toggle("activo");

var particles = document.querySelectorAll(".particle");

if(!neonActivo){

particles.forEach(function(p){

p.style.background = "#00ffff";

p.style.boxShadow =
"0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 40px #00ffff";

p.style.width = "10px";
p.style.height = "10px";

});

localStorage.setItem("particulas","on");

neonActivo = true;

}else{

particles.forEach(function(p){

p.style.background = "#00e1ff";

p.style.boxShadow = "none";

p.style.width = "4px";
p.style.height = "4px";

});

localStorage.removeItem("particulas");

neonActivo = false;

}

}

/* =========================
   RECUPERAR AJUSTES
========================= */

window.onload = function(){

/* TEMAS */

var tema = localStorage.getItem("tema");

if(tema == "oscuro"){
modoOscuro();
}

if(tema == "neon"){
modoNeon();
}

if(tema == "verde"){
verdeGamer();
}

if(tema == "rojo"){
rojoRGB();
}

/* CURSOR */

var cursor = localStorage.getItem("cursor");

if(cursor == "mira"){
document.body.style.cursor = "crosshair";
}

if(cursor == "control"){
document.body.style.cursor = "pointer";
}

if(cursor == "espada"){
document.body.style.cursor = "cell";
}

/* RGB */

if(localStorage.getItem("rgb") == "activo"){

document.body.classList.add("rgb");

}

/* CYBERPUNK */

if(localStorage.getItem("cyber") == "activo"){

document.body.classList.add("cyberpunk");

}

/* PARTICULAS */

if(localStorage.getItem("particulas") == "on"){

var particles = document.querySelectorAll(".particle");

particles.forEach(function(p){

p.style.background = "#00ffff";

p.style.boxShadow =
"0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 40px #00ffff";

p.style.width = "10px";
p.style.height = "10px";

});

neonActivo = true;

}

}