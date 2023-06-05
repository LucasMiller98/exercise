import { questionInt } from 'readline-sync'

function startProgram() {
  console.log(`
  ===========================Soma Procedimento===========================
  `)

  
  const num1 = questionInt(`Informe um valor: `)
  const num2 = questionInt('Informe outro valor: ')


  const sum = doSum(num1, num2)

  return `
  ==============================================================================
    A soma entre ${num1} e ${num2} é ${sum}.
  ==============================================================================
  `
}

const start = startProgram()

console.log(start)

function doSum(num1, num2) {
  return num1 + num2
}