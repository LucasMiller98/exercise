import { question, questionInt } from 'readline-sync'
import { header } from './utils/header.js'

function startProgram() {
  header('Campeonato Futebol')
  
  const listTeam1 = []

  const amountTeams = questionInt('Informe a quantidade de times: ')

  for(let counter = 0; counter < amountTeams; counter ++) {
    const team = question(`Informe o nome do ${counter + 1}° time: `)

    listTeam1.push(team)
  }

  const randomTeam = getRandomTeams(listTeam1)

  return randomTeam
}

const start = startProgram()

console.log(`
================================================================================
`)

console.log(start)

console.log(`
================================================================================
`)

function getRandomTeams(listTeam = []) {

  let team1 = 0
  let team2 = 0
  
  while(true) {
    
    team1 = listTeam[Math.floor(Math.random() * listTeam.length)] 
    team2 = listTeam[Math.floor(Math.random() * listTeam.length)]

    console.log(`=================================================`)
    
    console.log(`carregando ...`)
    
    if(team1 !== team2) {
      break
    }
  }

  let team1VsTeam2 = ` ${team1} x ${team2} `
  
  return team1VsTeam2
}