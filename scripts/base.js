var btns = document.getElementById("buttons");
var nums = [];
var insertPoint = false;
var insertMinus = false;
var slog1, slog2, result, action;

function actDo(x, y, act) {
    if (act === "plus") {
        result = x + y;
    }
    else if(act === "minus") {
        result = x - y;
    }
    else if(act === "multiply") {
        result = x * y;
    }
    else if(act === "devision") {
        result = x / y;
    }
}

function showResult() {
    nums = [];
    actDo(slog1, slog2, action);
    display.innerHTML = result;
    slog1 = result;
}

btns.addEventListener("click", function (event) {
    var currValue = event.target.textContent;


    if (event.target.id === 'point' && !insertPoint) {
        if (!nums.length) {
            nums.push('0', currValue);
        } else {
            nums.push(currValue);
        }
        display.innerHTML = nums.join("");
        insertPoint = true;
    } 

    else if (event.target.id === 'num0' && !nums.length) {
        display.innerHTML = currValue;
    }

    else if (event.target.className === 'num') {
        nums.push(currValue);
        display.innerHTML = nums.join("");
    }

    else if (event.target.id === 'reset') {
        nums = []
        display.innerHTML = '0';
        insertPoint = false;
        slog1 = false;
        slog2 = false;
    }

    else if (event.target.id === 'clear') {
        if (nums.length) {
            if (nums[nums.length - 2] === '.') {
                nums.splice(nums.length - 1);
                insertPoint = false;
            } 
            nums.splice(nums.length - 1);
        }
        else {
            nums = [];        
        }
        display.innerHTML = nums.join("")*1;
    }
    
    else if (event.target.id === 'change') {
        if (!nums.length) {
            for (var i = 0; i < display.innerHTML.length; i++) {
                nums.push(display.innerHTML[i]);
            }
        }

        if (display.innerHTML * 1 > 0) {
            nums.unshift('-');
            display.innerHTML = nums.join("")*1;
            insertMinus = true;
        } else  {
            nums.shift(0);
            display.innerHTML = nums.join("")*1;
            insertMinus = false;
        }
    }

    else if (event.target.className === 'act') {

        if (!slog1) {
            slog1 = nums.join('')*1;
            nums = [];
        }        
        else {
            
            if (nums.length) {
                slog2 = nums.join('') * 1;
                showResult();
            }
            else {
                slog2 = slog1;
            }
        }
        action = event.target.getAttribute('data-act');

    }

    else if (event.target.id === 'result') {
        if (nums.length) {
            slog2 = nums.join('')*1;
        }
        showResult();
    }
    
});







