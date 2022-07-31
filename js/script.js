const main = document.querySelector('.calc_main');
const clear = document.querySelector('.calc_btn_C');
const clearElement = document.querySelector('.calc_btn_CE')
const one = document.querySelector('.calc_btn_1');
const two = document.querySelector('.calc_btn_2');
const three = document.querySelector('.calc_btn_3');
const four = document.querySelector('.calc_btn_4');
const five = document.querySelector('.calc_btn_5');
const six = document.querySelector('.calc_btn_6');
const seven = document.querySelector('.calc_btn_7');
const eight = document.querySelector('.calc_btn_8');
const nine = document.querySelector('.calc_btn_9');
const zero = document.querySelector('.calc_btn_0');
const plus = document.querySelector('.calc_btn_plus');
const minus = document.querySelector('.calc_btn_minus');
const divide = document.querySelector('.calc_btn_divide');
const multiplication = document.querySelector('.calc_btn_multiplication');
const equal = document.querySelector('.calc_btn_equal');
const dot = document.querySelector('.calc_btn_dot');
const pm = document.querySelector('.calc_btn_pm');
const percent = document.querySelector('.calc_btn_percent');


let firstValue = '';
let sign = '';
let secondValue = '';


percent.addEventListener('click', () => {
    if (sign) {
        if (secondValue !== '') {          
            if (sign === '+') {
                main.innerHTML = '';
                if (String((parseFloat(secondValue) + parseFloat(firstValue))  / 100).length > 12) {
                    main.textContent += `${((parseFloat(secondValue) / parseFloat(firstValue)) / 100).toExponential(3)}`
                }
                else {
                    main.textContent += `${(parseFloat(secondValue) / parseFloat(firstValue))  / 100}`;
                }
                firstValue = '';
                secondValue = '';
                sign = '';
            }
            else if (sign === '-') {
                main.innerHTML = '';
                if (String((parseFloat(secondValue) - parseFloat(firstValue))  / 100).length > 12) {
                    main.textContent += `${((parseFloat(secondValue) / parseFloat(firstValue)) / 100).toExponential(3)}`
                }
                else {
                    main.textContent += `${(parseFloat(secondValue) / parseFloat(firstValue))  / 100}`;
                }
                firstValue = '';
                secondValue = '';
                sign = '';
            }
            else if (sign === '*') {
                main.innerHTML = '';
                if (String((parseFloat(secondValue) * parseFloat(firstValue))  / 100).length > 12) {
                    main.textContent += `${((parseFloat(secondValue) / parseFloat(firstValue)) / 100).toExponential(3)}`
                }
                else {
                    main.textContent += `${(parseFloat(secondValue) / parseFloat(firstValue))  / 100}`;
                }
                firstValue = '';
                secondValue = '';
                sign = '';
            }
            else {
                main.innerHTML = '';
                if (String((parseFloat(secondValue) / parseFloat(firstValue))  / 100).length > 12) {
                    main.textContent += `${((parseFloat(secondValue) / parseFloat(firstValue)) / 100).toExponential(3)}`
                }
                else {
                    main.textContent += `${(parseFloat(secondValue) / parseFloat(firstValue))  / 100}`;
                }
                firstValue = '';
                secondValue = '';
                sign = '';
            }
        }
    }
    else {
        if (firstValue !== '') {
            if (String(parseFloat(firstValue) / 100).length > 12) {
                firstValue = `${(parseFloat(firstValue) / 100).toExponential(3)}`;
            }
            else {
                firstValue = `${parseFloat(firstValue) / 100}`;
            }
            main.innerHTML = '';
            main.textContent += `${firstValue}`;
        }
    }
});


pm.addEventListener('click', () => {
    if (sign) {
        if (firstValue !== '') {
            if (secondValue[0] !== '-') {
                secondValue = secondValue.padStart(secondValue.length + 1, '-');
                main.innerHTML = '';
                main.textContent += `${secondValue}`;
            }
            else {
                secondValue = secondValue.slice(1, secondValue.length);
                main.innerHTML = '';
                main.textContent += `${secondValue}`;
            }
        }
    }
    else {
        if (firstValue !== '') {
            if (firstValue[0] !== '-') {
                firstValue = firstValue.padStart(firstValue.length + 1, '-');
                main.innerHTML = '';
                main.textContent += `${firstValue}`;
            }
            else {
                firstValue = firstValue.slice(1, firstValue.length);
                main.innerHTML = '';
                main.textContent += `${firstValue}`;
            }
        }
    }
});

