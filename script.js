let counterValue = 0;

const counterElement = document.querySelector("#counter")

function uppdateCounter() {
    counterElement.textContent = counterValue;
}

function increment() {
    if (counterValue < 10) {
        counterValue++;
        uppdateCounter()
    }else {
        alert("Значение не можеть быть больше 10")
    }
}

function decrement() {
    if (counterValue > 0) {
        counterValue--;
        uppdateCounter();
    }else {
        alert("Значение не можеть быть меньше нули!")
    }
}