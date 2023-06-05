import { questionInt } from 'readline-sync'

function startProgram() {
  console.log(`
    =============================Fatorial=============================
  `)

  let n = questionInt('Fatorial de: ')
  let fatorial = 1

  for(let counter = n; counter > 0; counter--) {
    fatorial *= counter
  }

  return `
    ${n}! = ${fatorial}
    ============================
  `
}

const fatorial = startProgram()

console.log(fatorial)