dot.addEventListener('click', () => {
    if (sign) {
        if (secondValue.indexOf('.') === -1 && secondValue !== '') {
            secondValue += '.';
            main.innerHTML = '';
            main.textContent += `${secondValue}`;
        }
    }
    else {
        if (firstValue.indexOf('.') === -1 && firstValue !== '') {
            firstValue += '.';
            main.innerHTML = '';
            main.textContent += `${firstValue}`;
        }
    }
});

one.addEventListener('click', () => {
    if (!sign) {
        if (firstValue.length < 12) {
            main.innerHTML = '';
            if (firstValue[0] === '0' && firstValue.length === 1) {
                firstValue = '1';
                main.textContent += `${firstValue}`;
            }
            else {
                firstValue += '1';
                main.textContent += `${firstValue}`;
            }
        }
    }
    else {
        if (secondValue.length < 12) {
            main.innerHTML = '';
            if (secondValue[0] === '0' && secondValue.length === 1) {
                secondValue = '1';
                main.textContent += `${secondValue}`;
            }
            else {
                secondValue += '1';
                main.textContent += `${secondValue}`;
            }
        }
    }
});

two.addEventListener('click', () => {
    if (!sign) {
        if (firstValue.length < 12) {
            main.innerHTML = '';
            if (firstValue[0] === '0' && firstValue.length === 1) {
                firstValue = '2';
                main.textContent += `${firstValue}`;
            }
            else {
                firstValue += '2';
                main.textContent += `${firstValue}`;
            }
        }
    }
    else {
        if (secondValue.length < 12) {
            main.innerHTML = '';
            if (secondValue[0] === '0' && secondValue.length === 1) {
                secondValue = '2';
                main.textContent += `${secondValue}`;
            }
            else {
                secondValue += '2';
                main.textContent += `${secondValue}`;
            }
        }
    }
});

three.addEventListener('click', () => {
    if (!sign) {
        if (firstValue.length < 12) {
            main.innerHTML = '';
            if (firstValue[0] === '0' && firstValue.length === 1) {
                firstValue = '3';
                main.textContent += `${firstValue}`;
            }
            else {
                firstValue += '3';
                main.textContent += `${firstValue}`;
            }
        }
    }
    else {
        if (secondValue.length < 12) {
            main.innerHTML = '';
            if (secondValue[0] === '0' && secondValue.length === 1) {
                secondValue = '3';
                main.textContent += `${secondValue}`;
            }
            else {
                secondValue += '3';
                main.textContent += `${secondValue}`;
            }
        }
    }
});

four.addEventListener('click', () => {
    if (!sign) {
        if (firstValue.length < 12) {
            main.innerHTML = '';
            if (firstValue[0] === '0' && firstValue.length === 1) {
                firstValue = '4';
                main.textContent += `${firstValue}`;
            }
            else {
                firstValue += '4';
                main.textContent += `${firstValue}`;
            }
        }
    }
    else {
        if (secondValue.length < 12) {
            main.innerHTML = '';
            if (secondValue[0] === '0' && secondValue.length === 1) {
                secondValue = '4';
                main.textContent += `${secondValue}`;
            }
            else {
                secondValue += '4';
                main.textContent += `${secondValue}`;
            }
        }
    }
});

five.addEventListener('click', () => {
    if (!sign) {
        if (firstValue.length < 12) {
            main.innerHTML = '';
            if (firstValue[0] === '0' && firstValue.length === 1) {
                firstValue = '5';
                main.textContent += `${firstValue}`;
            }
            else {
                firstValue += '5';
                main.textContent += `${firstValue}`;
            }
        }
    }
    else {
        if (secondValue.length < 12) {
            main.innerHTML = '';
            if (secondValue[0] === '0' && secondValue.length === 1) {
                secondValue = '5';
                main.textContent += `${secondValue}`;
            }
            else {
                secondValue += '5';
                main.textContent += `${secondValue}`;
            }
        }
    }
});

