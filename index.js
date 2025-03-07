var setadireita = window.document.getElementById("setadireita")
var Leonardo = window.document.getElementById("Leonardo")
var Samanta = window.document.getElementById("Samanta")
var Bruna = window.document.getElementById("Bruna")
var setaesquerda = window.document.getElementById("setaesquerda")



function rolarparadireita(){
  Leonardo.style = "display:none"
   Bruna.style = "display:flex"
   setadireita.style = "displa:none"
   setaesquerda.style = "display:flex"

}

function rolarparaesquerda(){
    Leonardo.style = "display:flex"
Bruna.style = "display:none"
}