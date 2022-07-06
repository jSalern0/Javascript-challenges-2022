const start = Date.now();
var time = 0;
var startSeconds = 59;
var startMinutes = 59;
var months = 6;
var days = 09;
var hours = 02;
var minutes = 49;
var seconds = 12;
var passedMin = 0;
var passedSec = 0;
var fuelCapacity = 523847828772;
var oldFuelCapacity = 523847828772;
var currentSpeed = 3800;
var oldSpeed = 3800;
var distTraveled = 369001;
var foodLeft = 0;
var potWaterLeft = 0;
var interval = 0;
var shipParameters = document.getElementsByTagName('h1')[0];
var fuel = document.getElementsByTagName('p')[0];
var throttle = document.getElementsByTagName('p')[1];
var speed = document.getElementsByTagName('p')[2];
//var acceleration = document.getElementsByTagName('p')[3];
var shipEnvironment = document.getElementsByTagName('h1')[1];
var gravity = document.getElementsByTagName('p')[4];
var distance = document.getElementsByTagName('p')[5];
var arrival = document.getElementsByTagName('p')[6];
var atmosphere = document.getElementsByTagName('p')[7];
var shipSupplies = document.getElementsByTagName('h1')[2];
var food = document.getElementsByTagName('p')[8];
var potWater = document.getElementsByTagName('p')[9];
var alerta = document.getElementsByTagName('span')[0];



var updateTime = function() {
  time = Date.now() - start; //data atual menos data
  time = Math.floor(time/1000); //arrendondar
  passedMin = Math.floor(time / 60);
  passedSec = time - passedMin * 60;
};

function resetInterval(status) {
  if (status) {
    interval = setInterval(() => {
      setshipParameters()
      setshipEnvironment()
      setshipSupplies()
    }, 1000); // 1 second
  } else {
    clearInterval(interval)
  }
}

function setshipParameters() {
  updateTime();
  fuelCapacity = oldFuelCapacity * (100 - time / 28748769);
  fuelCapacity = Math.round(fuelCapacity);
  currentSpeed = oldSpeed + 5 * time;
  fuel.innerHTML = 'FUEL: 93%  ' + fuelCapacity + ' liters left';
  throttle.innerHTML = 'THROTTLE: 457';
  speed.innerHTML = 'SPEED: ' + currentSpeed;
};

function setshipEnvironment() {
  updateTime();
  minutes = startMinutes - passedMin;
  seconds = startSeconds - passedSec;
  distTraveled = currentSpeed + oldSpeed;
  distance.innerHTML = 'DISTANCE TRAVELED: ' + distTraveled;
  arrival.innerHTML = 'ARRIVAL ESTIMATE: ' + months + ' Months, ' + days + ' Days, ' + hours + ' Hours, ' + minutes + ' minutes, ' + seconds + ' seconds.';
};

function setshipSupplies() {
  updateTime();
  foodLeft = ((months * 30 + days) * 2 * 99) - (time * 2 * 99);
  food.innerHTML = 'FOOD: '  + foodLeft;
  potWaterLeft = ((months * 30 + days) * 2 * 99) - (time * 2 * 99);
  potWater.innerHTML = 'POTABLE WATER: ' + (potWaterLeft / 2 * 5); //NOT WORKING, fix
}

resetInterval(true) //alert and pause after x seconds
setTimeout(() => {
  resetInterval(false)
  alert('!!! METEOR SHOWER !!!')
  resetInterval(true)
}, 8000);

setTimeout(() => { // so that it stops after running for x seconds
	resetInterval(false)
	//clearInterval(interval)
	alerta.innerHTML = 'ERRORERRORERRORERRORERROR'
	console.log('teste');
}, 14000); //arrow function
