const welcome = document.getElementById("welcome");
const wel = document.getElementById("wel");
const text = "RUMBLING WATERSOUND INTERNATIONAL";
const last = "Inviting everyone to the banquete";

const countdown = () => {
  const countDate = new Date("Feburary 25, 2023 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  //calculate the shit

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document.querySelector(".day").innerText = textDay;
  document.querySelector(".hour").innerText = textHour;
  document.querySelector(".minute").innerText = textMinute;
  document.querySelector(".second").innerText = textSecond;
};

setInterval(countdown, 1000);

let i = 0;

function Intro() {
  if (i < text.length) {
    welcome.innerHTML += text.charAt(i);
    i++;
    setTimeout(Intro, 100);
  } else {
    i = 0;
    lastwel();
  }
}
function lastwel() {
  if (i < last.length) {
    wel.innerHTML += last.charAt(i);
    i++;
    setTimeout(lastwel, 200);
  }
}
Intro();
