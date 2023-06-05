import { question, questionInt } from 'readline-sync'
import { header } from './utils/header.js'

function startProgram() {
  header('Corrigindo Provas')

  const amountQuestions = 5
  let answersQuestions = []
  const studantAmount = 3
  let studants = []
  let answersStudants = []
  let averageStudent = []
  let sumAverangeStudants = 0
  let averangeTurm = 0

  for(let counter = 0; counter < amountQuestions; counter ++) {
    answersQuestions[counter] = question(`Gabarito da ${counter + 1}° questão: `)
  }
  
  console.clear()
  console.log(`================================================================`)

  for(let counter = 0; counter < studantAmount; counter ++) {
    studants[counter] = question(`Informe o nome do ${counter + 1}° aluno: `)
  }

  console.clear()
  console.log(`================================================================`)
  
  for(let counterS = 0; counterS < studantAmount; counterS ++) {
    console.clear()
    console.log(`================================================================`)
    averageStudent[counterS] = 0
    
    console.log(`Insira o gabarito do aluno ${studants[counterS]}`)

    for(let counterQ = 0; counterQ < amountQuestions; counterQ ++) {
      answersStudants[counterQ] = question(`Resposta da questão ${counterQ + 1}° questions: `) 

      if(answersStudants[counterQ] === answersQuestions[counterQ]) {
        averageStudent[counterS] += 2
      }
    }

    sumAverangeStudants += averageStudent[counterS]
  }

  averangeTurm = sumAverangeStudants / studantAmount

  for(let counter = 0; counter < studantAmount; counter ++) {
    console.log(`${studants[counter]} - média: ${averageStudent[counter].toFixed(2)}`)
  }

  console.log(`A média da turma é: ${averangeTurm.toFixed(2)}`)
}

startProgram()