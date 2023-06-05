import { questionInt } from 'readline-sync'

function makeGameDifference() {
  const groupA = questionInt('Informe o placar do time A: ')
  const groupB = questionInt('Informe o placar o time B: ')
  const diference = Math.abs(groupA - groupB)

  if(diference === 0) {
    return `A diferença é igual a ${diference}. Deu empate.`
  }

  if(diference <= 3) {
    return `A diferença é igual a ${diference}. Deu normal.`
  }

  return `A diferença é igual a ${diference}. Deu goleada.`
}

const response = makeGameDifference()

console.log(response)