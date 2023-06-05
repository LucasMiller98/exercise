import { header } from './utils/header.js'
import { getRandomIntInclusive } from './utils/randomInclusive.js'
import { showMatrix } from './utils/showMatrix.js'

function startProgram() {
  header('Matriz 4x4')

  let matrix4x4 = []
  const rowNumeber = 4
  const columnNumber = 4
  let sumMainDiagonal = 0
  let productSecondRow = 0
  let greaterValueColumnThree = 0

  function createMatrix(rowNumeber, columnNumber) {
    let matrix = []
    let array = []
    
    for(let row = 0; row < rowNumeber; row ++) {
      for(let column = 0; column < columnNumber; column ++) {
        const randomValus = getRandomIntInclusive(100, 999)

        array.push(randomValus)
      }

      matrix.push(array)
      array = []
    }

    return matrix
  }

  matrix4x4 = createMatrix(rowNumeber, columnNumber)
  showMatrix(matrix4x4)

  function sumMainDiagonalFunction(matrix = []) {
    let sumValues = 0

    for(let row = 0; row < matrix.length; row ++) {
      for(let column = 0; column < matrix.length; column ++) {
        if(row === column) {
          sumValues += matrix[row][column]
        }
      }
    }

    return sumValues
  }

  sumMainDiagonal = sumMainDiagonalFunction(matrix4x4)

  console.log("Soma dos valores: " + sumMainDiagonal)

  function productSecondRowFunction(matrix = []) {
    let productValues = 1

    for(let row = 0; row < matrix.length; row ++) {
      for(let column = 0; column < matrix.length; column ++) {
        if(row === 1) {
          productValues *= matrix[row][column]
        }
      }
    }

    return productValues
  }

  productSecondRow = productSecondRowFunction(matrix4x4)

  console.log(`Produto da segunda linha: ${productSecondRow}`)

  function greaterValueColumnThreeFunction(matrix) {
    let greaterValue = 0

    for(let row = 0; row < matrix.length; row ++) {
      for(let column = 0; column < matrix.length; column ++) {
        if(column === 2) {
          if(greaterValue < matrix[row][column]) {
            greaterValue = matrix[row][column]
          }
        }
      }
    }    
    
    return greaterValue
  }

  greaterValueColumnThree = greaterValueColumnThreeFunction(matrix4x4)  
  console.log("Maior valor da terceira coluna: " + greaterValueColumnThree)
}

startProgram()