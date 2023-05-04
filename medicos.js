let tablaMedicos = document.getElementById("tabla-medicos");
let cuerpoTabla = tablaMedicos.querySelector("tbody");

fetch('datos_medicos.json')
    .then(Response => Response.json())

    .then(medicos => {
        for (let i = 0; i < medicos.length; i++) {
            let medico = medicos[i]

            let fila = cuerpoTabla.insertRow();
            let celdaNombre = fila.insertCell();
            let celdaApellido = fila.insertCell();
            let celdaCedula = fila.insertCell();
            let celdaEspecialidad = fila.insertCell();
            let celdaConsultorio = fila.insertCell();
            let celdaCorreo = fila.insertCell();
            let celdaPaciente = fila.insertCell();

            celdaNombre.textContent = medico.nombre;
            celdaApellido.textContent = medico.apellido;
            celdaCedula.textContent = medico.cedula;
            celdaEspecialidad.textContent = medico.especialidad;
            celdaConsultorio.textContent = medico.consultorio;
            celdaCorreo.textContent = medico.correo;
            celdaPaciente.textContent = medico.paciente;
        }
    })

// // Arreglos
// let nombre = ["a"]
// let apellido = ["b"]
// let cedula = ["c"]
// let especialidad = ["d"]
// let consultorio = ["e"]
// let correo = ["f"]
// let paciente = ["g"]

// for(let i=0; i<nombre.length; i++){
//     let fila = cuerpoTabla.insertRow();
//     let celdaNombre = fila.insertCell();
//     let celdaApellido = fila.insertCell();
//     let celdaCedula = fila.insertCell();
//     let celdaEspecialidad = fila.insertCell();
//     let celdaConsultorio = fila.insertCell();
//     let celdaCorreo = fila.insertCell();
//     let celdaPaciente = fila.insertCell();

//     celdaNombre.textContent = nombre[i];
//     celdaApellido.textContent = apellido[i];
//     celdaCedula.textContent = cedula[i];
//     celdaEspecialidad.textContent = especialidad[i];
//     celdaConsultorio.textContent = consultorio[i];
//     celdaCorreo.textContent = correo[i];
//     celdaPaciente.textContent = paciente[i];
// }

// //Objetos
// let medicos = [
//     {
//         nombre: "a",
//         apellido: "b",
//         cedula: "c",
//         especialidad: "d",
//         consultorio: "e",
//         correo: "f",
//         paciente: "g"
//     },
//     {
//         nombre: "h",
//         apellido: "i",
//         cedula: "j",
//         especialidad: "k",
//         consultorio: "l",
//         correo: "m",
//         paciente: "n"
//     }
// ]

// for(let i=0;i<medicos.length;i++){
//     let medico = medicos[i]
//     let fila = cuerpoTabla.insertRow();
//     let celdaNombre = fila.insertCell();
//     let celdaApellido = fila.insertCell();
//     let celdaCedula = fila.insertCell();
//     let celdaEspecialidad = fila.insertCell();
//     let celdaConsultorio = fila.insertCell();
//     let celdaCorreo = fila.insertCell();
//     let celdaPaciente = fila.insertCell();

//     celdaNombre.textContent = medico.nombre;
//     celdaApellido.textContent = medico.apellido;
//     celdaCedula.textContent = medico.cedula;
//     celdaEspecialidad.textContent = medico.especialidad;
//     celdaConsultorio.textContent = medico.consultorio;
//     celdaCorreo.textContent = medico.correo;
//     celdaPaciente.textContent = medico.paciente;
// }

// //clases
// class Medico{
//     constructor(nombre,apellido,cedula,especialidad,consultorio,correo,paciente){
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.cedula = cedula;
//         this.especialidad = especialidad;
//         this.consultorio = consultorio;
//         this.correo = correo;
//         this.paciente = paciente
//     }
// }
// //objertos
// let medico1 = new Medico("a","b","c","d","e","f","g")
// let medico2 = new Medico("h","i","j","k","l","m","n")

// agregarFila(medico1)
// agregarFila(medico2)

// function agregarFila(medico){
//     let fila = cuerpoTabla.insertRow();
//     let celdaNombre = fila.insertCell();
//     let celdaApellido = fila.insertCell();
//     let celdaCedula = fila.insertCell();
//     let celdaEspecialidad = fila.insertCell();
//     let celdaConsultorio = fila.insertCell();
//     let celdaCorreo = fila.insertCell();
//     let celdaPaciente = fila.insertCell();

//     celdaNombre.textContent = medico.nombre;
//     celdaApellido.textContent = medico.apellido;
//     celdaCedula.textContent = medico.cedula;
//     celdaEspecialidad.textContent = medico.especialidad;
//     celdaConsultorio.textContent = medico.consultorio;
//     celdaCorreo.textContent = medico.correo;
//     celdaPaciente.textContent = medico.paciente;
// }