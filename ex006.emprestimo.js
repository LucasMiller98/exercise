import { questionFloat, questionInt } from 'readline-sync'

console.log('===============Emprestimo==============')

const ask = questionFloat('Quanto você quer pegar imprestado? ')
const fragmentCard = questionInt('Você quer dividir em quantas parcelas? ')
const loanPercentage = ask + (ask * 0.2)

console.log(`
  Com um aumento de 20% do valor do emprestimo, você irá pagar:
`)

console.log(`
  ${fragmentCard}x de R$${loanPercentage.toFixed(2)/fragmentCard} 
`)

console.log(`
  Total: R$${loanPercentage.toFixed(2)}.
`)
