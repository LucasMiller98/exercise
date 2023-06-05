import { question } from 'readline-sync'
import { header } from './utils/header.js'
import { showMatrix } from './utils/showMatrix.js'

function startProgram() {
  header('Jogo da Velha')

  let matrix3x3 = []
  const rowNumber = 3
  const columnNumber = 3
  let symble = 'X'
  let position = 0
  let response = false

  function createMatrix(rowNumber, columnNumber) {
    let matrix = []
    let array = []
    let counter = 1
    
    for(let row = 0; row < rowNumber; row ++) {
      for(let column = 0; column < columnNumber; column ++) {
        array.push(`${counter}`)
        counter ++
      }

      matrix.push(array)
      array = []
    }

    return matrix
  }

  matrix3x3 = createMatrix(rowNumber, columnNumber)

  showMatrix(matrix3x3)

  function game(symble, position) {
    let changed = false

    for(let row = 0; row < rowNumber; row ++) {
      for(let column = 0; column < columnNumber; column ++) {
        if(matrix3x3[row][column] === position) {
          matrix3x3[row][column] = symble
          changed = true
        }
      }
    }

    return changed
  }

  do{

    do{
      position = question(`Vai jogar [${symble}] em qual posição? `)
      response = game(symble, position)
  
      if(response === false) {
        console.log(`JOGADA INVÁLIDA!`)
      }
      
    }while(response === false)

    changeGamer()
  
    showMatrix(matrix3x3)
    
  }while(theEnd() === false)
  
  function changeGamer() {
    if(symble === 'X') {
      symble = 'O'
    }else{
      symble = 'X'
    }
  }

  function theEnd() {
    let isFinished = false
    let ocorrencia = 0

    // jogos em linha
    for(let row = 0; row < rowNumber; row ++) {
      if(matrix3x3[row][0] === matrix3x3[row][1] && matrix3x3[row][1] === matrix3x3[row][2]) {
        isFinished = true
      }
    }

    // jogos em coluna
    for(let column = 0; column < columnNumber; column ++) {
      if(matrix3x3[0][column] === matrix3x3[1][column] && matrix3x3[1][column] === matrix3x3[2][column]) {
        isFinished = true
      }
    }

    // jogos em diagonal
    for(let column = 0; column < columnNumber; column ++) {
      if(matrix3x3[0][0] === matrix3x3[1][1] && matrix3x3[1][1] === matrix3x3[2][2]) {
        isFinished = true
      }
    }

    for(let column = 0; column < columnNumber; column ++) {
      if(matrix3x3[0][2] === matrix3x3[1][1] && matrix3x3[1][1] === matrix3x3[2][0]) {
        isFinished = true
      }
    }

    // Jogo em velha
    for(let row = 0; row < rowNumber; row ++) {
      for(let column = 0; column < columnNumber; column ++) {
        if(matrix3x3[row][column] !== 'X' && matrix3x3[row][column] !== 'O') {
          ocorrencia ++
        }
      }
    }

    if(ocorrencia === 0) {
      isFinished = true
    }
    
    return isFinished
  }

  console.log('JOGO FINALIZADO!')
}

startProgram()