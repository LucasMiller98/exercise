import { questionFloat } from 'readline-sync'

function getTemperatureFahrenheit() {
  const fahrenheit = questionFloat('Informe a temperatura atual em Fahrenheit: ')

  return fahrenheit
}


function makeConversionToCelsius() {
  const fahrenheit = getTemperatureFahrenheit()
  const celsius = (fahrenheit - 32) * 5 / 9

  return `${fahrenheit}°F => ${celsius.toFixed(2)}°C.`
}

const getConversion = makeConversionToCelsius()

console.log(getConversion)