let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

// Create a new Audio object for the tick sound
let tickSound = new Audio('tick.mp3');

function displayTime(){
    let date = new Date();

    // Getting hour, mins, secs from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;

    // Play tick sound every second
    tickSound.play();

}

setInterval(displayTime, 1000);