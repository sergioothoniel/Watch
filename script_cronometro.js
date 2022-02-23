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

let posicao = 0
let rodarCentesimos

botaoIniciar.addEventListener('click', function(){
    
    if(posicao === 0){
        rodarCentesimos = setInterval(incrementarCentesimos, 10)
        posicao = 1
        botaoIniciar.innerText = 'Parar'
    }else{
        clearInterval(rodarCentesimos)
        posicao = 0
        botaoIniciar.innerText = 'Iniciar'
    }
   
})

