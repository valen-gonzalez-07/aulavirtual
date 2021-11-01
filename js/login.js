const nombre = document.getElementById("name");
const email = document.getElementById("mail");
const pass = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");
const inicio = document.getElementById("inicio");
const bienvenida = document.getElementById("bienvenida");
const titulo = document.getElementById("inicio-title");

form.addEventListener("submit", e=>{
    e.preventDefault();
    let warn = "";
    let emailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    let entrar = false;
    parrafo.innerHTML = "";
    if(nombre.value.length == 0){
        warn += `Olvidaste ingresar tu <b>nombre</b>. <br/>`;
        entrar = true;
    };
    if(!emailValidate.test(email.value)){
        warn += `El <b>email</b> que ingresaste no es válido. <br/>`;
        entrar = true;
    }
    if(pass.value.length < 8){
        warn += `Tu <b>contraseña</b> debe tener más de 8 caracteres. <br/>`;
        entrar = true;
    }
    if(entrar == true){
        parrafo.style.display = "inline";
        parrafo.innerHTML += warn;
    }else{
        iniciarSesion();
    }
})

function iniciarSesion(){
    form.style.display = "none";
    inicio.style.display = "flex";
    inicio.classList.add("inicio");
    bienvenida.innerHTML += `¡Hola <b>${nombre.value}</b>! Iniciá sesión para continuar.`
}
