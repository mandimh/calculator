var equation = '';
var operator = '';
var total;

$('#clearAll').click(() => reset());
$('#clear').click(() => {
    clear();
});

$(document).keydown(() => console.log(event.keyCode));

// Keyboard listener for "equals"... how do I get this action to happen on keyboard and mouseclick, without writing it twice?
$(document).keydown(() => {
    if (event.keyCode == '13') {
        checkLastOperator();
        total = Number(Math.round(eval(equation) + 'e4') + "e-4");
        $('#numField').text(total);
        equation += "=";
        displayEquation();
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
        if ($('#numField').text().match(/\./g)) {
            $('#numField').text('ERROR');
        } else {
            $('#numField').append('.');
            equation += '.';
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

const displayEquation = () => {
    $('#equation').text(equation);
}

const clear = () => {
    equation = equation.slice(0, -1);
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
