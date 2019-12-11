let input = '147981-691423';
let min = Number(input.split('-')[0]);
let max = Number(input.split('-')[1]);
let numberOfDigits = 6;

let hastheRightNumberOfDigits = number => {
    return ((number + '').length === 6);
}

let hasTwoIdenticAdjacentDigits = number => {
    let result = false;
    for (let i = 0; i < numberOfDigits - 1; i++) {
        if ((number+'').charAt(i) === (number+'').charAt(i + 1)) {
            result = true;
        }
    }
    return result;
}

let hasOnlyIncreasingOrSameDigitsFromLeftToRight = number => {
    let result = true;
    for (let i = 0; i < numberOfDigits - 1; i++) {
        if ((number+'').charAt(i + 1) < (number+'').charAt(i)) {
            result = false;
        }
    }
    return result;
}

let numberOfPossiblePasswords = input => {
    let min = Number(input.split('-')[0]);
    let max = Number(input.split('-')[1]);
    let number = 0;

    for (let i = min; i<= max; i++) {
        if (hastheRightNumberOfDigits(i) &&
        hasTwoIdenticAdjacentDigits(i) &&
        hasOnlyIncreasingOrSameDigitsFromLeftToRight(i)) {
            number++;    
        }
    }

    return number;
}

console.log('La solution du puzzle 7 est :');
console.log(numberOfPossiblePasswords(input));