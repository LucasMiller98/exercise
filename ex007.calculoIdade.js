import { question, questionInt } from 'readline-sync'


function getAge() {
  const today = new Date()
  const todayYear = today.getFullYear()
  const dateBorn = question('Informe a sua data de nascimento: ')
  const calc = todayYear - dateBorn

  return calc < 18 ? 
  `Você ainda não é de maior. Você tem ${calc} anos` 
  : 
  `Você já atingio a maior idade. Você tem ${calc} anos`
}

const age = getAge()

console.log(age)