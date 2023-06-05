import { questionInt } from 'readline-sync'
import { header } from './utils/header.js'

function startProgram() {
  header('Fatorial Função')

  const n = questionInt('Informe 1 número para mostrar o seu fatorial: ')

  const factorial = 1

  const factorialResponse = makeCalcFactorial(n, factorial)

  return factorialResponse
}

const start = startProgram()

console.log(start)

function makeCalcFactorial(n, factorial) {
  for(let counter = n; counter > 0; counter --) {
    factorial *= counter
  }

  return `
  ==============================================================================
    ${n}! = ${factorial}
  ==============================================================================
  `
}
