import { questionFloat } from 'readline-sync'

function createProgram() {
  const weight = questionFloat('Informe o seu peso: ')
  const height = questionFloat('Informe a sua altura: ')
  
  function makeCalcBodyMassIndex(weight, height) {
  
    const bmi = calcBMI(weight, height)
    
    if(bmi < 18.5) {
      return `MAGREZA. IMC: ${bmi.toFixed(1)}.`
    }
  
    if(bmi < 24.9) {
      return `NORMAL. IMC: ${bmi.toFixed(1)}.`
    }
  
    if(bmi < 29.5) {
      return `SOBREPESO. IMC: ${bmi.toFixed(1)}.`
    }
  
    if(bmi < 39.9) {
      return `OBESIDADE. IMC: ${bmi.toFixed(1)}.`
    }
  
    return `OBESIDADE GRAVE. IMC: ${bmi.toFixed(1)}.`
  }
  
  function calcBMI(weight, height) {
    const calc = weight / (height ** 2)
    
    return calc
  }

  const result = makeCalcBodyMassIndex(weight, height)

  return result
}

const resultProgram = createProgram()

console.log(resultProgram)
