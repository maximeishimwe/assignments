// 1. Time Object Basics

console.log("// 1. Time Object Basics");

const date = new Date();
console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);

// 2. Object-Oriented Clock

console.log("// 2. Object-Oriented Clock");
const Clock = function (hours, minutes, seconds) {
  this.hours = hours;
  this.minutes = minutes;
  this.seconds = seconds;
  this.isFormat24 = true;
  this.timeZone = "local";
};

const clock = new Clock(date.getHours(), date.getMinutes(), date.getSeconds());
console.log(clock);

// 3. Time Formatting

console.log("// 3. Time Formatting");

Clock.prototype.getFormattedTime = function () {
  const hours = this.isFormat24 ? this.hours : this.hours % 12 || 12;
  const period = this.isFormat24 ? "" : this.hours >= 12 ? " PM" : " AM";
  return `${hours.toString().length === 1 ? "0" + hours.toString() : hours}:${
    this.minutes.toString().length === 1
      ? "0" + this.minutes.toString()
      : this.minutes
  }:${
    this.seconds.toString().length === 1
      ? "0" + this.seconds.toString()
      : this.seconds
  }${period}`;
};

// Implemented two timezones UTC and local
Clock.prototype.updateTime = function () {
  let date = new Date();
  if (this.timeZone === "UTC") {
    this.hours = date.getUTCHours();
    this.minutes = date.getUTCMinutes();
    this.seconds = date.getUTCSeconds();
  } else if (this.timeZone === "local") {
    const localOffset = 2 * 60; // +2 hours in minutes
    const utc = date.getTime() + date.getTimezoneOffset() * 60000;
    const localDate = new Date(utc + localOffset * 60000);
    this.hours = localDate.getHours();
    this.minutes = localDate.getMinutes();
    this.seconds = localDate.getSeconds();
  }
};

console.log("clock.getFormattedTime():", clock.getFormattedTime());

// 4. Dynamic Display
const clockDiv = document.querySelector("#clock");

function displayClock() {
  clock.updateTime();
  clockDiv.innerHTML = clock.getFormattedTime();
}

let intervalId = setInterval(displayClock, 1000);

// 5. Clock Customization
function customizeClock({ format, timeZone, color }) {
  if (format) {
    clock.isFormat24 = format === "24";
  }
  if (timeZone) {
    clock.timeZone = timeZone;
  }
  if (color) {
    const clockDiv = document.getElementById("clock");
    if (clockDiv) {
      clockDiv.style.color = color;
    }
  }
  clearInterval(intervalId); // Clear the previous interval
  intervalId = setInterval(displayClock, 1000); // Start a new interval
  displayClock(); // Update the clock immediately
}

document
  .querySelector("#formatSelector")
  .addEventListener("change", function () {
    customizeClock({ format: this.value });
  });

document
  .querySelector("#timezoneSelector")
  .addEventListener("change", function () {
    customizeClock({ timeZone: this.value });
  });

document.querySelector("#colorPicker").addEventListener("input", function () {
  const color = this.value;
  customizeClock({ color: color });
});
