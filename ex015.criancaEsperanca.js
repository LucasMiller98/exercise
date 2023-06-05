import { questionFloat, questionInt } from 'readline-sync'

function hopeKids() {
  console.log('===============Bem vido ao criança esperança===============')
  console.log(`
    [1] para doar R$10,00
    [2] para doar R$25,00
    [3] para doar R$50,00
    [4] para doar outros valores
    [5] para cancelar
  `)

  const choise = questionInt('Sua escolha: ')

  switch(choise) {
    case 1:
      return `Obrigado por doar R$10,00! Todas as crianças estão muito felizes!`
    case 2:
      return `Obrigado por doar R$25,00! Todas as crianças estão muito felizes!`
    case 3:
      return `Obrigado por doar R$50,00! Todas as crianças estão muito felizes!`
    case 4:
      const anotherValue = questionFloat('Informe o valor que você deseja doar: R$')
      return `Obrigado por doar ${anotherValue.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}! Todas as crianças estão muito felizes!`
    case 5:
      return `Você cancelou. Mas caso você deseje doar é só voltar.`
    default:
      return `Você digitou alguma coisa inválida. Por favor, tente novamente.`
  }
}

const result = hopeKids()

console.log(result)
