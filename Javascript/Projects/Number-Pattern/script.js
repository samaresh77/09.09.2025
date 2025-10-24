let buttons = document.querySelectorAll("button");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let num4 = document.getElementById("num4");

buttons.forEach((btn) => {
    // console.log(btn.textContent);
    btn.addEventListener("click", () => {
        let number = btn.textContent;
        switch (number) {
            case "1":
                num1.textContent = number;
                break;
            case "2":
                num2.textContent = number;
                break;
            default:
                break;
        }
    });
});