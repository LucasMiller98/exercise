import { questionInt } from 'readline-sync'

function startProgram() {
  console.log(`
    ==========================Analisador de valores==========================
  `)

  let sum = 0
  let average = 0
  let divide = 0
  let totNull = 0
  let pairSum = 0
  let enterValues = []

  const ask = questionInt('Você quer contar até quantos? ')
  
  for(let counter = 1; counter <= ask; counter ++) {
    const num = questionInt(`Informe o ${counter}° valor: `)

    enterValues.push(num)
    
    sum += num
    average = sum / counter

    if(num % 5 === 0) {
      divide ++
    }

    if(num % 2 === 0) {
      pairSum += num
    }

    if(num === 0) {
      totNull ++
    }
  }

  return `
  ==============================================================================
    Valores digitados: ${enterValues}.
    Total da soma: ${sum}.
    Total da média entre os valores: ${average}.
    Total de divisíveis por 5: ${divide}.
    Total dos nulos: ${totNull}.
    Soma dos valores pares: ${pairSum}.
  ==============================================================================
  `
}

const start = startProgram()

console.log(start)