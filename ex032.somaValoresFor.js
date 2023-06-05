import { questionInt } from 'readline-sync'

function startProgram() {
  console.log(`
    ==========================Soma Valores For==========================
  `)

  let accValues = 0

  for(let counter = 1; counter <= 5; counter ++) {
    let question = questionInt(`Informe o ${counter}° número: `)

    accValues += question
  }

  return `
    ===============================
    Total da soma: ${accValues}
    ===============================
  `
}

const start = startProgram()

console.log(start)