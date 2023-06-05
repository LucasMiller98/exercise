import { questionInt } from 'readline-sync'
import { header } from './utils/header.js'

function startProgram() {
  header('Valores pares vetores')

  let amountPairsValues = 0
  const listValuesPairs = []
  
  for(let counter = 0; counter < 7; counter ++) {
    listValuesPairs[counter] = questionInt(`Informe o ${counter + 1}° número: `)
  }

  for(const valuesPairs of listValuesPairs) {
    if(valuesPairs % 2 === 0) {
      amountPairsValues ++
    }
  }

  return `
  ==============================================================================
    Quantidade de valores pares: ${amountPairsValues}
    Lista de valores pares: ${listValuesPairs}
  ==============================================================================
  `
}

const start = startProgram()

console.log(start)