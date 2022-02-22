let dataDeHoje =  new Date()

let horarioAtual  = dataDeHoje.toString().split(' ')[4]
let horaAtual     = horarioAtual.slice(0,2)
let minutosAtual  = horarioAtual.slice(3,5)
let segundosAtual = horarioAtual.slice(6,8)


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
        minutosAtual = Number(minutosAtual)
        if(minutosAtual===59){
            minutosAtual = "00"
            minutos.innerText = minutosAtual
        }else{
            if(minutosAtual<9){
                minutosAtual++
                minutos.innerText = `0${minutosAtual}`
            }else{
                minutosAtual++
                minutos.innerText = minutosAtual
            }
        }
                      
    }
    
}

function incrementarHoras(){
    if(minutosAtual == 0 && segundosAtual == 0){
        horaAtual = Number(horaAtual)
        if(horaAtual === 23){
            horaAtual = '00'
            horas.innerText = horaAtual
        }else{
            if(horaAtual<9){
                horaAtual++
                horas.innerText = `0${horaAtual}`
            }else{
                horaAtual++
                horas.innerText = horaAtual
            }
        }
    }
}

setInterval(incrementarSegundos,1000)
setInterval(incrementarMinutos,1000)
setInterval(incrementarHoras,1000)

