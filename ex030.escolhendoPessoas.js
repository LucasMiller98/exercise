import { question, questionInt } from 'readline-sync'

function startProgram() {
  console.log(`
    =========================Escolhendo Pessoas=========================
  `)

  let gender = ''
  let age = 0
  let accMen = 0
  let accWomem = 0
  let skinColor = 0
  let register = ''

  do {

    while(true) {
      console.log(`
        ==============================
              Qual o seu sexo?
        ==============================
      `)

      console.log(`
        [1] Homem
        [2] Mulher
      `)

      gender = questionInt('Sua escolha: ')

      if(gender === 1 || gender === 2) {
        break
      }

    }

    while(true){
      console.log(`
        ==============================
                  Cor da pele
        ==============================
      `)

      console.log(`
        [1] Preto
        [2] Castanho
        [3] Loiro
        [4] Ruivo 
      `) 

      skinColor = questionInt('Sua escolha: ')

      const isCorrectChoose = skinColor === 1 || 
                              skinColor === 2 || 
                              skinColor === 3 || 
                              skinColor === 4
      
      if(isCorrectChoose) {
        break
      }
    }
    
    age = questionInt('Informe a sua idade: ')

    switch(gender) {
      case 1:
        if(age >= 18 && skinColor === 2) {
          accMen ++
        }
      break

      case 2:
        if(age >= 25 && age <= 30 && skinColor === 3) {
          accWomem ++
        }
      break

    }

    register = question('Você deseja cadastrar mais alguém? ')[0].toLowerCase()
    
  }while(register !== 'n')

  return `
  ==============================================================================
    Total de homens com mais de 18 anos e cabelos castanhos: ${accMen}.
    Total de mulheres de mulheres entre 25 e 30 anos: ${accWomem}
  ==============================================================================
  `
}

const res = startProgram()

console.log(res)