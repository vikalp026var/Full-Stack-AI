let temperature = document.getElementById("temperature");
let unit = document.getElementById("unit");
let convert = document.getElementById("convert");
let result = document.getElementById("result");

convert.addEventListener("click", () => {
    let temperatureValue = temperature.value;
    let unitValue = unit.value;
    if (unitValue === "celsius") {
        result.innerHTML = temperatureValue + "°C";
    } else {
        result.innerHTML = temperatureValue + "°F";
    }
});