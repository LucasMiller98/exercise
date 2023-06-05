import { questionInt } from 'readline-sync'
import { header } from './utils/header.js'
import { showMatrix } from './utils/showMatrix.js'

function startProgram() {
  header('Matriz 3x3 Par')

  let matrix3x3 = []
  const rowNumeber = 3
  const columnNumber = 3
  let matrixPair = []
  let totalPair = 0

  function createMatrix(nRow, nColumn) {
    let matrix = []
    let array = []

    for(let row = 0; row < nRow; row ++) {
      for(let column = 0; column < nColumn; column ++) {
        const positionRowCol = questionInt(`Informe o valor [${row}][${column}]: `)
        array.push(positionRowCol)

      }

      matrix.push(array)
      array = []
    }

    return matrix
  }

  matrix3x3 = createMatrix(rowNumeber, columnNumber)

  

  function getPairValues(matrix = []) {
    for(let row = 0; row < matrix.length; row ++) {
      for(let column = 0; column < matrix.length; column ++) {
        if(matrix[row][column] % 2 === 0) {
          matrix[row][column] = `(${matrix[row][column]})`
        }
      }
    }

    return matrix
  }

  totalPair = sumMatrixPair(matrix3x3)

  matrixPair = getPairValues(matrix3x3)

  showMatrix(matrixPair)

  function sumMatrixPair(matrix) {
    let sum = 0

    for(let row = 0; row < matrix.length; row ++) {
      for(let column = 0; column < matrix.length; column ++) {
        if(matrix[row][column] % 2 === 0) {
          sum ++
        }
      }
    }

    return sum
  }

  console.log(`Total dos valores pares: ${totalPair}`)
}

startProgram() 