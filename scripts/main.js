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
var foodLeft = 0;
var interval = 0;
var shipParameters = document.getElementsByTagName('h1')[0];
var fuel = document.getElementsByTagName('p')[0];
var throttle = document.getElementsByTagName('p')[1];
var speed = document.getElementsByTagName('p')[2];
var acceleration = document.getElementsByTagName('p')[3];
var shipEnvironment = document.getElementsByTagName('h1')[1];
var gravity = document.getElementsByTagName('p')[4];
var distance = document.getElementsByTagName('p')[5];
var arrival = document.getElementsByTagName('p')[6];
var atmosphere = document.getElementsByTagName('p')[7];
var shipSupplies = document.getElementsByTagName('h1')[2];
var food = document.getElementsByTagName('p')[8];
var potWater = document.getElementsByTagName('p')[9];



var updateTime = function() {
  time = Date.now() - start; //data atual menos data
  time = Math.floor(time/1000); //arrendondar
  passedMin = Math.floor(time / 60);
  passedSec = time - passedMin * 60;
};

function resetInterval(status) {
  if (status) {
    interval = setInterval(() => {
      setParameters()
      setEnvironment()
      setSupplies()
    }, 1000); // 1 second
  } else {
    clearInterval(interval)
  }
}

function setParameters() {
  updateTime();
  fuelCapacity = oldFuelCapacity * (100 - time / 28748769);
  fuelCapacity = Math.round(fuelCapacity);
  currentSpeed = oldSpeed + 5 * time;
  fuel.innerHTML = 'FUEL: 93% -' + fuelCapacity + 'liters left';
  throttle.innerHTML = 'THROTTLE: 457';
  speed.innerHTML = 'SPEED: ' + currentSpeed;
};