six.addEventListener('click', () => {
    if (!sign) {
        if (firstValue.length < 12) {
            main.innerHTML = '';
            if (firstValue[0] === '0' && firstValue.length === 1) {
                firstValue = '6';
                main.textContent += `${firstValue}`;
            }
            else {
                firstValue += '6';
                main.textContent += `${firstValue}`;
            }
        }
    }
    else {
        if (secondValue.length < 12) {
            main.innerHTML = '';
            if (secondValue[0] === '0' && secondValue.length === 1) {
                secondValue = '6';
                main.textContent += `${secondValue}`;
            }
            else {
                secondValue += '6';
                main.textContent += `${secondValue}`;
            }
        }
    }
});

seven.addEventListener('click', () => {
    if (!sign) {
        if (firstValue.length < 12) {
            main.innerHTML = '';
            if (firstValue[0] === '0' && firstValue.length === 1) {
                firstValue = '7';
                main.textContent += `${firstValue}`;
            }
            else {
                firstValue += '7';
                main.textContent += `${firstValue}`;
            }
        }
    }
    else {
        if (secondValue.length < 12) {
            main.innerHTML = '';
            if (secondValue[0] === '0' && secondValue.length === 1) {
                secondValue = '7';
                main.textContent += `${secondValue}`;
            }
            else {
                secondValue += '7';
                main.textContent += `${secondValue}`;
            }
        }
    }
});

eight.addEventListener('click', () => {
    if (!sign) {
        if (firstValue.length < 12) {
            main.innerHTML = '';
            if (firstValue[0] === '0' && firstValue.length === 1) {
                firstValue = '8';
                main.textContent += `${firstValue}`;
            }
            else {
                firstValue += '8';
                main.textContent += `${firstValue}`;
            }
        }
    }
    else {
        if (secondValue.length < 12) {
            main.innerHTML = '';
            if (secondValue[0] === '0' && secondValue.length === 1) {
                secondValue = '8';
                main.textContent += `${secondValue}`;
            }
            else {
                secondValue += '8';
                main.textContent += `${secondValue}`;
            }
        }
    }
});

nine.addEventListener('click', () => {
    if (!sign) {
        if (firstValue.length < 12) {
            main.innerHTML = '';
            if (firstValue[0] === '0' && firstValue.length === 1) {
                firstValue = '9';
                main.textContent += `${firstValue}`;
            }
            else {
                firstValue += '9';
                main.textContent += `${firstValue}`;
            }
        }
    }
    else {
        if (secondValue.length < 12) {
            main.innerHTML = '';
            if (secondValue[0] === '0' && secondValue.length === 1) {
                secondValue = '9';
                main.textContent += `${secondValue}`;
            }
            else {
                secondValue += '9';
                main.textContent += `${secondValue}`;
            }
        }
    }
});

zero.addEventListener('click', () => {
    if (!sign) {
        if (firstValue.length < 12) {
            if (firstValue === '') {
                main.innerHTML = '';
                firstValue += '0';
                main.textContent += `${firstValue}`;
            }
            else if (firstValue.indexOf('.') !== -1) {
                main.innerHTML = '';
                firstValue += '0';
                main.textContent += `${firstValue}`;
            }
            else if (firstValue[0] !== '0') {
                main.innerHTML = '';
                firstValue += '0';
                main.textContent += `${firstValue}`;
            }
        }
    }
    else {
        if (secondValue.length < 12) {
            if (secondValue === '') {
                main.innerHTML = '';
                secondValue += '0';
                main.textContent += `${secondValue}`;
            }
            else if (secondValue.indexOf('.') !== -1) {
                main.innerHTML = '';
                secondValue += '0';
                main.textContent += `${secondValue}`;
            }
            else if (secondValue[0] !== '0') {
                main.innerHTML = '';
                secondValue += '0';
                main.textContent += `${secondValue}`;
            }
        }
    }
});


clear.addEventListener('click', () => {
    main.innerHTML = '0';
    firstValue = '';
    sign = '';
    secondValue = '';
    setDefoultStyleForAll(minus, plus, divide, multiplication);
});


clearElement.addEventListener('click', () => {
    main.innerHTML = '';
    if (!sign) {
        firstValue = firstValue.substr(0, firstValue.length - 1);
        if (firstValue !== '') {
            main.textContent += `${firstValue}`;
        }
        else {
            main.textContent += 0;
        }
    }
});

