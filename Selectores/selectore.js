

// QuerySelector mas nuevo que el getElemtByid
const titulo = document.querySelector("#titulo")
const evento_querySelector = document.getElementById("evento_querySelector")

evento_querySelector.addEventListener("click", () => {
    titulo.textContent = "Mis Actividades de la semana 💵"
})

// cambiar todos los label con querySelectorAll
const evento_class = document.querySelectorAll(".evento_class")
const btevento_queryAll = document.querySelector("#evento_queryAll")

btevento_queryAll.addEventListener("click", () => {
    for(let i=0; i < evento_class.length; i++){
        evento_class[i].textContent = "Nueva actividad " + i + " No Joda"
    }
})

// Definir variables para utilizar el getElemtByid
const lbleventos_id = document.getElementById("eventos_id")
const evento_btnId = document.getElementById("evento_btnId")

evento_btnId.addEventListener("click", () =>{
    lbleventos_id.textContent = "Actividad de la semana"
})

const lblevento_class = document.getElementsByClassName("evento_class")
const evento_btnclass = document.getElementById("evento_btnclass")

evento_btnclass.addEventListener("click", () =>{
    for(let i=0; i < lblevento_class.length; i++)
        lblevento_class[i].textContent = "Actividad " + i + "Finalizada 🤔"
})



// definir variables con los objetos a manipular
const bntClick = document.getElementById("btnclic")
const btnDobleclic = document.getElementById("btndobleclic")
const btnPasarmouse = document.getElementById("btnpasarmouse")
const btnclickDerecho = document.getElementById("btnclickderecho")


// metodo addEventListener esta es la lista de eventos del mouse o teclado
bntClick.addEventListener("click", () => {
    alert("Oprimiste el boton click 📎")
})

btnDobleclic.addEventListener("dblclick", () => {
    alert("Diste btndobleclic")
})

btnPasarmouse.addEventListener("mouseover", () => {
    alert("Pasaste el mause")
})

btnclickDerecho.addEventListener("contextmenu", ()=>{
    alert("Diste click derecho")
})

