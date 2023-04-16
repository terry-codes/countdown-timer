const days = document.querySelectorAll("days")
const hours = document.querySelectorAll("hours")
const minutes = document.querySelectorAll("minutes")    
const seconds = document.querySelectorAll("seconds")

const currentYear = new Date().getFullYear();

const halloweenTime = new Date("april 16 $ {currentYear + 1} 00:00:00");

function cowntdownTime() {
    const currentYear = new Date();
    const diff = halloweenTime - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? "0" + h : h;
    minutes.innerHTML = m < 10 ? "0" + m : m;
    seconds.innerHTML = s < 10 ? "0" + s : s;
}

cowntdownTime(cowntdownTime,100);