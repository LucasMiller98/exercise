import { questionInt } from 'readline-sync'

function startProgram() {
  console.log(`
    ===========================Super Contador===========================
  `)

  console.log(`
    [1] Contar de 0 a 10
    [2] Contar de 10 a 0
    [3] Cancelar
  `)

  const num = questionInt(`Sua escolha: `)

  handleUserChoose(num)
}

startProgram()

function handleUserChoose(num) {
  switch(num) {
    case 1:
      for(let counter = 0; counter <= 10; counter ++) {
        console.log(counter)
      }
    break

    case 2:
      let counter = 10
      
      do {
        console.log(counter)
        counter --
      }while(counter >= 0)
    break

    case 3:
      console.log('Contagem cancelada com sucesso!')
    break

    default:
      console.log('Opção inválida!')
  }
}