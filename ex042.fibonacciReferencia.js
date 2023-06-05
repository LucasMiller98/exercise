import { header } from './utils/header.js'

function startProgram() {
  header('Fibonacci Referencia')

  let term1 = 0
  let term2 = 1
  let showTerms = ` ${term1} ${term2} `
  
  const fibonacci = showFibonacciTerms(showTerms, term1, term2)
  
  return fibonacci
  
}

const fibonacci = startProgram()

console.log(fibonacci)

// 0 - 1 - 1 - 2
// t1-t2-t3

function showFibonacciTerms(showTerms, term1, term2) {
  for(let counter = 3; counter <= 15; counter++) {
    let term3 = term1 + term2
    term1 = term2
    term2 = term3

    showTerms += ` ${term3} `
  }

  return `
  ==============================================================================
    Os 15 primeiros termos: ${showTerms}
  ==============================================================================
  `
}