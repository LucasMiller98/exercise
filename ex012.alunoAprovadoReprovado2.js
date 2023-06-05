import { questionFloat } from 'readline-sync'

const calcStudentNote = () => {
  const note1 = questionFloat('Informe a primeira nota: ')
  const note2 = questionFloat('Informe a segunda nota: ')  
  const average = (note1 + note2) / 2

  if(average >= 7) {
    return `Aluno aprovado! Media: ${average}`
  }

  if(average ) {

  }
  
  return `Aluno reprovado! Media: ${average}`
}

const result = calcStudentNote()

console.log(result)