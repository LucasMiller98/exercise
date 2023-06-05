import { questionInt } from 'readline-sync'
import { header } from './utils/header.js'
import { getRandomIntInclusive } from './utils/randomInclusive.js'

function startProgram() {
  header('Ordena Vetor')

  const crescentOrder = []
  
  // for(let counter = 0; counter < 10; counter ++) {
  //   const num = questionInt(`Informe o ${counter + 1}° valor: `)

  //   crescentOrder.push(num)
  // }

  // const numbers = crescentOrder.sort((a, b) => {
  //   if(a > b) return 1

  //   if(a < b) return -1
    
  //   return 0
  // })

  for(let counter = 0; counter < 10; counter ++) {
    crescentOrder[counter] = getRandomIntInclusive(0, 100)
  }

  for(let counterA = 0; counterA < 10; counterA ++) {
    for(let counterB = counterA + 1; counterB < 10; counterB ++) {
      if(crescentOrder[counterA] > crescentOrder[counterB]) {
        let shuffle = crescentOrder[counterA]
        crescentOrder[counterA] = crescentOrder[counterB]
        crescentOrder[counterB] = shuffle
      }
    }
  }
  
  for(let counter = 0; counter < 10; counter ++) {
    console.log(crescentOrder[counter])
  }
  
  // return `
  // ==============================================================================
  //   Valores ordem crescente: ${crescentOrder}    
  // ==============================================================================
  // `
}

startProgram()

