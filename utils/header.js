export function header(param) {
  console.log(`
  ==============================================================================
                                ${
                                  typeof param !== 'string' ? `
                                    Tem que passar uma string, bença!
                                  ` : !param ? 'Preencha a string, meu fi!' : param
                                }   
  ==============================================================================
  `)

  return param
}