var num = '';
var equation = '';
var operator = '';
var total;
var key;


// ==========================
//   Keyboard listeners
// ==========================
$(document).keydown((e) => {
    key = e.keyCode;
    switch (key) {
        case 8: // delete/backspace
            clear();
            break;
        case 13: // Enter
        case 187: // equal sign
            equal();
            break;
        case 48: // numbers 
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
            if (equation[equation.length - 1] === "=") {
                reset();
            }
            var str = String.fromCharCode(key);
            num += str;
            displayNum();
            equation += str;
            displayEquation();
            break;
        case 190: // '.' period
        case 110: // '.' decimal
            if (!num.match(/\./g)) {
                num += '.';
                displayNum();
                equation += '.';
                displayEquation();
            }
            break;
        case 106: // *
            checkLastOperator();
            operator = '*';
            equation += "*";
            clearNumDisplay();
            displayEquation();
            break;
        case 107: // +
            checkLastOperator();
            operator = '+';
            equation += "+";
            clearNumDisplay();
            displayEquation();
            break;
        case 109: // -
            checkLastOperator()
            operator = '-';
            equation += "-";
            clearNumDisplay();
            displayEquation();
            break;
        case 191: // /
            checkLastOperator();
            operator = '/';
            equation += "/";
            clearNumDisplay();
            displayEquation();
            break;
    }
});

// ==========================
//   Mouse Click Listeners
// ==========================
$('#clearAll').click(() => reset());

$('#clear').click(() => clear());

$('#equals').click(() => {
    equal();
});

$('.calcButton').click(() => {
    if (equation[equation.length - 1] === "=") {
        reset();
    }
    if (event.target.id == "period") {
        if (!num.match(/\./g)) {
            num += '.';
            equation += '.';
        }
    } else {
        num += event.target.id;
        equation += event.target.id
    }
    displayNum();
    displayEquation();
});

$('.opButton').click(() => {
    operator = event.target.id;
    checkLastOperator();
    switch (operator) {
        case "add":
            operator = '+';
            equation += "+";
            break;
        case "subtract":
            operator = '-';
            equation += "-";
            break;
        case "multiply":
            operator = '*';
            equation += "*";
            break;
        case "divide":
            operator = '/';
            equation += "/";
            break;
    }
    clearNumDisplay();
    displayEquation();
});

// ==========================
//    Function Definitions
// ==========================

const reset = () => {
    equation = '';
    displayEquation();
    clearNumDisplay();
}

const equal = () => {
    checkLastOperator();
    total = Number(Math.round(eval(equation) + 'e4') + "e-4");
    num = total;
    displayNum();
    equation += "=";
    displayEquation();
}

const displayNum = () => {
    $('#numField').text(num);
}

const clearNumDisplay = () => {
    num = '';
    displayNum();
}

const displayEquation = () => {
    $('#equation').text(equation);
}

const clear = () => {
    equation = equation.slice(0, -1);
    num = num.toString().slice(0, -1);
    displayNum();
    displayEquation();
}
const checkLastOperator = () => {
    if (equation[equation.length - 1] === "=") {
        clear();
        equation = total;
    } else if (equation[equation.length - 1].match(/[\+\-\*\/]/g)) {
        clear();
    }
}
