var clockAms = document.getElementsByClassName('clockAms')[0]
var clockSp = document.getElementsByClassName('clockSp')[0]
var clockLdn = document.getElementsByClassName('clockLdn')[0]
var clockTky = document.getElementsByClassName('clockTky')[0]
var clockBjg = document.getElementsByClassName('clockBjg')[0]


const getHours = (fuso, sinal, clock) => {//arrow function

  const date = new Date()
  const hours = sinal === '+' ? date.getHours() + fuso : date.getHours() - fuso //
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  const hour = hours < 10 ? `0${hours}` : hours //? pergunta se a hora e menos q 10, se verdade insere a 0 em frente da hora
  const minute = minutes < 10 ? `0${minutes}` : minutes//
  const second = seconds < 10 ? `0${seconds}` : seconds
  const amPm = hours < 12 ? ' AM' : ' PM'
  clock.innerHTML = `${hour}:${minute}:${second}${amPm}`
}

setInterval(() => {
  getHours(0, '+', clockAms)
  getHours(5, '-', clockSp)
  getHours(1, '-', clockLdn)
  getHours(7, '+', clockTky)
  getHours(6, '+', clockBjg)
}, 1000)
