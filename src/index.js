const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const expr_arr = []
    for (let i = 0; i < expr.length; i += 10) {
        expr_arr.unshift((expr.slice(i, i + 10)));
    }
    const result = (expr_arr.reverse()).reduce((acc, value) => {
        if (value === '**********')
            return acc += ' ';
        value = value + '';
        let decode_symbol = '';
        for (let i = 0; i < value.length; i += 2) {
            if (value.slice(i, i + 2) === '10')
                decode_symbol += '.';
            else if (value.slice(i, i + 2) === '11')
                decode_symbol += '-';
        }
        acc = acc + MORSE_TABLE[decode_symbol];
        return acc;
    }, '');
    return result;
    // write your solution here
}
module.exports = {
    decode
}
