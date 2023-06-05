import { questionInt } from 'readline-sync'

function startProgram() {
  console.log(`
    =====================Tabuada=====================
  `)

  const arithmeticTable = questionInt('Tabuada de: ')

  console.log('================================================')

  for(let counter = 1; counter <= 10; counter++) {
    console.log(`${arithmeticTable} x ${counter} = ${arithmeticTable * counter}`)
  }
}

startProgram()
console.log('================================================')