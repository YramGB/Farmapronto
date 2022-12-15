document.getElementById("btn-registarse").addEventListener("click", register);
document.getElementById("btn-iniciar-sesion").addEventListener("click", login);

var contenedor = document.querySelector("contenedor");
var contenedor_login_register = document.querySelector("contenedor-login-register");
var formulario_login = document.querySelector(".formulario-login");
var formulario_register = document.querySelector(".formulario-register");
var contenedor_login = document.querySelector(".contenedor-login");
var contenedor_register = document.querySelector(".contenedor-register");

function register(){
    formulario_register.style.display = "block";    
    formulario_login.style.display = "none";        
}

function login(){
    formulario_login.style.display = "block";
    formulario_register.style.display = "none"; 
}
