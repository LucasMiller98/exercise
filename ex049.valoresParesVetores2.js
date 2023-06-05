import { questionInt } from 'readline-sync'
import { header } from './utils/header.js'

function startProgram() {
  header('Valores pares Vetores 2')

  let amountPairsValues = 0
  const listAmountPairEnter = []
  const listPositionValues = []
  let position = ''
  
  for(let counter = 0; counter < 7; counter++) {
    const num = questionInt(`Informe o ${counter + 1}° valor: `)

    listAmountPairEnter.push(num)
  }

  for(let i = 0; i < listAmountPairEnter.length; i++) {
    if(listAmountPairEnter[i] % 2 === 0) {
      listPositionValues.push(i)

      position += `\n
        O numero ${listAmountPairEnter[i]}, que está na posição ${i}
      `

      amountPairsValues ++
    }
  }

  return `
  ==============================================================================
    Quantidade de valores pares: ${amountPairsValues}
  ==============================================================================
    Posição dos valores pares: ${position}
  ==============================================================================
  `
}

const start = startProgram()

console.log(start)