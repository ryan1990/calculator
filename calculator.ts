class Calculator {
    constructor() {
        this.bindButtons();
    };

    //function that displays value 
    dis(val: any) : void
    { 
        document.getElementById("result").value+=val;
    } 

    //function that evaluates the digit and return result 
    solve() : void
    { 
        let x = document.getElementById("result").value 
        let y = eval(x) 
        document.getElementById("result").value = y 
    } 

    //function that clears the display 
    clr() : void
    { 
        document.getElementById("result").value = "" 
    } 

    private bindButtons() : void
    {
        let button1 = document.getElementById("button1");
        button1.addEventListener("click", () => this.dis(1));

        let button2 = document.getElementById("button2");
        button2.addEventListener("click", () => this.dis(2));

        let button3 = document.getElementById("button3");
        button3.addEventListener("click", () => this.dis(3));

        let button4 = document.getElementById("button4");
        button4.addEventListener("click", () => this.dis(4));

        let button5 = document.getElementById("button5");
        button5.addEventListener("click", () => this.dis(5));

        let button6 = document.getElementById("button6");
        button6.addEventListener("click", () => this.dis(6));

        let button7 = document.getElementById("button7");
        button7.addEventListener("click", () => this.dis(7));

        let button8 = document.getElementById("button8");
        button8.addEventListener("click", () => this.dis(8));

        let button9 = document.getElementById("button9");
        button9.addEventListener("click", () => this.dis(9));

        let button0 = document.getElementById("button0");
        button0.addEventListener("click", () => this.dis(0));

        let buttonc = document.getElementById("buttonc");
        buttonc.addEventListener("click", () => this.clr());

        let buttonDivide = document.getElementById("button/");
        buttonDivide.addEventListener("click", () => this.dis('/'));

        let buttonMinus = document.getElementById("button-");
        buttonMinus.addEventListener("click", () => this.dis('-'));

        let buttonPlus = document.getElementById("button+");
        buttonPlus.addEventListener("click", () => this.dis('+'));

        let buttonMultiply = document.getElementById("button*");
        buttonMultiply.addEventListener("click", () => this.dis('*'));

        let buttonDot = document.getElementById("button.");
        buttonDot.addEventListener("click", () => this.dis('.'));

        let buttonEquals = document.getElementById("button=");
        buttonEquals.addEventListener("click", () => this.solve());
    }
}

new Calculator();
