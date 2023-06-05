import { questionInt } from 'readline-sync'

function startProgram() {
  console.log(`
    ========================Contador Inteligente========================
  `)

  let inicialNumber = questionInt('Qual número que você quer iniciar? ')
  let endNumber = questionInt('Informe o valor final: ')

  if(inicialNumber < endNumber) {
    do{
      console.log(inicialNumber)
      inicialNumber ++
    }while(inicialNumber <= endNumber)
  }else if(inicialNumber > endNumber) {
    for(let cont = inicialNumber; cont >= endNumber; cont --) {
      console.log(cont)
    }
  }else {
    console.log(`Valores iguais!`)
  }
  
}

startProgram()