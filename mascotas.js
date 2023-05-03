let tablaMascotas = document.getElementById("tabla-mascotas");
let cuerpoTabla = tablaMascotas.querySelector("tbody");

// //Arreglos
// let nombreMascota = ["Luna","Orion"]
// let nombreDueño = ["Ana","Jorge"]
// let cedulaDueño = ["1234567","73412938"]
// let edadMascota = ["5 años","2 meses"]
// let telefonoDueño = ["3108888423","1234567890"]
// let especialidad = ["Veterinaria Conductual","Medicina Interna"]
// let medico = ["Jorge","Daniela"]

// for (let i=0; i < nombreMascota.length; i++){
//     let fila = cuerpoTabla.insertRow();
//     let celdaNombreMascota = fila.insertCell();
//     let celdaNombreDueño = fila.insertCell();
//     let celdaCedulaDueño = fila.insertCell();
//     let celdaEdadMascota = fila.insertCell();
//     let celdaTelefonoDueño = fila.insertCell();
//     let celdaEspecialidad = fila.insertCell();
//     let celdaMedico = fila.insertCell();

//     celdaNombreMascota.textContent = nombreMascota[i];
//     celdaNombreDueño.textContent = nombreDueño[i];
//     celdaCedulaDueño.textContent = cedulaDueño[i];
//     celdaEdadMascota.textContent = edadMascota[i];
//     celdaTelefonoDueño.textContent = telefonoDueño[i];
//     celdaEspecialidad.textContent = especialidad[i];
//     celdaMedico.textContent = medico[i];
// }

//objetos
let mascotas = [
    {
        nombreMascota:"Luna",
        nombreDueño: "Ana",
        cedulaDueño: "1234567",
        edadMascota: "5 años",
        telefonoDueño: "3108888423",
        especialidad: "Veterinaria Conductual",
        medico:"Jorge"
    },
    {
        nombreMascota:"Orion",
        nombreDueño: "Jorge",
        cedulaDueño: "73412938",
        edadMascota: "2 meses",
        telefonoDueño: "1234567890",
        especialidad: "Medicina Interna",
        medico:"Daniela"
    },
    {
        nombreMascota:"Maily",
        nombreDueño: "Kevin",
        cedulaDueño: "59238237",
        edadMascota: "2 años",
        telefonoDueño: "31029384759",
        especialidad: "Dermatología veterinaria",
        medico: "Andres"
    },
    {
        nombreMascota:"Mistyc",
        nombreDueño: "Nicolas",
        cedulaDueño: "97623191",
        edadMascota: "8 años",
        telefonoDueño: "30076391823",
        especialidad: "Farmacología veterinaria",
        medico:"Jeisson"
    }
]

for (let i=0; i < mascotas.length; i++){
    let mascota = mascotas[i]
    let fila = cuerpoTabla.insertRow();
    let celdaNombreMascota = fila.insertCell();
    let celdaNombreDueño = fila.insertCell();
    let celdaCedulaDueño = fila.insertCell();
    let celdaEdadMascota = fila.insertCell();
    let celdaTelefonoDueño = fila.insertCell();
    let celdaEspecialidad = fila.insertCell();
    let celdaMedico = fila.insertCell();

    celdaNombreMascota.textContent = mascota.nombreMascota;
    celdaNombreDueño.textContent = mascota.nombreDueño;
    celdaCedulaDueño.textContent = mascota.cedulaDueño;
    celdaEdadMascota.textContent = mascota.edadMascota;
    celdaTelefonoDueño.textContent = mascota.telefonoDueño;
    celdaEspecialidad.textContent = mascota.especialidad;
    celdaMedico.textContent = mascota.medico;
}
