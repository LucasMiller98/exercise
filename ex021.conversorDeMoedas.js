import { questionFloat, questionInt } from 'readline-sync'

function startProgram() {
  console.log(`
    ========================Conversor de moedas========================
  `)
  console.log(`Quantas conversões você quer fazer? `)

  const num = questionInt('Digite: ')
  let counter = 1

  let brazilianMoney = 0
  let dollar = 0
  
  while(counter <= num) {
    brazilianMoney = questionFloat(`Informe a ${counter}° converção: R$`)
    dollar = convertMoneyToDollar(brazilianMoney, counter)
    
    console.log(`
      ${counter}° converção: R$${brazilianMoney.toFixed(2)} -> US$${dollar.toFixed(2)}
    `)
    
    counter ++
  }

  return `
    ${num === 1 ? `Foi feita ${num} converção.` : `Foram feitas ${num} converções.` } 
    ==============================
  `
}

function convertMoneyToDollar(brazilianMoney, counter) {
  
  const convertToDollar = questionFloat(`Informe o ${counter}° valor em dolar: US$`)

  return brazilianMoney / convertToDollar 
}

const response = startProgram()

console.log(response)

console.log(``)