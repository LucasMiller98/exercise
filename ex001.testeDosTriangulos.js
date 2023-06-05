import { questionInt } from 'readline-sync'

const sideA = questionInt('Informe a altura do primeiro lado: ')
const sideB = questionInt('Informe a altura do segundo lado: ')
const sideC = questionInt('Informe a base do triângulo: ')

function makeCalc(sideA, sideB, sideC) {
  const isTriangle = Math.abs(sideB - sideC) < sideA && Math.abs(sideA - sideC) < sideB && Math.abs(sideB - sideA) < sideC && sideA + sideB > sideC

  if(!isTriangle) {
    return 'Informação inválida! Não foi possível criar um triângulo.'
  }
  
  const isEquilateral = sideA === sideB && sideB === sideC && sideC === sideA

  return isEquilateral ? 'Você criou um triângulo equilátero.' : 'Você criou um triângulo escaleno.'
}

const response = makeCalc(sideA, sideB, sideC)

console.log(response)