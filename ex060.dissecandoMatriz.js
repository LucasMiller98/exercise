import { questionInt } from 'readline-sync'
import { header } from './utils/header.js'
import { showMatrix } from './utils/showMatrix.js'
import { getRandomIntInclusive } from './utils/randomInclusive.js'

function startProgram() {
  header('Dissecando Matriz')

  let matrix4x4 = []
  const rowNumber = 4
  const columnNumber = 4
  let choose = 0

  function createMatrix(rowNumber, columnNumber) {
    let matrix = []
    let array = []

    for(let row = 0; row < rowNumber; row ++) {
      for(let column = 0; column < columnNumber; column ++) {
        // const rowColumn = questionInt(`Digite o valor [${row}][${column}]: `)
        const rowColumn = getRandomIntInclusive(10, 99)
        array.push(rowColumn)
      }

      matrix.push(array)
      array = []
    }

    return matrix
  }

  matrix4x4 = createMatrix(rowNumber, columnNumber)
  console.clear()
  
  do {
    menu()
    console.log(`=========================================`)
    choose = questionInt(`Digite um número: `)
    console.clear()
    console.log(`=========================================`)

    let newMatrix = []
    let newArray = []

    switch(choose) {
      case 1:
        showMatrix(matrix4x4)
      break

      case 2:
        for(let row = 0; row < matrix4x4.length; row ++) {
          for(let column = 0; column < matrix4x4.length; column ++) {
            if(row === column) {
              newArray.push(matrix4x4[row][column])
            }else{
              newArray.push('')
            }
          }

          newMatrix.push(newArray)
          newArray = []
        }

        showMatrix(newMatrix)
      break

      case 3:
        for(let row = 0; row < matrix4x4.length; row ++) {
          for(let column = 0; column < matrix4x4.length; column ++) {
            if(column > row) {
              newArray.push(matrix4x4[row][column])
            }else{
              newArray.push('')
            }
          }

          newMatrix.push(newArray)
          newArray = []
        }

        showMatrix(newMatrix)
      break

      case 4:
        for(let row = 0; row < matrix4x4.length; row ++) {
          for(let column = 0; column < matrix4x4.length; column ++) {
            if(row > column) {
              newArray.push(matrix4x4[row][column])
            }else{
              newArray.push('')
            }
          }

          newMatrix.push(newArray)
          newArray = []
        }

        showMatrix(newMatrix)
      break

      case 5:
        for(let row = 0; row < matrix4x4.length; row ++) {
          for(let column = 0; column < matrix4x4.length; column ++) {
            if(row + column === matrix4x4.length - 1) {
              newArray.push(matrix4x4[row][column])
            }else{
              newArray.push('')
            }
          }

          newMatrix.push(newArray)
          newArray = []
        }

        showMatrix(newMatrix)
      break

      case 6:
        for(let row = 0; row < matrix4x4.length; row ++) {
          for(let column = 0; column < matrix4x4.length; column ++) {
            if(row + column >= matrix4x4.length) {
              newArray.push(matrix4x4[row][column])
            }else{
              newArray.push('')
            }
          }

          newMatrix.push(newArray)
          newArray = []
        }

        showMatrix(newMatrix)
      break

      case 7:
        for(let row = 0; row < matrix4x4.length; row ++) {
          for(let column = 0; column < matrix4x4.length; column ++) {
            if(row + column < matrix4x4.length - 1) {
              newArray.push(matrix4x4[row][column])
            }else{
              newArray.push('')
            }
          }

          newMatrix.push(newArray)
          newArray = []
        }

        showMatrix(newMatrix)
      break

      case 8:
        matrix4x4 = createMatrix(rowNumber, columnNumber)
        console.clear()
        console.log(`Nova matriz criada.`)
      break

      case 9:
        console.log(`Programa encerrado.`)
      break

      default:
        console.log(`Opção inválida.`)
    }
    
  }while(choose !== 9)

  function menu() {
    console.log(`
      Escolha: 
    `)
    console.log(`[1] Matriz completa: `)
    console.log(`[2] Diagonal esquerda direita: `)
    console.log(`[3] Triâmgulo superior direito: `)
    console.log(`[4] Tiâmgulo inferior esquerdo: `)
    console.log(`[5] Diagonal direita esquerda: `)
    console.log(`[6] Triângulo inferior direito: `)
    console.log(`[7] Triâmgulo superior esquerdo: `)
    console.log(`[8] Gerar outra matriz: `)
    console.log(`[9] Encerrar programa: `)
  }
}

startProgram()