const calcular = document.getElementById('button')

const calcularIMC = () => {
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('result')

    const IMC = (peso / (altura*altura)).toFixed(1)
    let classificacao = ''

    if (altura.includes('.')|| altura.includes(',')) {
        if (IMC <= 18.5) {
            classificacao = 'abaixo do peso'
        } else if (IMC >= 18.6 && IMC <= 24.9) {
            classificacao = 'no peso ideal parabens'
        } else if (IMC >= 25.0 && IMC <= 29.9) {
            classificacao = 'levemente acima do peso'
        } else if (IMC >= 30.0 && IMC <= 34.9) {
            classificacao = 'com obesidade grau 1'
        } else if (IMC >= 35.0 && IMC <= 39.9) {
            classificacao = 'com obesidade grau 2 (severa)'
        } else {
            classificacao = 'com obesidade grau 3 (morbida)'
        }

        resultado.textContent = (`${nome}, seu IMC é ${IMC}: você está ${classificacao}`)

    } else {
        resultado.textContent = ('por favor, insira sua altura em metros')
    }

}

calcular.addEventListener('click', calcularIMC)

























/*

const btn = document.getElementById('button')

const calcularIMC = () => {

const nome = document.getElementById('nome').value
const resultado = document.getElementById('result')
const altura = document.getElementById('altura').value
const peso = document.getElementById('peso').value
  
   let IMC = (peso/(altura)**2).toFixed(1)
  let classificacao = ''
if(altura.includes('.')){
    
    if(IMC <= 18.5){
       classificacao = 'abaixo do peso'
    } else if(IMC >=18.6 && IMC <= 24.9){
   classificacao = 'no peso ideal parabens'
    } else if(IMC>=25.0 && IMC <=29.9){
 classificacao = 'levemente acima do peso'
    } else if(IMC >=30.0 && IMC <= 34.9){
    classificacao = 'com obesidade grau 1'
    } else if(IMC >=35.0 && IMC <=39.9){
 classificacao = 'com obesidade grau 2 (severa)'
    } else{
     classificacao = 'com obesidade grau 3 (morbida)'
    }
resultado.textContent = (`${nome}, seu IMC é ${IMC}, você está ${classificacao}`)
   

    }else{
        resultado.textContent = 'coloque sua altura em metros'
    }
}

    

    btn.addEventListener('click', calcularIMC)
   */

