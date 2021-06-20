const pLength =  document.getElementById ('length');
const lowercases = document.getElementById ('lowercase');
const uppercases = document.getElementById ('uppercase');
const numbers = document.getElementById ('number');
const chars = document.getElementById ('char');
const generates = document.getElementById ('generate');
const results = document.getElementById ('result');

const randomFunc = {
    upper: getRandomUpper,
    lower: getRandomLower,
    number: getRandomNumber,
    char: getRandomSymbol,
}

generates.addEventListener('click', () => {
    results.innerText = generatePassword(uppercases.checked, lowercases.checked, numbers.checked, chars.checked, +pLength.value)

})

function generatePassword (upper, lower, number, char, length){
    let generatedPassword = ''
    const typesCount = upper + lower + number + char
    const typesArray = [{upper}, {lower}, {number}, {char}] .filter(item => Object.values(item)[0])
    console.log(typesArray)
    if (typesCount === 0){
        return
    } for (let i = 0; i < length; i+= typesCount){
        typesArray.forEach(type =>{
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
        })
    }
    return generatedPassword.slice(0, length)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const char = '!@#$%^&*(){}[]=<>/,.'
    return char[Math.floor(Math.random() * char.length)]
}