import { question, questionFloat } from 'readline-sync'
import { header } from './utils/header.js'

function startProgram() {
  header('Listagem da Turma')

  const listStudent = []
  const noteStudentA = []
  const noteStudentB = []
  let avarage = []
  let status = []
  let responseStatus = ''
  let response = ''
  let totalTurm = 0
  let averangeTurm = 0
  let studentAboveAverange = 0

  for(let counter = 0; counter < 4; counter ++) {
    const name = question(`Informe o nome do ${counter + 1}° aluno: `)
    listStudent.push(name)

    const noteA = questionFloat(`Informe a 1° nota: `)
    noteStudentA.push(noteA)
    
    const noteB = questionFloat(`Informe a 2° nota: `)
    noteStudentB.push(noteB)
  }

  for(let counter = 0; counter < 4; counter ++) {
    avarage[counter] = (noteStudentA[counter] + noteStudentB[counter]) / 2 

    if(avarage[counter] >= 7) {
      status.push('Aprovado')
    }else{
      status.push('Reprovado')
    }

    totalTurm += avarage[counter]
  }

  averangeTurm = totalTurm / 4
  
  for(let counter = 0; counter < 4; counter ++) {
    response += ` ${listStudent[counter]} -> ${avarage[counter]}\n`
  }

  for(let counter = 0; counter < 4; counter ++) {
    responseStatus += ` ${listStudent[counter]} -> ${status[counter]}\n`
  }

  for(let counter = 0; counter < 4; counter ++) {
    if(avarage[counter] > averangeTurm) {
      studentAboveAverange ++
    }
  }
  
  return `
  ==============================================================================
    Nomes e médias de cada aluno: ${response} \n
    Status dos estudantes: ${responseStatus} \n
    Média da Turma: ${averangeTurm.toFixed(2)}
    Alunos acima da média: ${studentAboveAverange}
  ==============================================================================
  `
}

const start = startProgram()

console.log(start)