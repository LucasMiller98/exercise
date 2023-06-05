import { question } from 'readline-sync'
import { header } from './utils/header.js'

function startProgram() {
  header('Analisador de strings')

  const name = question('Informe o seu nome: ')
  const nameAnalyses = makeAnalyses(name)

  return nameAnalyses
}

const start = startProgram()

console.log(start)

function makeAnalyses(name = '') {
  let firstLetter = ''
  let lastLetter = ''
  let positionLetterA = 0
  let asciiCodeALetter = 0
  let asciiCode65 = ''

  for(let i = 0; i < name.length; i++) {
    
    if(i === 0) {
      firstLetter = name[i]
    }

    if(name[i] === 'a') {
      positionLetterA = i
      asciiCodeALetter = name[i].charCodeAt()
    }

    if(name[i].charCodeAt() === 65) {
      asciiCode65 = name[i]
    }

    lastLetter = name[i]
  }
                      
  return `
  ==============================================================================
    Seu nome em maiúsculas: ${name.toUpperCase()}
  ==============================================================================
    Seu nome em minúsculas: ${name.toLowerCase()}
  ==============================================================================
    O seu nome começa com: ${firstLetter}
  ==============================================================================
    Posição da letra A: ${positionLetterA}
  ============================================================================== 
    Código ASCII da letra A: ${asciiCodeALetter ? asciiCodeALetter : 'Not Found!'}
  ==============================================================================
    Caracter código ASCII 65: ${asciiCode65 ? asciiCode65 : 'Not Found!'}
  ==============================================================================
    Seu nome termina com: ${lastLetter}
  ==============================================================================
    Quantidade de letras no nome: ${name.replace(/ /g, '').length}
  ==============================================================================
  `
}