plus.addEventListener('click', () => {
    if (sign === '') {
        if (firstValue) {
            setDefoultStyleForThird(minus, divide, multiplication, plus);
            sign = '+';
        }
    }
    else if (sign === '+') {
        if (secondValue !== '' && parseFloat(firstValue) !== 'NaN' && parseFloat(secondValue) !== 'NaN') {
            main.innerHTML = '';
            setDefoultStyleForThird(plus, divide, multiplication, minus);
            if (String(parseFloat(firstValue) + parseFloat(secondValue)).length <= 12) {
                main.textContent += parseFloat(firstValue) + parseFloat(secondValue);
                firstValue = `${parseFloat(firstValue) + parseFloat(secondValue)}`;
                secondValue = '';
            }
            else {
                main.textContent += (parseFloat(firstValue) + parseFloat(secondValue)).toExponential(3);
                firstValue = `${parseFloat(firstValue) + parseFloat(secondValue).toExponential(3)}`;
                secondValue = '';
            }
        }
    }
    else {
        if (parseFloat(firstValue) && parseFloat(secondValue)) {
            setDefoultStyleForThird(minus, divide, multiplication, plus);
            if (sign === '-') {
                main.innerHTML = '';
                if (String(parseFloat(firstValue) - parseFloat(secondValue)).length <= 12) {
                    main.textContent += parseFloat(firstValue) - parseFloat(secondValue);
                    firstValue = `${parseFloat(firstValue) - parseFloat(secondValue)}`;
                    secondValue = '';
                }
                else {
                    main.textContent += (parseFloat(firstValue) - parseFloat(secondValue)).toExponential(3);
                    firstValue = `${parseFloat(firstValue) - parseFloat(secondValue).toExponential(3)}`;
                    secondValue = '';
                }
                sign = '+';
            }
            else if (sign === '/') {
                main.innerHTML = '';
                if (String(parseFloat(firstValue) / parseFloat(secondValue)).length <= 12) {
                    main.textContent += parseFloat(firstValue) / parseFloat(secondValue);
                    firstValue = `${parseFloat(firstValue) / parseFloat(secondValue)}`;
                    secondValue = '';
                }
                else {
                    main.textContent += (parseFloat(firstValue) / parseFloat(secondValue)).toExponential(3);
                    firstValue = `${parseFloat(firstValue) / parseFloat(secondValue).toExponential(3)}`;
                    secondValue = '';
                }
                sign = '+';
            }
            else {
                main.innerHTML = '';
                if (String(parseFloat(firstValue) * parseFloat(secondValue)).length <= 12) {
                    main.textContent += parseFloat(firstValue) * parseFloat(secondValue);
                    firstValue = `${parseFloat(firstValue) * parseFloat(secondValue)}`;
                    secondValue = '';
                }
                else {
                    main.textContent += (parseFloat(firstValue) * parseFloat(secondValue)).toExponential(3);
                    firstValue = `${parseFloat(firstValue) * parseFloat(secondValue).toExponential(3)}`;
                    secondValue = '';
                }
                sign = '+';
            } 
        }
        else {
            setDefoultStyleForThird(minus, divide, multiplication, plus);
            sign = '+';
        }
    }
});

