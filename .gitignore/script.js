var a;
var b;
var operator;
var total;

// ===================
// Operator Functions
// ===================
const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}
const multiply = (a, b) => {
    return a * b;
}
const divide = (a, b) => {
    return a / b;
}
const reset = () => {
    a = undefined;
    b = undefined;
    operator = undefined;
}
const operate = () => {
    switch (operator) {
        case "+":
            total = add(a, b);
            $('#numField').append(" = " + total.valueOf());
            reset();
            break;
        case "subtract":
            total = subtract(a, b);
            $('#numField').append(" = " + total.valueOf());
            reset();
            break;
        case "multiply":
            total = multiply(a, b);
            $('#numField').append(" = " + total.valueOf());
            reset();
            break;
        case "divide":
            total = divide(a, b);
            $('#numField').append(" = " + total.valueOf());
            reset();
            break;
        default:
            $('#numField').text("whoops");
            reset();
            break;
    }
}

// =====================
// Event Listeners - Operators
// =====================
$('#clear').click(() => {
    reset();
    $('#numField').text('');
});
$('#add').click(() => {
    operator = "+";
    equation += operator;
    $('#numField').append('+');
});
$('#subtract').click(() => {
    operator = "subtract";
    equation += operator;
    $('#numField').append('-');
});
$('#multiply').click(() => {
    operator = "multiply";
    equation += operator;
    $('#numField').append('*');
});
$('#divide').click(() => {
    operator = "divide";
    equation += operator;
    $('#numField').append('/');
});
$('#equals').click(() => operate());

// =====================
// Event Listeners - Number Keys
// =====================
var equation = 0;
$('#0').click(() => {
    if (a === undefined) {
        a = 0;
        equation += a;
        $('#numField').text("0");
    } else {
        b = 0;
        equation += b;
        $('#numField').append("0");
    }
    console.log("a = " + a + " | b = " + b);
});
$('#1').click(() => {
    if (a === undefined) {
        a = 1;
        equation += a;
        $('#numField').text("1");
    } else {
        b = 1;
        equation += b;
        $('#numField').append("1");
    }
    console.log("a = " + a + " | b = " + b);
});
$('#2').click(() => {
    if (a === undefined) {
        a = 2;
        equation += a;
        $('#numField').text("2");
    } else {
        b = 2;
        equation += b;
        $('#numField').append("2");
    }
    console.log("a = " + a + " | b = " + b);
});
$('#3').click(() => {
    if (a === undefined) {
        a = 3;
        equation += a;
        $('#numField').text("3");
    } else {
        b = 3;
        equation += b;
        $('#numField').append("3");
    }

    console.log("a = " + a + " | b = " + b);
});
$('#4').click(() => {
    if (a === undefined) {
        a = 4;
        equation += a;
        $('#numField').text("4");
    } else {
        b = 4;
        equation += b;
        $('#numField').append("4");
    }
    console.log("a = " + a + " | b = " + b);
});

//$('#0').click(() => {
//    if (a === undefined) {
//        a = 0;
//        $('#numField').text("0");
//    } else {
//        b = 0;
//        $('#numField').append("0");
//    }
//    console.log("a = " + a + " | b = " + b);
//});
//$('#1').click(() => {
//    if (a === undefined) {
//        a = 1;
//        $('#numField').text("1");
//    } else {
//        b = 1;
//        $('#numField').append("1");
//    }
//    console.log("a = " + a + " | b = " + b);
//});
//$('#2').click(() => {
//    if (a === undefined) {
//        a = 2;
//        $('#numField').text("2");
//    } else {
//        b = 2;
//        $('#numField').append("2");
//    }
//    console.log("a = " + a + " | b = " + b);
//});
//$('#3').click(() => {
//    if (a === undefined) {
//        a = 3;
//        $('#numField').text("3");
//    } else {
//        b = 3;
//        $('#numField').append("3");
//    }
//
//    console.log("a = " + a + " | b = " + b);
//});
//$('#4').click(() => {
//    if (a === undefined) {
//        a = 4;
//        $('#numField').text("4");
//    } else {
//        b = 4;
//        $('#numField').append("4");
//    }
//    console.log("a = " + a + " | b = " + b);
//});
$('#5').click(() => {
    if (a === undefined) {
        a = 5;
        $('#numField').text("5");
    } else {
        b = 5;
        $('#numField').append("5");
    }
    console.log("a = " + a + " | b = " + b);
});
$('#6').click(() => {
    if (a === undefined) {
        a = 6;
        $('#numField').text("6");
    } else {
        b = 6;
        $('#numField').append("6");
    }

    console.log("a = " + a + " | b = " + b);
});
$('#7').click(() => {
    if (a === undefined) {
        a = 7;
        $('#numField').text("7");
    } else {
        b = 7;
        $('#numField').append("7");
    }

    console.log("a = " + a + " | b = " + b);
});
$('#8').click(() => {
    if (a === undefined) {
        a = 8;
        $('#numField').text("8");
    } else {
        b = 8;
        $('#numField').append("8");
    }
    console.log("a = " + a + " | b = " + b);
});
$('#9').click(() => {
    if (a === undefined) {
        a = 9;
        $('#numField').text("9");
    } else {
        b = 9;
        $('#numField').append("9");
    }

    console.log("a = " + a + " | b = " + b);
});
