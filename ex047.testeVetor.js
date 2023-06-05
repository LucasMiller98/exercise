import { questionInt } from 'readline-sync'
import { header } from './utils/header.js'

function startProgram() {
  header('Teste Vetor')

  const listValues = []
  
  for(let counter = 0; counter < 6; counter++) {
    const num = questionInt(`Informe o ${counter + 1}° valor: `)

    listValues.push(num)
  }

  return `
  ==============================================================================
    Lista de valores digitados: ${listValues}
  ==============================================================================
  `
}

const start = startProgram()

console.log(start)