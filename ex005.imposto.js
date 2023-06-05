import { questionFloat } from 'readline-sync'

console.log('===============Imposto===============')

const productValue = questionFloat('Quanto o produto custou? US$')
const calc = productValue * 0.6
// const localTax = questionFloat('Qual a porcentagem do imposto? ')
// const dollarQuotation = questionFloat('Qual a contação do dolar em Reais? R$')
// const calc = (productValue + localTax) * (dollarQuotation + 1.1/100)

console.log(`Você vai pagar R$${calc.toFixed(2)}.`)