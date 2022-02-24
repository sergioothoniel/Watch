const botaoIniciar   = document.querySelector('#crono-botao-iniciar')
const botaoRedefinir = document.querySelector('#crono-botao-redefinir')

const centesimos = document.querySelector('#crono-centesimos')
const segundos   = document.querySelector('#crono-segundos')
const minutos    = document.querySelector('#crono-minutos')

function incrementarCentesimos(){
    let valorAtual = Number(centesimos.innerText)

    if(valorAtual===99){
        centesimos.innerText = '00'
    }else{
        if(valorAtual<9){
            let incremento = valorAtual+1
            centesimos.innerText = '0'+incremento
        }else{
            centesimos.innerText = valorAtual+1
        }
    }
}

function incrementarSegundos(){
    let valorAtual = Number(segundos.innerText)

    if(valorAtual===59){
        segundos.innerText = '00'
    }else{
        if(valorAtual<9){
            let incremento = valorAtual+1
            segundos.innerText = '0'+incremento
        }else{
            segundos.innerText = valorAtual+1
        }
    }
}

function incrementarMinutos(){
    let valorAtual = Number(minutos.innerText)
    let valorSegundos = Number(segundos.innerText)

    if(valorSegundos === 00){
    if(valorAtual===59){
        minutos.innerText = '00'
    }else{
        if(valorAtual<9){
            let incremento = valorAtual+1
            minutos.innerText = '0'+incremento
        }else{
            minutos.innerText = valorAtual+1
        }
    }
    }
}

let posicao = 0
let rodarCentesimos
let rodarSegundos
let rodarMinutos

botaoIniciar.addEventListener('click', function(){
    
    if(posicao === 0){
        rodarCentesimos = setInterval(incrementarCentesimos, 10)
        rodarSegundos = setInterval(incrementarSegundos, 1000)
        rodarMinutos = setInterval(incrementarMinutos, 1000)
        posicao = 1
        botaoIniciar.innerText = 'Parar'
        botaoIniciar.style.backgroundColor = 'red'
    }else{
        clearInterval(rodarCentesimos)
        clearInterval(rodarSegundos)
        clearInterval(rodarMinutos)
        posicao = 0
        botaoIniciar.innerText = 'Iniciar'
        botaoIniciar.style.backgroundColor = 'green'
    }
   
})

botaoRedefinir.addEventListener('click',function(){
    centesimos.innerText = '00'
    segundos.innerText = '00'
    minutos.innerText = '00'
})