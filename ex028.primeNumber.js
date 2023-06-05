import { questionInt } from 'readline-sync'

function startProgram() {
  console.log(`
    ============================Número primo============================
  `)

  let num = questionInt('Informe um número: ')
  let counter = num
  let primeNumber = 0

  do {
    
    if(num % counter === 0) {
      console.log('==================================')
      console.log(`${num} é divisível por: ${counter}.`)

      primeNumber ++
    }

    counter --
    
  }while(counter > 0)

  return `
  ==============================================================================
    ${primeNumber === 2 ? `O número ${num} é primo.` : `O número ${num} não é primo.`}
  ==============================================================================
  `
}

const res = startProgram()

console.log(res)