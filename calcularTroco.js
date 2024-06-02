const productValue = document.getElementById("number1");
const paid = document.getElementById("number2");
const button = document.querySelector(".button");

function calcNewValue() {
    const newValueProduct = parseInt(productValue.value);
    const newValuePaid = parseInt(paid.value);
    
     if (newValueProduct === newValuePaid) {
        window.alert("Você não receberá nada de troco!");
    } else if (newValuePaid < newValueProduct) {
        window.alert("O valor precisa ser maior para se calcular o troco!");
    } else {
        const resultado = newValuePaid - newValueProduct;
        window.alert(`O produto custou R$ ${newValueProduct} e você receberá R$ ${resultado} de troco!`);
    }
}

button.addEventListener("click", calcNewValue);