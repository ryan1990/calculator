var Calculator = /** @class */ (function () {
    function Calculator() {
        var _this = this;
        var button1 = document.getElementById("button1");
        button1.addEventListener("click", function () { return _this.dis(1); });
        var button2 = document.getElementById("button2");
        button2.addEventListener("click", function () { return _this.dis(2); });
        var button3 = document.getElementById("button3");
        button3.addEventListener("click", function () { return _this.dis(3); });
        var button4 = document.getElementById("button4");
        button4.addEventListener("click", function () { return _this.dis(4); });
        var button5 = document.getElementById("button5");
        button5.addEventListener("click", function () { return _this.dis(5); });
        var button6 = document.getElementById("button6");
        button6.addEventListener("click", function () { return _this.dis(6); });
        var button7 = document.getElementById("button7");
        button7.addEventListener("click", function () { return _this.dis(7); });
        var button8 = document.getElementById("button8");
        button8.addEventListener("click", function () { return _this.dis(8); });
        var button9 = document.getElementById("button9");
        button9.addEventListener("click", function () { return _this.dis(9); });
        var button0 = document.getElementById("button0");
        button0.addEventListener("click", function () { return _this.dis(0); });
        var buttonc = document.getElementById("buttonc");
        buttonc.addEventListener("click", function () { return _this.clr(); });
        var buttonDivide = document.getElementById("button/");
        buttonDivide.addEventListener("click", function () { return _this.dis('/'); });
        var buttonMinus = document.getElementById("button-");
        buttonMinus.addEventListener("click", function () { return _this.dis('-'); });
        var buttonPlus = document.getElementById("button+");
        buttonPlus.addEventListener("click", function () { return _this.dis('+'); });
        var buttonMultiply = document.getElementById("button*");
        buttonMultiply.addEventListener("click", function () { return _this.dis('*'); });
        var buttonDot = document.getElementById("button.");
        buttonDot.addEventListener("click", function () { return _this.dis('.'); });
        var buttonEquals = document.getElementById("button=");
        buttonEquals.addEventListener("click", function () { return _this.solve(); });
    }
    ;
    //function that displays value 
    Calculator.prototype.dis = function (val) {
        document.getElementById("result").value += val;
    };
    //function that evaluates the digit and return result 
    Calculator.prototype.solve = function () {
        var x = document.getElementById("result").value;
        var y = eval(x);
        document.getElementById("result").value = y;
    };
    //function that clears the display 
    Calculator.prototype.clr = function () {
        document.getElementById("result").value = "";
    };
    return Calculator;
}());
new Calculator();
