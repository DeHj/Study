let outputField = document.querySelector("#outputfield");
let value = "";
let breaksDiff = 0;

function show() {
    if (value == "")
        outputField.value = "0";
    else
        outputField.value = value;
}

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

function to_bin() {
    value = parseInt(value, 10).toString(2);
    show(); 
}

function to_dec() {
    sup_value = parseInt(value, 2);
    if (!Number.isNaN(sup_value))
        value = sup_value;
    show();
}

function reset() {
    value = "";
    show();
}

function erase_last() {
    if (value != "")
        value = value.slice(0, outputField.value.length - 1);

    show();
}

function isDigit(val) {
    return (!Number.isNaN(Number.parseInt(val)));
}

function add_value(val) {
    let lS = value.slice(-1);

    if (isDigit(val)) {
        if (isDigit(lS) || lS == ""
        || lS == "+" || lS == "-" || lS == "*" || lS == "/"
        || lS == "(" || lS == ".") {
            value += val;
        }
    }
    else if (val == "(") {
        if (lS == "" || lS == "("
        || lS == "+" || lS == "-" || lS == "*" || lS == "/") {
            value += val;
            breaksDiff++;
        }
    }
    else if (val == ")") {
        if ((isDigit(lS) || lS == "!" || lS == ")") && breaksDiff > 0) {
            value += val;
            breaksDiff--;
        }
    }
    else if (val == ".") {
        if (isDigit(lS)) {
            value += val;
        }
    }
    else if (val == "!") {
        if (isDigit(lS) || lS == ")") {
            value += val;
        }
    }
    else {
        // val == "+-*/"
        if (isDigit(lS) || lS == ")" || lS == "!") {
            value += val;
        }
    }

    show();
}

function goodForEvalform(expression) {

    for (let i = 0; i < expression.length; i++) {
        if (expression[i] == "!") {
            //alert(expression);
            if (isDigit(expression[i - 1])) {
                // Перед ! - цифра
                for (let j = i - 2; j >= -1; j--) {
                    if (j == -1 || !isDigit(expression[j])) {
                        factorialArgument = expression.slice(j + 1, i);
                        //alert(factorialArgument);

                        expression = expression.replace(factorialArgument + "!", "factorial(" + factorialArgument + ")");
                        //alert(expression);
                        break;
                    }
                }
            }
            else {
                // Перед ! - скобка

                let diff = 1;
                for (let j = i - 2; j >= - 1; j--) {
                    if (j == -1) {
                        alert("Wrong break sequence!");
                        return;
                    }
                    else if (expression[j] == ")")
                        diff++;
                    else if (expression[j] == "(") {
                        diff--;
                        if (diff == 0) {
                            // Соответствующая открывающая скобка найдена
                            factorialArgument = expression.slice(j, i);
                            //alert(factorialArgument);

                            expression = expression.replace(factorialArgument + "!", "factorial" + factorialArgument + "");
                            //alert(expression);
                            break;
                        }
                    }
                }
            }
        }
    }

    return expression;
}

function calculate() {
    goodForEvalform(value); 

    let result = eval(goodForEvalform(value));

    value = result.toString();;

    show();
    //outputField.value = eval(create_str_to_eval(outputField.value));
}