import { questionInt } from 'readline-sync'

function startProgram() {
  console.log(`
    =======================Conta negativos=======================
  `)

  let negativesNumbers = 0
  
  for(let counter = 1; counter <= 5; counter++) {
    const num = questionInt(`Informe o ${counter}° número: `)

    if(num < 0) {
      negativesNumbers ++
    }
    
  }

  return `
    ================================================
    Total de números negativos: ${negativesNumbers}.
    ================================================
  `
}

const start = startProgram()

console.log(start)
console.log(``)