minus.addEventListener('click', () => {
    if (sign === '') {
        if (firstValue !== '') {
            sign = '-';
            setDefoultStyleForThird(plus, divide, multiplication, minus);
        }
        else {
            firstValue += '-';
            main.innerHTML = '';
            main.textContent += firstValue;
        }
    }
    else if (sign === '-') {
        if (secondValue === '') {
            secondValue = '-';
            main.innerHTML = '';
            main.textContent += secondValue;
        }
        else {
            setDefoultStyleForThird(plus, divide, multiplication, minus);
            if (secondValue !== '' && parseFloat(firstValue) !== 'NaN' && parseFloat(secondValue) !== 'NaN') {
                main.innerHTML = '';
                if (String(parseFloat(firstValue) - parseFloat(secondValue)).length <= 12) {
                    main.textContent += parseFloat(firstValue) - parseFloat(secondValue);
                    firstValue = `${parseFloat(firstValue) - parseFloat(secondValue)}`;
                    secondValue = '';
                }
                else {
                    main.textContent += (parseFloat(firstValue) - parseFloat(secondValue)).toExponential(3);
                    firstValue = `${parseFloat(firstValue) - parseFloat(secondValue).toExponential(3)}`;
                    secondValue = '';
                }
            }
        }     
    }
    else {
        if (parseFloat(firstValue) && parseFloat(secondValue)) {
            setDefoultStyleForThird(plus, divide, multiplication, minus);
            if (sign === '+') {
                main.innerHTML = '';
                if (String(parseFloat(firstValue) + parseFloat(secondValue)).length <= 12) {
                    main.textContent += parseFloat(firstValue) + parseFloat(secondValue);
                    firstValue = `${parseFloat(firstValue) + parseFloat(secondValue)}`;
                    secondValue = '';
                }
                else {
                    main.textContent += (parseFloat(firstValue) + parseFloat(secondValue)).toExponential(3);
                    firstValue = `${parseFloat(firstValue) + parseFloat(secondValue).toExponential(3)}`;
                    secondValue = '';
                }
                sign = '-';
            }
            else if (sign === '/') {
                main.innerHTML = '';
                if (String(parseFloat(firstValue) / parseFloat(secondValue)).length <= 12) {
                    main.textContent += parseFloat(firstValue) / parseFloat(secondValue);
                    firstValue = `${parseFloat(firstValue) / parseFloat(secondValue)}`;
                    secondValue = '';
                }
                else {
                    main.textContent += (parseFloat(firstValue) / parseFloat(secondValue)).toExponential(3);
                    firstValue = `${parseFloat(firstValue) / parseFloat(secondValue).toExponential(3)}`;
                    secondValue = '';
                }
                sign = '-';
            }
            else {
                main.innerHTML = '';
                if (String(parseFloat(firstValue) * parseFloat(secondValue)).length <= 12) {
                    main.textContent += parseFloat(firstValue) * parseFloat(secondValue);
                    firstValue = `${parseFloat(firstValue) * parseFloat(secondValue)}`;
                    secondValue = '';
                }
                else {
                    main.textContent += (parseFloat(firstValue) * parseFloat(secondValue)).toExponential(3);
                    firstValue = `${parseFloat(firstValue) * parseFloat(secondValue).toExponential(3)}`;
                    secondValue = '';
                }
                sign = '-';
            }
           
        }
        else {
            if (secondValue === '') {
                secondValue = '-';
                main.innerHTML = '';
                main.textContent += secondValue;
            }
            else {
                setDefoultStyleForThird(plus, divide, multiplication, minus);
                sign = '-';
            }
        }
    }
});

divide.addEventListener('click', () => {
    if (sign === '') {
        if (firstValue) {
            setDefoultStyleForThird(plus, minus, multiplication, divide);
            sign = '/';
        }
    }
    else if (sign === '/') {
        if (secondValue !== '' && parseFloat(firstValue) !== 'NaN' && parseFloat(secondValue) !== 'NaN') {
            setDefoultStyleForThird(plus, minus, multiplication, divide);
            main.innerHTML = '';
            if (String(parseFloat(firstValue) / parseFloat(secondValue)).length <= 12) {
                main.textContent += parseFloat(firstValue) / parseFloat(secondValue);
                firstValue = `${parseFloat(firstValue) / parseFloat(secondValue)}`;
                secondValue = '';
            }
            else {
                main.textContent += (parseFloat(firstValue) / parseFloat(secondValue)).toExponential(3);
                firstValue = `${parseFloat(firstValue) / parseFloat(secondValue).toExponential(3)}`;
                secondValue = '';
            }
            secondValue = '';
        }
    }
    else {
        if (parseFloat(firstValue) && parseFloat(secondValue)) {
            setDefoultStyleForThird(plus, minus, multiplication, divide);
            if (sign === '+') {
                main.innerHTML = '';
                if (String(parseFloat(firstValue) + parseFloat(secondValue)).length <= 12) {
                    main.textContent += parseFloat(firstValue) + parseFloat(secondValue);
                    firstValue = `${parseFloat(firstValue) + parseFloat(secondValue)}`;
                    secondValue = '';
                }
                else {
                    main.textContent += (parseFloat(firstValue) + parseFloat(secondValue)).toExponential(3);
                    firstValue = `${parseFloat(firstValue) + parseFloat(secondValue).toExponential(3)}`;
                    secondValue = '';
                }
                sign = '/';
            }
            else if (sign === '-') {
                main.innerHTML = '';
                if (String(parseFloat(firstValue) - parseFloat(secondValue)).length <= 12) {
                    main.textContent += parseFloat(firstValue) - parseFloat(secondValue);
                    firstValue = `${parseFloat(firstValue) - parseFloat(secondValue)}`;
                    secondValue = '';
                }
                else {
                    main.textContent += (parseFloat(firstValue) - parseFloat(secondValue)).toExponential(3);
                    firstValue = `${parseFloat(firstValue) - parseFloat(secondValue).toExponential(3)}`;
                    secondValue = '';
                }
                sign = '/';
            }
            else {
                main.innerHTML = '';
                if (String(parseFloat(firstValue) * parseFloat(secondValue)).length <= 12) {
                    main.textContent += parseFloat(firstValue) * parseFloat(secondValue);
                    firstValue = `${parseFloat(firstValue) * parseFloat(secondValue)}`;
                    secondValue = '';
                }
                else {
                    main.textContent += (parseFloat(firstValue) * parseFloat(secondValue)).toExponential(3);
                    firstValue = `${parseFloat(firstValue) * parseFloat(secondValue).toExponential(3)}`;
                    secondValue = '';
                }
                sign = '/';
            }
            
        }
        else {
            setDefoultStyleForThird(plus, minus, multiplication, divide);
            sign = '/';
        }
    }
});

