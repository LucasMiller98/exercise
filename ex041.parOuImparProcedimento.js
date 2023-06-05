import { questionInt } from 'readline-sync'

function startProgram() {
  console.log(`
    ========================Par ou Ímpar Procedimento===========================
  `)

  const num = questionInt('Informe um número: ')

  const verify = verifyNumber(num)

  return verify
}

function verifyNumber(num) {
  if(num % 2 === 0) {
    return `
    ============================================================================
      O número ${num} é par.
    ============================================================================
    `
  }

  return `
  ==============================================================================
    O número ${num} é ímpar.
  ==============================================================================
  `
}

const start = startProgram()

console.log(start)