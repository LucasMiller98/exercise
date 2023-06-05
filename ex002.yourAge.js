import { questionInt }  from 'readline-sync'

const yearBirth = questionInt('Informe o ano do seu nascimento: ')
const today = new Date()
const currentYear = today.getFullYear() - yearBirth

if(yearBirth > currentYear) {
  console.log('Informação inválida.')
}else{
  console.log(`Você vai precisar de ${currentYear} velas para colocar no bolo.`)
}
