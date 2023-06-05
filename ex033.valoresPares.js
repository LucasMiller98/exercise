import { questionInt } from 'readline-sync'

function startProgram(){
  console.log(`
    ======================Valores Pares======================
  `)

  const num = questionInt('Informe um valor: ')
  const listPairProgressiveValue = []
  const listPairRegressiveValue = []

  for(let counter = 0; counter <= num; counter += 2) {
    listPairProgressiveValue.push(counter)
  }

  for(let counter = num; counter >= 0; counter --) {
    if(counter % 2 === 0) {
      listPairRegressiveValue.push(counter)
    }
  }

  return `
  ==============================================================================
    Lista de pares da contagem progressiva: ${listPairProgressiveValue}.
    Lista de pares da contagem regressiva: ${listPairRegressiveValue}. \n============================================================================
  `
}

const start = startProgram()

console.log(start)