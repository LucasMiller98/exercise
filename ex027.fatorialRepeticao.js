import { questionInt } from 'readline-sync'

function startProgram() {
  console.log(`
    ==========================Fatorial Repetição==========================
  `)

  let n = 0
  let factorial = 0
  let counter = 0
  let repeat = 0

  do{
  
    n = questionInt('Fatorial de: ')

    factorial = 1

    counter += n
    
    while(counter > 0) {
      factorial *= counter
      counter --
    }

    console.log('=====================================================')
    
    console.log(`${n}! = ${factorial}`)

    console.log('=====================================================')
    
    console.log('===================Você quer repetir?===================')
    
    console.log(`[1] Sim`)
    console.log(`[2] Não`)

    repeat = questionInt('Sua resposta: ')
        
    if(repeat > 2) {
      while(true) {

        console.log('============================================')
        console.log('Operação inválida! Tente novamente.')
        console.log('============================================')
        console.log('===================Você gostaria de continuar?===================')
        repeat = questionInt('Sua resposta: ')
        
        if(repeat === 1 || repeat === 2) {
          break
        }
      }
    }
    
  }while(repeat === 1)

  return `
    ===============================================
    Ultimo fatorial informado: ${n}! = ${factorial}
    ===============================================
  `
  
}

const resul = startProgram()

console.log(resul)

console.log(`
  ==========================Programa encerrado!==========================
`)