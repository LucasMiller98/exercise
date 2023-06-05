import { question } from 'readline-sync'

let counter = 10

const ask = question('For ou While? ')[0].trim().toLowerCase()

if(ask === 'f') {
  
  for(let c = counter; c >= 0; c --) {
    console.log(c)
  }

}else{

  const anotherQuestion = question('While ou Do While? ')[0].trim().toLowerCase()

  if(anotherQuestion === 'w') {
    while(counter >= 0) {
      console.log(counter)
      counter --
    }
  }else{
    do{
      console.log(num)
      num --
    }while(num >= 0)
  }
  
}