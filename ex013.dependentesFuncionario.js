import { questionFloat, question, questionInt } from 'readline-sync'

console.log('=================Salário de um funcionário=================')

function handleEmployeeData() {
  const name = question('Informe o seu nome: ').trim()
  let wage = questionFloat('Informe o seu salário: R$')
  const dependent = questionInt('Quantos dependentes você tem? ')
  const lastWage = wage
  
  if(dependent === 0) {
    wage += wage * 0.05

    return `
      ${name}, de acordo com a quantidade de dependentes, você teve 5% de aumento. 
      De  R$${lastWage.toFixed(2)}, você passará a receber R$${wage.toFixed(2)} reais
    `
  }

  if(dependent <= 3) {
    wage += wage * 0.1

    return `
      ${name}, de acordo com a quantidade de dependentes, você teve 10% de aumento. 
      De  R$${lastWage.toFixed(2)}, você passará a receber R$${wage.toFixed(2)} reais.
    `
  }

  if(dependent <= 6) {
    wage += wage * 0.15

    return `
      ${name}, de acordo com a quantidade de dependentes, você teve 15% de aumento. 
      De  R$${lastWage.toFixed(2)}, você passará a receber R$${wage.toFixed(2)} reais.
    `
  }

  wage += wage * 0.18

  return `
    ${name}, de acordo com a quantidade de dependentes, você teve 18% de aumento. 
    De  R$${lastWage.toFixed(2)}, você passará a receber R$${wage.toFixed(2)} reais.
  `
}

const response = handleEmployeeData()

console.log(response)

console.log('========================================================')
