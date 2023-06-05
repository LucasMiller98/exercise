import { questionInt } from 'readline-sync'

const num = questionInt('Informe um número: ')
let counter = 0

while(counter < num) {
  counter ++
  
  console.log(counter * 10000)
}