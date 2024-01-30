let input = document.getElementById("result");
function display(num) {
   result.value+=num;
}

function Clear() {
    result.value = "";
}
function del() {
    result.value = result.value.slice(0,-1);
}

function findOperator(text) {
    let operator = 'NA';

    if(text.indexOf('+') !== -1) {
        operator = '+'
    }else if(text.indexOf('-') !== -1) {
        operator = '-'
    }else if(text.indexOf('*') !== -1) {
        operator = '*'
    }else if(text.indexOf('/') !== -1) {
        operator = '/'
    }else if(text.indexOf('%') !== -1) {
        operator = '%'
    }

    return operator;
}

function calc() {
    let inputText = document.getElementById("result").value;
    let operator = findOperator(inputText);
    console.log("string ="+ inputText);
    let arr = inputText.split(operator);
    console.log("arr = " + arr)
    let num1 = Number(arr[0]);
    console.log("num1 ="+ num1);
    console.log("operator = "+ operator);
    let num2 = Number(arr[1]);
    console.log("num2 ="+ num2);

    if(operator === '+') {
        let sum = num1 + num2

        result.value = sum

    }else if(operator === '-') {
        let ans = num1 - num2;

        result.value = ans

    }else if(operator === '*') {
        let product = num1 * num2;

        result.value = product;

    }else if(operator === "/") {
        let ans = num1/num2;

        result.value = ans;

    }else if(operator === "%") {
        let mod = num1 % num2;

        if (num2 !== 0) {
            mod =  num1 % num2;
            result.value = mod;
        } else {
            alert("Error: Division by zero");
        }      

    }else {
        alert("error");
    }
}