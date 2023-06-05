import { questionInt } from 'readline-sync'

// 0 -> 1 -> 1 -> 2 -> 3 -> 5 -> 8 ...
    // t1 - t2 - t3

function startProgram() {
  console.log(`
    ===============Sequência de Fibonacci os N primeiros termos===============
  `)

  let term1 = 0
  let term2 = 1

  const n = questionInt('Quantos termos você quer mostrar? ')

  console.log(term1)
  console.log(term2)
  
  for(let counter = 3; counter <= n; counter++) {
    let term3 = term1 + term2
    term1 = term2
    term2 = term3
    console.log(term2)
  }
  
  
}

startProgram()