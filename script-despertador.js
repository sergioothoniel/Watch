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

let horariosParaDepertar = []

const despertadores = document.querySelector('#despertadores')
const form   = document.querySelector('form')

form.addEventListener('submit', function(event){
    event.preventDefault()
    
    let horas = event.target[0].value
    let minutos = event.target[1].value
    let horario = horas+':'+minutos
    horariosParaDepertar.push(horario)
    
    let divHorario = document.createElement('div')
    divHorario.innerText = horario
    divHorario.className = 'horarios-salvos'
    despertadores.appendChild(divHorario)

    
    
})

setInterval(verificarDespertador, 500)

function verificarDespertador(){
    let horaAtual = horas.innerText
    let minutosAtual = minutos.innerText
    
    for(let i = 0; i<horariosParaDepertar.length; i++){
        if(Number(horaAtual) == Number(horariosParaDepertar[i].slice(0,2)) && Number(minutosAtual) == Number(horariosParaDepertar[i].slice(3,5))){
            console.log('agora')
        }
    }

}

