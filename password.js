const uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H",
     "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", 
     "V", "X", "Y", "Z"];

const lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h",
    "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
    "v", "x", "y", "z"];

const upperLowercase = ["A", "B", "C", "D", "E", "F", "G", "H",
    "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", 
    "V", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h",
    "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
    "v", "x", "y", "z"];

const number = ["1", "2", "3","4", "5", "6", "7", "8", "9", "0"];

const numberUppercase = ["1", "2", "3","4", "5", "6", "7", "8", "9", "0", "A", "B", "C", "D", "E", "F", "G", "H",
    "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", 
    "V", "X", "Y", "Z"];

const numberLowercase = ["1", "2", "3","4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f", "g", "h",
    "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
    "v", "x", "y", "z"];

const numberUppercaseLowercase = ["A", "B", "C", "D", "E", "F", "G", "H",
    "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", 
    "V", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h",
    "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
    "v", "x", "y", "z", "1", "2", "3","4", "5", "6", "7", "8", "9", "0"];

const Uppercase = document.getElementById('Uppercase');
const lowercase = document.getElementById('lowercase');
const uppercaseLowercase = document.getElementById('uppercaseLowercase');
const numbers = document.getElementById('numbers');
const numbersUppercase = document.getElementById('numbersUppercase');
const numbersLowercase = document.getElementById('numbersLowercase');
const numbersUpperLowercase = document.getElementById('numbersUpperLowercase');

const password = document.querySelector(".password");

const amount = 12;

//Uppercase btn
uppercase.addEventListener('click', function(){
    let passwordGenerated = ' ';
    for (let i = 0; i < amount; i++){
        passwordGenerated += uppercaseLetters[getRandomUppercase()];
    }

    password.textContent = passwordGenerated;
})

function getRandomUppercase(){
    return Math.floor(Math.random() * uppercaseLetters.length); 
}

//Lowercase btn
lowercase.addEventListener('click', function(){
    let passwordGenerated = ' ';
    for (let i = 0; i < 8; i++){
        passwordGenerated += lowercaseLetters[getRandomLowercase()];
    }

    password.textContent = passwordGenerated;
})

function getRandomLowercase(){
    return Math.floor(Math.random() * lowercaseLetters.length); 
}

//Uppercase & Lowercase btn
uppercaseLowercase.addEventListener('click', function(){
    let passwordGenerated = ' ';
    for (let i = 0; i < 8; i++){
        passwordGenerated += upperLowercase[getRandomUpperLowercase()];
    }

    password.textContent = passwordGenerated;
})

function getRandomUpperLowercase(){
    return Math.floor(Math.random() * upperLowercase.length); 
}

//Numbers btn
numbers.addEventListener('click', function(){
    let passwordGenerated = ' ';
    for (let i = 0; i < 8; i++){
        passwordGenerated += number[getRandomNumber()];
    }

    password.textContent = passwordGenerated;
})

function getRandomNumber(){
    return Math.floor(Math.random() * number.length); 
}

//Numbers & Uppercase btn
numbersUppercase.addEventListener('click', function(){
    let passwordGenerated = ' ';
    for (let i = 0; i < 8; i++){
        passwordGenerated += numberUppercase[getRandomNumberUppercase()];
    }

    password.textContent = passwordGenerated;
})

function getRandomNumberUppercase(){
    return Math.floor(Math.random() * numberUppercase.length); 
}

//Numbers & Lowercase btn
numbersLowercase.addEventListener('click', function(){
    let passwordGenerated = ' ';
    for (let i = 0; i < 8; i++){
        passwordGenerated += numberLowercase[getRandomNumberLowercase()];
    }

    password.textContent = passwordGenerated;
})

function getRandomNumberLowercase(){
    return Math.floor(Math.random() * numberLowercase.length); 
}

//Numbers, Uppercase & Lowercase btn
numbersUpperLowercase.addEventListener('click', function(){
    let passwordGenerated = ' ';
    for (let i = 0; i < 8; i++){
        passwordGenerated += numberUppercaseLowercase[getRandomNumberUppercaseLowercase()];
    }

    password.textContent = passwordGenerated;
})

function getRandomNumberUppercaseLowercase(){
    return Math.floor(Math.random() * numberUppercaseLowercase.length); 
}