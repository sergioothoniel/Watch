let dataDeHoje =  new Date()

let horarioAtual  = dataDeHoje.toString().split(' ')[4]
let horaAtual     = Number(horarioAtual.slice(0,2))
let minutosAtual  = Number(horarioAtual.slice(3,5))
let segundosAtual = Number(horarioAtual.slice(6,8))


let diaDaSemana = dataDeHoje.toString().split(' ')[0]
let mes         = dataDeHoje.toString().split(' ')[1]
let diaDoMes    = Number(dataDeHoje.toString().split(' ')[2])
let ano         = Number(dataDeHoje.toString().split(' ')[3])


const horas    = document.querySelector('#hora')
const minutos  = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')

horas.innerText    = horaAtual
minutos.innerText  = minutosAtual
segundos.innerText = segundosAtual

function incrementarSegundos(){
    segundosAtual = Number(segundosAtual)
    if(segundosAtual === 59){
        segundosAtual = "00"
        segundos.innerText = segundosAtual
        
    }
    else{
        
        if(segundosAtual<9){
            segundosAtual++
            segundos.innerText = `0${segundosAtual}`

        }else{
            segundosAtual++
            segundos.innerText = segundosAtual.toString()
        }
    }
    
    
}

function incrementarMinutos(){
    if(segundosAtual == 0){
        minutosAtual++
        minutos.innerText = minutosAtual              
    }
    
}

setInterval(incrementarSegundos,1000)
setInterval(incrementarMinutos,1000)

