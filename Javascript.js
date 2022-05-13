// Parrafo 1
let p1 = document.getElementById("p1")
p1.addEventListener("mouseover", parrafoOver)
function parrafoOver(){
    p1.style.border = "5px solid red"
    p1.style.fontSize = "22px"
    p1.style.color = "coral"
}
p1.addEventListener("mouseout", parrafoOut)
function parrafoOut(){
    p1.style.border = ""
    p1.style.fontSize = ""
    p1.style.color = ""
}

//Parrafo 2
let p2 = document.getElementById("p2")
p2.addEventListener("mouseover", parrafoOver1)
function parrafoOver1(){
    p2.style.border = "5px solid red"
    p2.style.fontSize = "22px"
    p2.style.color = "coral"
}
p2.addEventListener("mouseout", parrafoOut1)
function parrafoOut1(){
    p2.style.border = ""
    p2.style.fontSize = ""
    p2.style.color = ""
}

// Parrafo 3
let p3 = document.getElementById("p3")
p3.addEventListener("mouseover", parrafoOver2)
function parrafoOver2(){
    p3.style.border = "5px solid red"
    p3.style.fontSize = "22px"
    p3.style.color = "coral"
}
p3.addEventListener("mouseout", parrafoOut2)
function parrafoOut2(){
    p3.style.border = ""
    p3.style.fontSize = ""
    p3.style.color = ""
}

// Ejercicio 2
function nombre() {
    var nombre = document.getElementsByTagName("input").value
        document.getElementById("M1").innerHTML = "Gracias" + nombre
}

// Ejercicio 3
function cambiar() {
    document.getElementById("body").style.background = "blue";
}
function cambiar2() {
    document.getElementById("body").style.background = "red";
}
function cambiar3() {
    document.getElementById("body").style.background = "green";
}
function cambiar4() {
    document.getElementById("body").style.background = "white";
}