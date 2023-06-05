import { questionInt } from 'readline-sync'
import { header } from './utils/header.js'

const makeCalc = (num1, num2) => {
  return `
  ==============================================================================
    Total da soma: ${num1 + num2}
  ==============================================================================
  `
}

function startProgram() {
  header('Soma função')

  const num1 = questionInt(`Informe um valor: `)
  const num2 = questionInt('Informe outro valor: ')

  const sum = makeCalc(num1, num2)

  return sum
}

const response = startProgram()

console.log(response)