multiplication.addEventListener('click', () => {
    if (sign === '') {
        if (firstValue) {
            setDefoultStyleForThird(plus, divide, minus, multiplication);
            sign = '*';
        }
    }
    else if (sign === '*') {
        if (secondValue !== '' && parseFloat(firstValue) !== 'NaN' && parseFloat(secondValue) !== 'NaN') {
            setDefoultStyleForThird(plus, divide, minus, multiplication);
            main.innerHTML = '';
            if (String(parseFloat(firstValue) * parseFloat(secondValue)).length <= 12) {
                main.textContent += parseFloat(firstValue) * parseFloat(secondValue);
                firstValue = `${parseFloat(firstValue) * parseFloat(secondValue)}`;
                secondValue = '';
            }
            else {
                main.textContent += (parseFloat(firstValue) * parseFloat(secondValue)).toExponential(3);
                firstValue = `${parseFloat(firstValue) * parseFloat(secondValue).toExponential(3)}`;
                secondValue = '';
            }
            secondValue = '';
        }
    }
    else {
        if (parseFloat(firstValue) && parseFloat(secondValue)) {
            setDefoultStyleForThird(plus, divide, minus, multiplication);
            if (sign === '+') {
                main.innerHTML = '';
                if (String(parseFloat(firstValue) + parseFloat(secondValue)).length <= 12) {
                    main.textContent += parseFloat(firstValue) + parseFloat(secondValue);
                    firstValue = `${parseFloat(firstValue) + parseFloat(secondValue)}`;
                    secondValue = '';
                }
                else {
                    main.textContent += (parseFloat(firstValue) + parseFloat(secondValue)).toExponential(3);
                    firstValue = `${parseFloat(firstValue) + parseFloat(secondValue).toExponential(3)}`;
                    secondValue = '';
                }
                sign = '*';
            }
            else if (sign === '/') {
                main.innerHTML = '';
                if (String(parseFloat(firstValue) / parseFloat(secondValue)).length <= 12) {
                    main.textContent += parseFloat(firstValue) / parseFloat(secondValue);
                    firstValue = `${parseFloat(firstValue) / parseFloat(secondValue)}`;
                    secondValue = '';
                }
                else {
                    main.textContent += (parseFloat(firstValue) / parseFloat(secondValue)).toExponential(3);
                    firstValue = `${parseFloat(firstValue) / parseFloat(secondValue).toExponential(3)}`;
                    secondValue = '';
                }
                sign = '*';
            }
            else {
                main.innerHTML = '';
                if (String(parseFloat(firstValue) - parseFloat(secondValue)).length <= 12) {
                    main.textContent += parseFloat(firstValue) - parseFloat(secondValue);
                    firstValue = `${parseFloat(firstValue) - parseFloat(secondValue)}`;
                    secondValue = '';
                }
                else {
                    main.textContent += (parseFloat(firstValue) - parseFloat(secondValue)).toExponential(3);
                    firstValue = `${parseFloat(firstValue) - parseFloat(secondValue).toExponential(3)}`;
                    secondValue = '';
                }
                sign = '*';
            }
            
        }
        else {
            setDefoultStyleForThird(plus, divide, minus, multiplication);
            sign = '*';
        }
    }
});

