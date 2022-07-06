var clockAms = document.getElementsByClassName('clockAms')[0]
var clockSp = document.getElementsByClassName('clockSp')[0]
var clockLdn = document.getElementsByClassName('clockLdn')[0]
var clockTky = document.getElementsByClassName('clockTky')[0]
var clockBjg = document.getElementsByClassName('clockBjg')[0]
var bluePlanet = document.querySelector('.bluePlanet')
var greyPlanet = document.querySelector('.greyPlanet')
var yellowPlanet = document.querySelector('.yellowPlanet')
var redPlanet = document.querySelector('.redPlanet')

var sp = document.getElementsByClassName('sp')[0]
var london = document.getElementsByClassName('london')[0]
var tokyo = document.getElementsByClassName('tokyo')[0]
var beijing = document.getElementsByClassName('beijing')[0]

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

bluePlanet.addEventListener('click', () => {
  sp.classList.toggle('blue') //
})

greyPlanet.addEventListener('click', () => {
  london.classList.toggle('grey') //
})

yellowPlanet.addEventListener('click', () => {
  tokyo.classList.toggle('yellow') //
})

redPlanet.addEventListener('click', () => {
  beijing.classList.toggle('red') //
})
