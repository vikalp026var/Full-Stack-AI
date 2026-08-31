const time = document.getElementById("time");
const start = document.getElementById("start");
const result = document.getElementById("result");


start.addEventListener("click", () => {
    let timeValue = parseInt(time.value);
    if (isNaN(timeValue)) {
        result.innerHTML = "Please enter a valid time";
        return;
    }

    let i = timeValue;
    result.innerHTML = i;

    const countdown = setInterval(() => {
        i--;

        if (i <= 0) {
            result.innerHTML = "Time's up!";
            clearInterval(countdown);
            return;
        }

        result.innerHTML = i;
    }, 1000);
})