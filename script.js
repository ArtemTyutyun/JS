
var targetDate = new Date();
targetDate.setHours(22, 00, 00); // <---- Введіть час коли хочете лягти спати //


var timer = setInterval(function() {


  var now = new Date().getTime();
  var distance = targetDate - now;

  var hours = Math.floor(distance / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.body.innerHTML = "<h1>Час до сну</h1><p>" + hours + " годин " + minutes + " хвилин " + seconds + " секунд </p>";

  if (distance < 1000) {
    clearInterval(timer);
    document.body.innerHTML = "<h1>Добраніч!</h1>";
  }
}, 1000);