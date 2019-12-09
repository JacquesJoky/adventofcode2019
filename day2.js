let intcodeProgram = '1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,13,1,19,1,19,9,23,1,5,23,27,1,27,9,31,1,6,31,35,2,35,9,39,1,39,6,43,2,9,43,47,1,47,6,51,2,51,9,55,1,5,55,59,2,59,6,63,1,9,63,67,1,67,10,71,1,71,13,75,2,13,75,79,1,6,79,83,2,9,83,87,1,87,6,91,2,10,91,95,2,13,95,99,1,9,99,103,1,5,103,107,2,9,107,111,1,111,5,115,1,115,5,119,1,10,119,123,1,13,123,127,1,2,127,131,1,131,13,0,99,2,14,0,0';

let toTable = input => {
    let table = input.split(',');
    for (let i = 0; i < table.length; i++) {
        table[i] = Number(table[i]);
    }
    return table;
}

//console.log(toTable(intcodeProgram));

let runProgram = (table, noun, verb) => {
    let t = [...table];
    t[1] = noun;
    t[2] = verb;
    for(let i = 0; i < t.length; i+=4) {
        if (t[i] === 1) {
            t[t[i + 3]] = t[t[i + 1]] + t[t[i + 2]];
        } else if (t[i] === 2) {
            t[t[i + 3]] = t[t[i + 1]] * t[t[i + 2]];
        } else if (t[i] === 99) {
            i = t.length;
        } else {
            console.log('Houston, we have a problem.');
            i = t.length;
        }
    }
    return t;
} 

let output = (intcodeProgram, noun, verb) => {
    let table = toTable(intcodeProgram);
    table = runProgram(table, noun, verb);
    return table[0];
}

console.log('La solution au puzzle 3 est : ' + output(intcodeProgram, 12, 2));

let input = (intcodeProgram, result) => {
    for(let noun = 0; noun < 100; noun ++) {
        for(let verb = 0; verb < 100; verb ++) {
            if (output(intcodeProgram, noun, verb) === result) {
                return (100 * noun + verb);
            }
        }
    }
    return "non existing";
}

console.log('La solution au puzzle 4 est : ' + input(intcodeProgram, 19690720));