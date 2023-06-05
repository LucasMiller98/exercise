import { question, questionInt } from 'readline-sync'

function globalFunction() {
  const num = questionInt('Você quer contar até quanto? ')
  const ask = questionInt('De quanto em quanto? ')
  
  function createProgram(num, ask) {
    
    const choose = question('For ou While? ')[0].trim().toLowerCase()
    
    if(choose === 'f') {
      
      for(let counter = 0; counter <= num; counter += ask) {
        console.log(counter)
      }
      
    }else{
      
      const anotherQuestion = question('While ou Do While? ').trim().toLowerCase()
      
      let counter = 0
    
      if(anotherQuestion === 'w') {
        while(counter <= num) {
          console.log(counter)
          counter += ask
        }
      }else if(anotherQuestion === 'd') {
        do{
          console.log(counter)
          counter += ask
        }while(counter <= num)
      }else{
        console.log('Informação inválida! ')
      }
      
    }
  }

  createProgram(num, ask)
}

globalFunction()