import { questionInt } from 'readline-sync'

const makeCalcAge = () => {
  const yearBorn = questionInt('Informe seu ano de nascimento: ')
  const today = new Date()
  const ageCalc = today.getFullYear() - yearBorn

  if(ageCalc < 18) {
    return 'Você não pode tirar a carteira.'
  }

  return 'Você já tem idade para tirar a carteira.'
}

const result = makeCalcAge()

console.log(result)