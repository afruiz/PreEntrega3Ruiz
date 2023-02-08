


//let nombre = document.getElementById("input_nombre").value;
//let apellido = document.getElementById("input_apellido").value;
//let direccion = document.getElementById("input_direccion").value;
//let correo = document.getElementById("input_correo").value;
//let telefono = document.getElementById("input_tel").value;

let btn_form = document.getElementById("btn_reserva");

function envio_formulario(){
    
    let nombre = document.getElementById("input_nombre").value;
    let apellido = document.getElementById("input_apellido").value;
    let direccion = document.getElementById("input_direccion").value;
    let correo = document.getElementById("input_correo").value;
    let telefono = document.getElementById("input_tel").value;

    localStorage.setItem("nombre" , nombre);
    localStorage.setItem("apellido" , apellido);
    localStorage.setItem("direccion" , direccion);
    localStorage.setItem("correo" , correo);
    localStorage.setItem("telefono" , telefono);

}