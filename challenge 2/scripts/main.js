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

const getHours = (timeZone, clock) => {//arrow function
  const options = {
    timeZone,
    hour: 'numeric',
    minute: 'numeric',
  };
  const hour = new Intl.DateTimeFormat([],options);
console.log(hour);
  // const date = new Date()
  // const hours = sinal === '+' ? date.getHours() + fuso : date.getHours() - fuso //
  // const minutes = date.getMinutes()
  // const seconds = date.getSeconds()
  // const hour = hours < 10 ? `0${hours}` : hours //? pergunta se a hora e menos q 10, se verdade insere a 0 em frente da hora
  // const minute = minutes < 10 ? `0${minutes}` : minutes//
  // const second = seconds < 10 ? `0${seconds}` : seconds
  // const amPm = hours < 12 ? ' AM' : ' PM'
  clock.innerHTML = hour.format(new Date())
}

setInterval(() => {
  getHours('Europe/Amsterdam',clockAms)
  getHours('America/Sao_Paulo', clockSp)
  getHours('Europe/London', clockLdn)
  getHours('Asia/Tokyo', clockTky)
  getHours('Asia/Shanghai', clockBjg)
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
