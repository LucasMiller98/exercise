import { questionFloat } from 'readline-sync'

const brazilianMoney = questionFloat('Quantos reais você tem? R$')
const dollar = questionFloat('Quanto vale o dollar atualmente? $')
const convert = brazilianMoney / dollar

console.log(`Dado que o dollar está a R$${dollar.toFixed(2)}, você tem $${convert.toFixed(2)} dólares.`)