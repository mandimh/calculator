var num = '';
var equation = '';
var operator = '';
var total;
var key;

$('#clearAll').click(() => reset());
$('#clear').click(() => {
    clear();
});


// ==========================
//   Keyboard listeners
// ==========================
// It doesnt work for the operators except = and clear
$(document).keydown((e) => {
    //console.log(e.keyCode);
    key = e.keyCode;
    switch (key) {
        case 8: // delete/backspace
            clear();
            break;
        case 13: // Enter
        case 187: // equal sign
            checkLastOperator();
            total = Number(Math.round(eval(equation) + 'e4') + "e-4");
            $('#numField').text(total);
            equation += "=";
            displayEquation();
            break;
        case 46: // 46 should be the keyCode for decimal
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
            if (equation[equation.length - 1] === "=" || $('#numField').text().match(/ERROR/)) {
                reset();
            } else {
                // into #numField and equation I need to put the number associated with the keyCode
                var str = String.fromCharCode(key);
                $('#numField').append(str);
                equation += str;
            }
            displayEquation();
            break;
        case 190: // '.'
            if (!$('#numField').text().match(/\./g)) {
                $('#numField').append('.');
                equation += '.';
                displayEquation();
            }
            break;
        case 106: // *
            checkLastOperator();
            operator = '*';
            equation += "*";
            $('#numField').text('');
            displayEquation();
            break;
        case 107: // +
            checkLastOperator();
            operator = '+';
            equation += "+";
            $('#numField').text('');
            displayEquation();
            break;
        case 109: // -
            checkLastOperator()
            operator = '-';
            equation += "-";
            $('#numField').text('');
            displayEquation();
            break;
        case 191: // /
            checkLastOperator();
            operator = '/';
            equation += "/";
            $('#numField').text('');
            displayEquation();
            break;
            //        default:
            //            $('#numField').text('WHOOPS');
            //            break;
    }
});


$('#equals').click(() => {
    checkLastOperator();
    total = Number(Math.round(eval(equation) + 'e4') + "e-4");
    $('#numField').text(total);
    equation += "=";
    displayEquation();
});

//How do I listen for each number and operator, without writing all this for each key??
$('.calcButton').click(() => {
    if (equation[equation.length - 1] === "=" || $('#numField').text().match(/ERROR/)) {
        reset();
    }
    if (event.target.id == "period") {
        if (!$('#numField').text().match(/\./g)) {
            $('#numField').append('.');
            equation += ('.');
        }
    } else {
        $('#numField').append(event.target.id);
        equation += event.target.id
    }
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
    $('#numField').text('');
    displayEquation();
});

// ==========================
//    Function Definitions
// ==========================

const reset = () => {
    equation = '';
    displayEquation();
    $('#numField').text('');
}

const displayNum = () => {
    $('#numField').text(num);
}

const displayEquation = () => {
    $('#equation').text(equation);
}

const clear = () => {
    equation = equation.slice(0, -1);
    $('#numField').text().slice(0, -1);

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
