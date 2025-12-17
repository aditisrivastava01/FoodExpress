let total = 0;

function addToCart(item, price) {
    let cartItems = document.getElementById("cart-items");

    let li = document.createElement("li");
    li.innerHTML = `${item} - ₹${price} 
        <button onclick="removeItem(this, ${price})">X</button>`;

    cartItems.appendChild(li);
    total += price;
    document.getElementById("total").innerText = total;
}

function removeItem(button, price) {
    button.parentElement.remove();
    total -= price;
    document.getElementById("total").innerText = total;
}

function placeOrder() {
    if (total === 0) {
        alert("Cart is empty!");
    } else {
        alert("Order placed successfully!");
        document.getElementById("cart-items").innerHTML = "";
        document.getElementById("total").innerText = 0;
        total = 0;
    }
}
