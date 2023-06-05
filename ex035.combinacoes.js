
function startProgram() {
  console.log(`
    ===========================Combinações===========================
  `)

  for(let numberA = 1; numberA <= 3; numberA ++) {
    console.log(`${numberA}° interação (numberA)\n`)
    for(let numberB = 1; numberB <= 3; numberB ++) {
      console.log(`
        =================================================================
      `)
      console.log(`${numberB}° interação (numberB)\n`)
      console.log(`
        =================================================================
      `)
      console.log(`Resultado: ${numberA} - ${numberB}`)
    }

    console.log(``)
  }

 
}

startProgram()

console.log(`
  ========================================Fim===================================
`)
