import { questionInt } from 'readline-sync'

function startProgram() {
  console.log(`
    ====================Somador Numérico====================
  `)

  console.log(`
    ====================Informe 5 números====================
  `)
  
  let sum = 0
  
  for(let counter = 1; counter <= 5; counter++) {
    
    let userNumbers = questionInt(`Informe o ${counter}° número: `)

    sum += userNumbers
  }

  return `Soma dos valores: ${sum}`
}

const response = startProgram()

console.log(response)

console.log(`
  
`)