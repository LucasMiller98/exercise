import { questionFloat, question } from 'readline-sync'

function startProgram() {
  console.log(`
    ===========================Detector Pesado===========================
  `)

  let greaterWeight = 0
  let greaterWeightName = ''
  
  for(let counter = 1; counter <= 5; counter++) {

    let name = ''
    
    while(true) {
      name = question(`Informe o nome da ${counter}° pessoa: `).trim()

      if(name) {
        break
      }

    }


    createSpace()
    
    const weight = questionFloat(`Informe o peso de ${name}: `)

    createSpace()
    
    if(weight > greaterWeight) {
      greaterWeight = weight
      greaterWeightName = name
    }

    console.log(`
      O maior peso até o momento é o de ${greaterWeightName}, que foi ${greaterWeight}.  
    `)
    
    createSpace()
    
  }

  return `
  ==============================================================================
    O maior peso cadastrado no sistema foi ${greaterWeight}kg.
    Nome da pessoa com maior peso: ${greaterWeightName}.
  ==============================================================================
  `
}

function createSpace() {
  console.log(`
  ==============================================================================
  `)
}

const start = startProgram()

console.log(start)