let formularioMedicos = document.getElementById("registro-medicos-form")
formularioMedicos.addEventListener("submit",(event)=>{
    event.preventDefault()
    const datosMedico ={
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        mumeroCedula: document.getElementById("cedula").value,
        numeroConsultorio: document.getElementById("consultorio").value,
        telefono: document.getElementById("telefono").value,
        correo: document.getElementById("correo").value,
        especialidad: document.getElementById("especialidad").value
    }
    const jsonDatos = JSON.stringify(datosMedico)
    console.log(jsonDatos)
})
