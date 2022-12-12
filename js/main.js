elForm = document.querySelector("[data-form]");
elInput = document.querySelector("[data-distance]");
elTextFoot = document.querySelector("[data-foot]");
elTextBike = document.querySelector("[data-bike]");
elTextCar = document.querySelector("[data-car]");
elTextPlane = document.querySelector("[data-plane]");

var foot = 3.6;
var bike = 20.1;
var car = 70;
var plane = 800;
var road;

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  road = elInput.value;

  function time(el, speed) {
    var allHour = road / speed;
    var floatMinute = floatTime(allHour);
    var hour = allHour - floatTime(allHour);
    var minute = (floatMinute * 60).toFixed(0);

    if (hour !== 0) {
      el.textContent = `${hour} soat-u, ${minute} daqiqa`;
    } else {
      el.textContent = `${minute} daqiqa`;
    }
  }

  function floatTime(a) {
    return a - Math.trunc(a);
  }

  if (isNaN(road)) {
    alert("Raqam kiriting:");
    elInput.value = "";
    return;
  }

  if (road < 0) {
    alert("Musbat son kiriting!");
    elInput.value = "";
    return;
  }
  if (road < 0) return;
  time(elTextFoot, foot);
  time(elTextBike, bike);
  time(elTextCar, car);
  time(elTextPlane, plane);
});
