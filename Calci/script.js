let buttons = document.getElementsByClassName("number");
let display = document.getElementById("display");
let displayValue = display.value;
display.value = "0";
function number(val) {

          if (!validate(val)) {
                    return;
          }
          if(val !== "0" && val !=='.' && displayValue === "0") {
                    displayValue = "";
          }
          
          displayValue += val;
          display.value = displayValue;
          console.log(displayValue);
}

function calculate(operator) {
          if (displayValue === "" || display==='0') return;
          if ("+-*/.".includes(displayValue.slice(-1))) return;
          displayValue += operator;
          console.log(operator);
          display.value = displayValue;
}


function clearDisplay() {
          displayValue = "0";
          display.value = displayValue;
}


function backspace() {
          if (display.value=== '0') {
                    return;
          }
          displayValue = displayValue.slice(0, -1);
          display.value = displayValue;
          if (displayValue === "") {
                    displayValue = "0";
                    display.value = displayValue;
          }
}

function sum() {
          if (displayValue === "" || display.value === '0') return;        
          if ("+-*/.".includes(displayValue.slice(-1))) return;
          displayValue = parseFloat(eval(displayValue).toFixed(3)).toString();
          display.value = displayValue;
}

/// validity function to prevent multiple operators in a row
function validate(val) {
          if ((val === '.' && displayValue.slice(-1) === '.') || (val === '.' && displayValue === '')) {
                    return false;
          };
          if (val === '0' && displayValue === '0') {
                    return false;
          }
          if (val === '.') {
                   // console.log("decimal added");
                    let parts = display.value.split(/[\+\-\*\/]/);
                    if (parts.length > 0 && parts[parts.length - 1].includes('.')) {
                              return false;
                    }
                   // console.log(parts);
          }

          return true;
}