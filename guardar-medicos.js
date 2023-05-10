let formularioMedicos = document.getElementById("registro-medicos-form")
formularioMedicos.addEventListener("submit",(event)=>{
    event.preventDefault()
    const datosMedico ={
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        cedula: document.getElementById("cedula").value,
        consultorio: document.getElementById("consultorio").value,
        telefono: document.getElementById("telefono").value,
        correo: document.getElementById("correo").value,
        especialidad: document.getElementById("especialidad").value
    }
    // const jsonDatos = JSON.stringify(datosMedico)
    // // console.log(jsonDatos)
    // document.cookie = `medicos = ${encodeURIComponent(jsonDatos)}`
    guardarCookies(datosMedico)
    const confirmacion =confirm("¿Desea ver los datos?")
    if(confirmacion){
        window.location.href = "medicos.html"
    }else{
        formularioMedicos.reset()
    }
})

function guardarCookies(medico) {
    //las cookies antiguas
    let datos = obtenerCookie("medicos");
    if (datos === "") {
        datos = "[]";
    }
    //objeto
    const medicosObjetos = JSON.parse(datos)
    //añadir nuevas
    medicosObjetos.push(medico)
    const jsonDatos = JSON.stringify(medicosObjetos)
    cambiarCookie("medicos", jsonDatos)
}
function obtenerCookie(nombre) {
    const cookies = document.cookie.split("; ") //split busca cualquier tipo de texto
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        if (cookie[0] === nombre) {
            return decodeURIComponent(cookie[1]);
        }
    }
    return "";
}

function cambiarCookie(nombre, valor) {
    document.cookie = `${nombre}= ${encodeURIComponent(valor)}`;
}
