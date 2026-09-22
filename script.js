function addToCart(cookieName) {

    const message =
        document.getElementById("cart-message");

    message.innerHTML =
        "🍪 " + cookieName + " added to your cart!";

    message.style.display = "block";

    setTimeout(function() {

        message.style.display = "none";

    }, 2500);
}