import { questionInt } from 'readline-sync'

function startProgram() {
  console.log(`
    ========================Somador Maior Menor========================
  `)

  let counter = 1
  let greaterNumber = 0
  let smallerNumber = 0
  let sum = 0
  
  while(counter <= 5) {
    let num = questionInt(`Informe o ${counter}° valor: `)

    smallerNumber = num

    sum += num

    if(num > greaterNumber) {
      greaterNumber = num
    }

    if(num < smallerNumber) {
      smallerNumber = num
    }

    counter ++
  }

  return `
    Soma dos valores: ${sum}
    =============================
    Maior valor: ${greaterNumber}
    =============================
    Menor valor: ${smallerNumber}
  `

}

const response = startProgram()

console.log(response)

console.log(``)