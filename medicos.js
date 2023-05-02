let tablaMedicos = document.getElementById("tabla-medicos");
let cuerpoTabla = tablaMedicos.querySelector("tbody");

let nombre = ["a"]
let apellido = ["b"]
let cedula = ["c"]
let especialidad = ["d"]
let consultorio = ["e"]
let correo = ["f"]
let paciente = ["g"]

for(let i=0; i<nombre.length; i++){
    let fila = cuerpoTabla.insertRow();
    let celdaNombre = fila.insertCell();
    let celdaApellido = fila.insertCell();
    let celdaCedula = fila.insertCell();
    let celdaEspecialidad = fila.insertCell();
    let celdaConsultorio = fila.insertCell();
    let celdaCorreo = fila.insertCell();
    let celdaPaciente = fila.insertCell();

    celdaNombre.textContent = nombre[i];
    celdaApellido.textContent = apellido[i];
    celdaCedula.textContent = cedula[i];
    celdaEspecialidad.textContent = especialidad[i];
    celdaConsultorio.textContent = consultorio[i];
    celdaCorreo.textContent = correo[i];
    celdaPaciente.textContent = paciente[i];

}