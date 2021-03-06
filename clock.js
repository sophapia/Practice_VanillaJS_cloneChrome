const clockH = document.querySelector('.clockH');

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const realTime = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
    clockH.innerText = realTime;
}
function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();