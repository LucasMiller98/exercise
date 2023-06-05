import { header } from './utils/header.js'
import { showMatrix } from './utils/showMatrix.js'

function startProgram() {
  header('Matriz Identidade 3x3')

  let matrixId = []
  const rowNumeber = 3
  const columnNumber = 3

  function createMatrixId(nRow, nColumn) {
    let matrix = []
    let array = []

    for(let row = 0; row < nRow; row ++) {
      for(let column = 0; column < nColumn; column++) {
        if(row === column) {
          array.push(1)
        }else{
          array.push(0)
        }
      }

      matrix.push(array)
      array = []
    }
    
    return matrix
  }

  matrixId = createMatrixId(rowNumeber, columnNumber)

  showMatrix(matrixId)
}

startProgram()