let number = 0
const numberInput = document.getElementById("number-input")
const mass = document.getElementById("mass")
const length = document.getElementById("length")
const volume = document.getElementById("volume")
const area = document.getElementById("area")
const convertBtn = document.getElementById("convert-btn")




convertBtn.addEventListener("click", function(){
    number = numberInput.value 
    lengthConverter()
    areaConverter()
    massConverter()
    volumeConverter()
    numberInput.value = ""
})





function massConverter(){
    let kilo = Math.round((number*2.20462 + Number.EPSILON) * 100) / 100
    let lbs = Math.round((number*0.453592 + Number.EPSILON) * 100) / 100
    mass.textContent = `${number} Kilograms = ${kilo} Pounds | ${number} Pounds = ${lbs} Kilograms `
}


function lengthConverter(){
    let meter = Math.round((number*3.28084 + Number.EPSILON) * 100) / 100
    let foot = Math.round((number*0.3048 + Number.EPSILON) * 100) / 100
    length.textContent = `${number} Meters = ${meter} Feet | ${number} Feet = ${foot} Meters `
}

function volumeConverter(){
    let liter = Math.round((number*0.264172 + Number.EPSILON) * 100) / 100
    let gallon = Math.round((number*3.78541 + Number.EPSILON) * 100) / 100
    volume.textContent = `${number} Liters = ${liter} US Gallons | ${number} US Gallons = ${gallon} Liters `
}

function areaConverter(){
    let squareMeter = Math.round((number*10.7639 + Number.EPSILON) * 100) / 100
    let squareFoot = Math.round((number*0.092903 + Number.EPSILON) * 100) / 100
    area.textContent = `${number} Square Meters = ${squareMeter} Square Feet | ${number} Sqaure Feet = ${squareFoot} Square Meters `
}


