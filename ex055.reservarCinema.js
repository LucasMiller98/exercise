import { question, questionInt } from 'readline-sync'
import { header } from './utils/header.js'

function startProgram() {
  header('Reserva Cinema')
  
  let response = ''
  const amountChair = 10
  let reserv = []
  let chair = 0

  function reservChair(num) {
    for(let counter = 1; counter <= amountChair; counter ++) {
      if(reserv[num] === '#') {
        return false
      }

      return true
    }
  }

  for(let counter = 1; counter <= amountChair; counter ++) {
    reserv[counter] = counter
  }

  do {

    const chairMovier = chairCinema()
    console.log(chairMovier)

    chair = questionInt('Informe uma cadeira: ')

    while(reservChair(chair) === false) {
      console.log('Cadeira reservada! Por favor, tente novamente!')
      chair = questionInt('Informe uma cadeira: ')
    }  

    for(let counter = 1; counter <= amountChair; counter ++) {
      if(reserv[counter] === chair) {
        reserv[counter] = '#'
      }
    }

    chairCinema()
    
    response = question('Você deseja continuar? [S/N]: ').toLowerCase()

    
  }while(response !== 'n')

  function chairCinema() {
    let cinema = ''
  
    for(let counter = 1; counter <= amountChair; counter ++) {
      cinema += `| ${reserv[counter]}`
    }

    return cinema
  }

  return `
  ==============================================================================
    Programa encessado!

    Cadeira reservada: ${reserv}
  ==============================================================================
  `
}

const start = startProgram()

console.log(start)