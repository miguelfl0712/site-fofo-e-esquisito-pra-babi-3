const inicio = new Date("2023-02-11T00:00:00")

function atualizar(){

const agora = new Date()

let diff = agora - inicio

const anos = Math.floor(diff/(1000*60*60*24*365))
const dias = Math.floor(diff/(1000*60*60*24)%365)
const h = Math.floor(diff/(1000*60*60)%24)
const m = Math.floor(diff/(1000*60)%60)
const s = Math.floor(diff/1000%60)

document.getElementById("contador").innerHTML =
anos+" anos "+dias+" dias "+h+"h "+m+"m "+s+"s"

}

setInterval(atualizar,1000)


document.getElementById("coracao").onclick = function(){

document.getElementById("pergunta").classList.remove("hidden")

}


function sim(){

document.getElementById("final").classList.remove("hidden")

}