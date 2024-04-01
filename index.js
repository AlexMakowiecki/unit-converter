/*
    1 meter = 3.281 feet
    1 liter = 0.264 gallon
    1 kilogram = 2.204 pound
*/

const convertButton = document.getElementById("convert-button")
const valueInput = document.getElementById("value-input")
const lengthOutput = document.getElementById("length-output")
const volumeOutput = document.getElementById("volume-output")
const massOutput = document.getElementById("mass-output")

function setOutputPhrase(value, unit1, unit2, multiplier){
    return `
    ${value} ${unit1} = ${(value * multiplier).toFixed(3)} ${unit2} 
    | ${value} ${unit2} = ${(value / multiplier).toFixed(3)} ${unit1}
    `
}

convertButton.addEventListener("click", function (){
    const value = valueInput.value
    lengthOutput.textContent = setOutputPhrase(value, "meters", "feet",  3.281)
    volumeOutput.textContent = setOutputPhrase(value, "volume", "gallons",  0.264)
    massOutput.textContent = setOutputPhrase(value, "kilos", "pounds",  2.204)
})