equal.addEventListener('click', () => {
    if (sign) {
        if (sign === '+' && secondValue != '' && firstValue != '') {
            main.innerHTML = '';
            if (String(parseFloat(firstValue) + parseFloat(secondValue)).length <= 12) {
                main.textContent += parseFloat(firstValue) + parseFloat(secondValue);
                firstValue = `${parseFloat(firstValue) + parseFloat(secondValue)}`;
                secondValue = '';
            }
            else {
                main.textContent += (parseFloat(firstValue) + parseFloat(secondValue)).toExponential(3);
                firstValue = `${parseFloat(firstValue) + parseFloat(secondValue).toExponential(3)}`;
                secondValue = '';
            };
            setDefoultStyleForAll(minus, plus, multiplication, divide);
            firstValue = '';
            secondValue = '';
            sign = '';
        }
        else if (sign === '-' && secondValue != '' && firstValue != '') {
            main.innerHTML = '';
            if (String(parseFloat(firstValue) - parseFloat(secondValue)).length <= 12) {
                main.textContent += parseFloat(firstValue) - parseFloat(secondValue);
                firstValue = `${parseFloat(firstValue) - parseFloat(secondValue)}`;
                secondValue = '';
            }
            else {
                main.textContent += (parseFloat(firstValue) - parseFloat(secondValue)).toExponential(3);
                firstValue = `${parseFloat(firstValue) - parseFloat(secondValue).toExponential(3)}`;
                secondValue = '';
            }
            setDefoultStyleForAll(minus, plus, multiplication, divide);
            firstValue = '';
            secondValue = '';
            sign = '';
        }
        else if (sign === '*' && secondValue != '' && firstValue != '') {
            main.innerHTML = '';
            if (String(parseFloat(firstValue) * parseFloat(secondValue)).length <= 12) {
                main.textContent += parseFloat(firstValue) * parseFloat(secondValue);
                firstValue = `${parseFloat(firstValue) * parseFloat(secondValue)}`;
                secondValue = '';
            }
            else {
                main.textContent += (parseFloat(firstValue) * parseFloat(secondValue)).toExponential(3);
                firstValue = `${parseFloat(firstValue) * parseFloat(secondValue).toExponential(3)}`;
                secondValue = '';
            }
            setDefoultStyleForAll(minus, plus, multiplication, divide);
            firstValue = '';
            secondValue = '';
            sign = '';
        }
        else if (sign === '/' && secondValue != '' && firstValue != '') {
            main.innerHTML = '';
            if (String(parseFloat(firstValue) / parseFloat(secondValue)).length <= 12) {
                main.textContent += parseFloat(firstValue) / parseFloat(secondValue);
                firstValue = `${parseFloat(firstValue) / parseFloat(secondValue)}`;
                secondValue = '';
            }
            else {
                main.textContent += (parseFloat(firstValue) / parseFloat(secondValue)).toExponential(3);
                firstValue = `${parseFloat(firstValue) / parseFloat(secondValue).toExponential(3)}`;
                secondValue = '';
            }
            setDefoultStyleForAll(minus, plus, multiplication, divide);
            firstValue = '';
            secondValue = '';
            sign = '';
        }
    }
});

function setDefoultStyleForAll(f, s, t, fo) {
    f.style.backgroundColor = '#FD6A00';
    f.style.color = '#fff';
    s.style.backgroundColor = '#FD6A00';
    s.style.color = '#fff';
    t.style.backgroundColor = '#FD6A00';
    t.style.color = '#fff';
    fo.style.backgroundColor = '#FD6A00';
    fo.style.color = '#fff';
}

function setDefoultStyleForThird(f, s, t, fo) {
    f.style.backgroundColor = '#FD6A00';
    f.style.color = '#fff';
    s.style.backgroundColor = '#FD6A00';
    s.style.color = '#fff';
    t.style.backgroundColor = '#FD6A00';
    t.style.color = '#fff';
    fo.style.backgroundColor = '#fff';
    fo.style.color = '#FD6A00';
}