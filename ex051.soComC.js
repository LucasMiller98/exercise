import { question } from 'readline-sync'
import { header } from './utils/header.js'

function startProgram() {
  header('Só com C')

  const listNamesWithC = []
  const listNames = []
  
  for(let counter = 0; counter < 3; counter ++) {

    let name = ''
    
    while(true) {
      name = question(`Informe o ${counter + 1}° nome: `).trim()

      if(name) {
        break
      }
    }
    

    listNames.push(name)

    if(name.startsWith('C') || name.startsWith('c')) {
      listNamesWithC.push(name)
    }
    
  }

  return `
  ==============================================================================
    Lista com todos os nomes: ${listNames}
    Lista de nomes que começam com a letra C: ${listNamesWithC}
  ==============================================================================
  `
}

const start = startProgram()

console.log(start)