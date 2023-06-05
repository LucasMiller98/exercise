function startProgram() {
  console.log(`
    ==========================Sequencia de Fibonacci==========================
  `)

    // 0 - 1 - 1 - 2 - 3 - 5 - 8 - 13 - 21 - 34
    // t1 t2 - t3
      
  let term1 = 0 // t1
  let term2 = 1 // t2
 
  console.log(term1)
  console.log(term2)
  
  for(let counter = 3; counter <= 15; counter++) {
    let term3 = term1 + term2
    term1 = term2
    term2 = term3
    console.log(term2)
  }
  
}

startProgram()