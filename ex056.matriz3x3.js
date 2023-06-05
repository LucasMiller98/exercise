import { questionInt } from 'readline-sync'
import { header } from './utils/header.js'
import { showMatrix } from './utils/showMatrix.js'

function startProgram() {
  header('Matriz 3 x 3')

  let matrix3x3 = []
  const rowNumeber = 3
  const columnNumber = 3

  function createMatrix(rowNumeber, columnNumber) {
    let matrix = []
    let array = []
    let counter = 1

    for(let row = 0; row < rowNumeber; row ++) {
      for(let column = 0; column < columnNumber; column ++) {
        const num = questionInt(`Informe o ${counter}° valor: `)
        counter ++
        
        array.push(num)
      }

      matrix.push(array)
      array = []
    }
    
    return matrix
  }

  matrix3x3 = createMatrix(rowNumeber, columnNumber)

  

  showMatrix(matrix3x3)
  console.log(matrix3x3)
}

startProgram()