var one = document.querySelector('.one');
var add = document.querySelector('.add');
var equals = document.querySelector('.equals');
var two = document.querySelector('.two');
var three = document.querySelector('.three');
var four = document.querySelector('.four');
var five = document.querySelector('.five');
var six = document.querySelector('.six');
var seven = document.querySelector('.seven');
var eight = document.querySelector('.eight');
var nine = document.querySelector('.nine');
var zero = document.querySelector('.zero');
var multiply = document.querySelector('.multiply');
var divide = document.querySelector('.divide');
var minus = document.querySelector('.minus');
var zero = document.querySelector('.zero');
var dot = document.querySelector('.dot');
var mainInput = document.querySelector('.main-input');
var mainOutput = document.querySelector('.main-output');
var clear = document.querySelector('.clear');
var backspace = document.querySelector('.backspace');
var operator = document.querySelectorAll('.operator');
var sum = 0;
var upper = 0;
var operatorCount = 0;
var lower;
var flag = 0;
var lowergrab = function(){
    lower = mainInput.textContent;
};
var addfunction = function(upper,lower){
    sum = upper+lower;
    return sum;
};
var subtractfunction = function(upper,lower){
    sum = upper-lower;
    return sum;
};
var productfunction = function(upper,lower){
    sum = upper*lower;
    return sum;
};
var dividefunction = function(upper,lower){
    sum = upper/lower;
    return sum;
};
var uppershow = function(){
    mainOutput.textContent = sum;
};
var lowershow = function(){
    mainInput.textContent = sum;
};
var lowerclear = function(){
    mainInput.textContent = '';
};
var upperclear = function(){
    mainOutput.textContent = '';
};

one.addEventListener('click',function(){
    var textNode = document.createTextNode(1);
    mainInput.appendChild(textNode);
});
two.addEventListener('click',function(){
    var textNode = document.createTextNode(2);
    mainInput.appendChild(textNode);
});
three.addEventListener('click',function(){
    var textNode = document.createTextNode(3);
    mainInput.appendChild(textNode);
});
four.addEventListener('click',function(){
    var textNode = document.createTextNode(4);
    mainInput.appendChild(textNode);
});
five.addEventListener('click',function(){
    var textNode = document.createTextNode(5);
    mainInput.appendChild(textNode);
});
six.addEventListener('click',function(){
    var textNode = document.createTextNode(6);
    mainInput.appendChild(textNode);
});
seven.addEventListener('click',function(){
    var textNode = document.createTextNode(7);
    mainInput.appendChild(textNode);
});
eight.addEventListener('click',function(){
    var textNode = document.createTextNode(8);
    mainInput.appendChild(textNode);
});
nine.addEventListener('click',function(){
    var textNode = document.createTextNode(9);
    mainInput.appendChild(textNode);
});
zero.addEventListener('click',function(){
    var textNode = document.createTextNode(0);
    mainInput.appendChild(textNode);
});
dot.addEventListener('click',function(){
    var textNode = document.createTextNode('.');
    mainInput.appendChild(textNode);
});
operator.forEach(function(operator){
    operator.addEventListener('click',function(){
        if(flag === 0){
            addfunction(upper,parseFloat(mainInput.textContent));
            uppershow();
            upper = sum;
            lowerclear();
        }
        else if(flag === 1){
            addfunction(upper,parseFloat(mainInput.textContent));
            uppershow();
            upper = sum;
            lowerclear();
        }
        else if(flag === 2){
            subtractfunction(upper,parseFloat(mainInput.textContent));
            uppershow();
            upper = sum;
            lowerclear();
        }
        else if(flag === 3){
            productfunction(upper,parseFloat(mainInput.textContent));
            uppershow();
            upper = sum;
            lowerclear();
        }
        else if(flag === 4){
            dividefunction(upper,parseFloat(mainInput.textContent));
            uppershow();
            upper = sum;
            lowerclear();
        }
        add.addEventListener('click',function(){
            flag = 1;
        });
        minus.addEventListener('click',function(){
            flag = 2;
        });
        multiply.addEventListener('click',function(){
            flag = 3;
        });
        divide.addEventListener('click',function(){
            flag = 4;
        });

    });
});
clear.addEventListener('click',function(){
    mainInput.textContent = '';
    mainOutput.textContent = '';
    flag = 0;
    upper = 0;
});
backspace.addEventListener('click',function(){
    var a = mainInput.textContent.split("");
    a.pop();
    mainInput.textContent = a.join('');
});
equals.addEventListener('click',function(){
    if(flag === 0){
        addfunction(upper,parseFloat(mainInput.textContent));
        uppershow();
        upper = sum;
        lowerclear();
    }
    else if(flag === 1){
        addfunction(upper,parseFloat(mainInput.textContent));
        lowershow();
        upper = sum;
        upperclear();
    }
    else if(flag === 2){
        subtractfunction(upper,parseFloat(mainInput.textContent));
        lowershow();
        upper = sum;
        upperclear();
    }
    else if(flag === 3){
        productfunction(upper,parseFloat(mainInput.textContent));
        lowershow();
        upper = sum;
        upperclear();
    }
    else if(flag === 4){
        dividefunction(upper,parseFloat(mainInput.textContent));
        lowershow();
        upper = sum;
        upperclear();
    }
    flag = 0;
    upper = 0;
});