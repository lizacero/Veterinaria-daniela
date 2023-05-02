let tablaMascotas = document.getElementById("tabla-mascotas");
let cuerpoTabla = tablaMascotas.querySelector("tbody");

//Arreglos
let nombreMascota = ["Luna","Orion"]
let nombreDueño = ["Ana","Jorge"]
let cedulaDueño = ["1234567","73412938"]
let edadMascota = ["5 años","2 meses"]
let telefonoDueño = ["3108888423","1234567890"]
let especialidad = ["Veterinaria Conductual","Medicina Interna"]
let medico = ["Jorge","Daniela"]

for (let i=0; i < nombreMascota.length; i++){
    let fila = cuerpoTabla.insertRow();
    let celdaNombreMascota = fila.insertCell();
    let celdaNombreDueño = fila.insertCell();
    let celdaCedulaDueño = fila.insertCell();
    let celdaEdadMascota = fila.insertCell();
    let celdaTelefonoDueño = fila.insertCell();
    let celdaEspecialidad = fila.insertCell();
    let celdaMedico = fila.insertCell();

    celdaNombreMascota.textContent = nombreMascota[i];
    celdaNombreDueño.textContent = nombreDueño[i];
    celdaCedulaDueño.textContent = cedulaDueño[i];
    celdaEdadMascota.textContent = edadMascota[i];
    celdaTelefonoDueño.textContent = telefonoDueño[i];
    celdaEspecialidad.textContent = especialidad[i];
    celdaMedico.textContent = medico[i];

}