import { questionInt } from 'readline-sync'

function startProgram() {
  console.log(`
    =======================Quantos entre 0 e 10=======================
  `)

  let totalValuesBetweenZeroAndTen = 0
  let oddSum = 0

  for(let counter = 1; counter <= 6; counter++) {
    const num = questionInt(`Informe o ${counter}° valor: `)

    if(num >= 0 && num <= 10) {
      totalValuesBetweenZeroAndTen ++
    }

    if(num >= 0 && num <= 10 && num % 2 !== 0) {
      oddSum += num
    }
  }

  return `
  ==============================================================================
    Total de valores entre 0 e 10: ${totalValuesBetweenZeroAndTen}.
    Total de valores entre 0 e 10 que são ímpares: ${oddSum}
  ==============================================================================
  `
}

const start = startProgram()

console.log(start)