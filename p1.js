const hourVal = document.getElementById("hour");
const minVal = document.getElementById("minutes");
const secVal = document.getElementById("seconds");
const aVal = document.getElementById("ampm");

function updateClock() {
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    let ampm = "AM";
    if (hour > 12) {
        hour = hour - 12;
        ampm = "PM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    hourVal.innerText = hour;
    minVal.innerText = min;
    secVal.innerText = sec;
    ampm.innerText = ampm;
    setTimeout(() => {
        updateClock();
    }, 1000)
}
updateClock();