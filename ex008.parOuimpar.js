import { question, questionInt } from 'readline-sync'

const makeChoise = () => {
  const ask = question('Você quer ver todos os número em sequência até o seu número escolhido? ')

  return ask
}

const verifyNum = () => {
  
  const num = questionInt('Informe um número inteiro: ')

  if(num % 2 === 0) {
    return `O número ${num} é par`
  }

  return `O número ${num} é ímpar.`
}

const getUserChoise = () => {
  const question = makeChoise()

  if(question === 's'.toLowerCase()) {
    const num = questionInt('Informe um número inteiro: ')
    let message = ''
    
    for(let counter = 1; counter <= num; counter++) {
      if(counter % 2 === 0) {
        message += `${counter} é par.\n`
      }else{
        message += `${counter} é ímpar.\n`
      }
    }

    return message
  }

  const getVerifyNum = verifyNum()

  return getVerifyNum
}

const userChoise = getUserChoise()

console.log(userChoise)
