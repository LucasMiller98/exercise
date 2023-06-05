import { question, questionFloat, questionInt } from 'readline-sync'

function startProgram() {
  console.log(`
    =========================Melhor Aluno=========================
  `)

  const amountStudents = questionInt('Informe a quantidade de alunos: ')
  const studentsList = []
  let bestNoteName = ''
  let bestNote = 0
  let equalNote = ''

  for(let counter = 1; counter <= amountStudents; counter++) {
    let studentName = question(`Informe o nome do ${counter}° aluno: `)  
    let note = questionFloat(`Informe a nota do ${counter}° aluno: `)

    console.log('========================================================')

    studentsList.push({studentName, note})
  }
  
  studentsList.map(student => {
    if(student.note > bestNote) {
      bestNoteName = student.studentName
      bestNote = student.note
    }else if(student.note === bestNote) {
      equalNote = student.studentName
    }
    
    return `${bestNoteName}${bestNote}${equalNote}`
  })

  return `
    A turma tem ${amountStudents === 1 ? `${amountStudents} aluno` : `${amountStudents} alunos`}, mas o ${equalNote ? `${bestNoteName} e o ${equalNote} ficaram` : `${bestNoteName} ficou`} com a melhor nota que foi ${bestNote}.
  `
}

console.log(startProgram())