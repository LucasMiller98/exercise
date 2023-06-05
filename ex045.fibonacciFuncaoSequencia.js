import { questionInt } from 'readline-sync'
import { header } from './utils/header.js'

function startProgram() {
  header('Fibonacci Função Sequencia')

  const n = questionInt('Quantos termos você quer ver? ')
  const term1 = questionInt('Informe o primeiro termo da sequencia: ')
  const term2 = questionInt('Informe o segundo termo da sequencia: ')
  const showTerms = ` ${term1} ${term2} `

  const fibonacci = makeCalc(n, term1, term2, showTerms)

  return fibonacci
}

const start = startProgram()

console.log(start)

function makeCalc(n ,term1, term2, showTerms) {

  for(let counter = 3; counter <= n; counter ++) {
    let term3 = term1 + term2
    term1 = term2
    term2 = term3  

    showTerms += ` ${term3} `
    
  }

  return `
  ==============================================================================
    Quantidade de termos: ${n};
    Resposta: ${showTerms}.
  ==============================================================================
  `
}