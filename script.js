let numero = ''
let numero2 = ''
var soma = false
var subt = false
var mult = false
var divs = false
var porc = false
var pote = false
var nutt = false
var operacao = ""
var strogonoff = false

const visor = document.getElementById('visorzinho')

const botao1 = document.getElementById('b1')
const botao2 = document.getElementById('b2')
const botao3 = document.getElementById('b3')
const botao4 = document.getElementById('b4')
const botao5 = document.getElementById('b5')
const botao6 = document.getElementById('b6')
const botao7 = document.getElementById('b7')
const botao8 = document.getElementById('b8')
const botao9 = document.getElementById('b9')
const botao0 = document.getElementById('b0')
const bvirgula = document.getElementById('bv')
const bstrogonoff = document.getElementById('strogonoff')

bstrogonoff.addEventListener('click', function() {
    if (strogonoff == false) {
        strogonoff = true

    // 1
    botao1.addEventListener('click', function() {
        if (soma == false && subt == false && mult == false && divs == false && porc == false && pote == false && nutt == false){
            let num1 = numero + '1'
            numero = num1
            visor.textContent = numero
        } else {
            let num1 = numero2 + '1'
            numero2 = num1
            visor.textContent = `${numero}${operacao}${numero2}`
        }
    })

    //2
    botao2.addEventListener('click', function() {
        if (soma == false && subt == false && mult == false && divs == false && porc == false && pote == false && nutt == false){
            let num2 = numero + '2'
            numero = num2
            visor.textContent = numero
        } else {
            let num2 = numero2 + '2'
            numero2 = num2
            visor.textContent = `${numero}${operacao}${numero2}`
        }
    })

    //3
    botao3.addEventListener('click', function() {
        if (soma == false && subt == false && mult == false && divs == false && porc == false && pote == false && nutt == false){
            let num3 = numero + '3'
            numero = num3
            visor.textContent = numero
        } else {
            let num3 = numero2 + '3'
            numero2 = num3
            visor.textContent = `${numero}${operacao}${numero2}`
        }
    })

    //4
    botao4.addEventListener('click', function() {
        if (soma == false && subt == false && mult == false && divs == false && porc == false && pote == false && nutt == false){
            let num4 = numero + '4'
            numero = num4
            visor.textContent = numero
        } else {
            let num4 = numero2 + '4'
            numero2 = num4
            visor.textContent = `${numero}${operacao}${numero2}`
        }
    })

    //5
    botao5.addEventListener('click', function() {
        if (soma == false && subt == false && mult == false && divs == false && porc == false && pote == false && nutt == false){
            let num5 = numero + '5'
            numero = num5
            visor.textContent = numero
        } else {
            let num5 = numero2 + '5'
            numero2 = num5
            visor.textContent = `${numero}${operacao}${numero2}`
        }
    })

    //6
    botao6.addEventListener('click', function() {
        if (soma == false && subt == false && mult == false && divs == false && porc == false && pote == false && nutt == false){
            let num6 = numero + '6'
            numero = num6
            visor.textContent = numero
        } else {
            let num6 = numero2 + '6'
            numero2 = num6
            visor.textContent = `${numero}${operacao}${numero2}`
        }
    })

    //7
    botao7.addEventListener('click', function() {
        if (soma == false && subt == false && mult == false && divs == false && porc == false && pote == false && nutt == false){
            let num7 = numero + '7'
            numero = num7
            visor.textContent = numero
        } else {
            let num7 = numero2 + '7'
            numero2 = num7
            visor.textContent = `${numero}${operacao}${numero2}`
        }
    })

    //8
    botao8.addEventListener('click', function() {
        if (soma == false && subt == false && mult == false && divs == false && porc == false && pote == false && nutt == false){
            let num8 = numero + '8'
            numero = num8
            visor.textContent = numero
        } else {
            let num8 = numero2 + '8'
            numero2 = num8
            visor.textContent = `${numero}${operacao}${numero2}`
        }
    })

    //9
    botao9.addEventListener('click', function() {
        if (soma == false && subt == false && mult == false && divs == false && porc == false && pote == false && nutt == false){
            let num9 = numero + '9'
            numero = num9
            visor.textContent = numero
        } else {
            let num9 = numero2 + '9'
            numero2 = num9
            visor.textContent = `${numero}${operacao}${numero2}`
        }
    })


    //0
    botao0.addEventListener('click', function() {
        if (soma == false && subt == false && mult == false && divs == false && porc == false && pote == false && nutt == false){
            let num0 = numero + '0'
            numero = num0
            visor.textContent = numero
        } else {
            let num0 = numero2 + '0'
            numero2 = num0
            visor.textContent = `${numero}${operacao}${numero2}`
        }
    })

    //,
    bvirgula.addEventListener('click', function() {
        if (soma == false && subt == false && mult == false && divs == false && porc == false && pote == false && nutt == false){
            let v = numero + '.'
            numero = v
            visor.textContent = numero
        } else {
            let v = numero2 + '.'
            numero2 = v
            visor.textContent = `${numero}${operacao}${numero2}`
        }
    })


    //operações e resultado
    const bsoma = document.getElementById('soma')
    const bsubt = document.getElementById('subt')
    const bmult = document.getElementById('mult')
    const bdivs = document.getElementById('divs')
    const bporc = document.getElementById('porc')
    const bpot = document.getElementById('potente')
    const bnutt = document.getElementById('nutella')

    bsoma.addEventListener('click', function() {
        if (subt == false && mult == false && divs == false && porc == false && pote == false && nutt == false){
        soma = true
        operacao = "+"
        visor.textContent = `${numero}+${numero2}`
        }
    })

    bsubt.addEventListener('click', function() {
        if (soma == false && mult == false && divs == false && porc == false && pote == false && nutt == false){
        subt = true
        operacao = "-"
        visor.textContent = `${numero}-${numero2}`
        }
    })

    bmult.addEventListener('click', function() {
        if (soma == false && subt == false && divs == false && porc == false && pote == false && nutt == false){
        mult = true
        operacao = "x"
        visor.textContent = `${numero}x${numero2}`
        }
    })

    bdivs.addEventListener('click', function() {
        if (soma == false && subt == false && mult == false && porc == false && pote == false && nutt == false){
        divs = true
        operacao = "/"
        visor.textContent = `${numero}/${numero2}`
        }
    })

    bporc.addEventListener('click', function() {
        if (soma == false && subt == false && mult == false && divs == false  && pote == false && nutt == false){
        porc = true
        operacao = "% "
        visor.textContent = `${numero}% ${numero2}`
        }
    })

    bpot.addEventListener('click', function() {
        if (soma == false && subt == false && mult == false && divs == false && porc == false && nutt == false){
        pote = true
        operacao = "^"
        visor.textContent = `${numero}^${numero2}`
        }
    })

    bnutt.addEventListener('click', function() {
        if (soma == false && subt == false && mult == false && divs == false && porc == false && pote == false){
        nutt = true
        operacao = "√"
        visor.textContent = `√${numero}`
        }
    })


    //apagar ultimo, limpar e resultado
    const bigual = document.getElementById('bResu')
    const blimpa = document.getElementById('apagAll')
    const bvolta = document.getElementById('apagaUm')
    let resultado = 0

    bigual.addEventListener('click', function() {
        if (operacao != "") {
            if (soma == true) {
                resultado = Number(numero) + Number(numero2)
                soma = false

            } else if (subt == true) {
                resultado = Number(numero) - Number(numero2)
                subt = false

            } else if (mult == true) {
                resultado = Number(numero) * Number(numero2)
                mult = false

            } else if (divs == true) {
                if (numero2 == 0) {
                    alert("Se tu não parar, eu paro")
                    window.close()
                } else {
                    resultado = Number(numero) / Number(numero2)
                    divs = false
                }
            } else if (porc == true) {
                resultado = Number(numero2) * (Number(numero) / 100)
                porc = false
            } else if (pote == true) {
                resultado = Number(numero) ** Number(numero2)
                pote = false
            } else if (nutt == true) {
                resultado = Math.sqrt(Number(numero))
                nutt = false
            }
            numero = resultado
            numero2 = ""
            visor.textContent = resultado
        }
    })

    blimpa.addEventListener('click', function() {
        soma = false
        subt = false
        mult = false
        divs = false
        numero = ""
        numero2 = ""
        operacao = ""
        visor.textContent = "000"
    })

    bvolta.addEventListener('click', function() {
        if (soma == false && subt == false && mult == false && divs == false){
        numero = numero.toString().split("")
        numero.pop()
        numero = numero.join("")
        visor.textContent = numero
        } else {
        numero2 = numero2.toString().split("")
        numero2.pop()
        numero2 = numero2.join("")
        visor.textContent = `${numero}${operacao}${numero2}`
        } 
    })

    } else {
        window.location.reload();
    }
})