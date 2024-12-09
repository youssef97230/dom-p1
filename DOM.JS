// Update Total Price
function updateTotal() {
    const cards = document.querySelectorAll(".card");
    let total = 0;
    cards.forEach((card) => {
        const quantity = parseInt(card.querySelector(".quantity").textContent);
        const price = parseInt(card.dataset.price);
      total += quantity * price;
    });
    document.querySelector(".total").textContent = `${total} $`;
    }
    
  // Increase Quantity
    document.querySelectorAll(".fa-plus-circle").forEach((button) =>
    button.addEventListener("click", (e) => {
        const quantityEl = e.target.nextElementSibling;
        let quantity = parseInt(quantityEl.textContent);
        quantityEl.textContent = ++quantity;
        updateTotal();
    })
    );
    
  // Decrease Quantity
    document.querySelectorAll(".fa-minus-circle").forEach((button) =>
    button.addEventListener("click", (e) => {
        const quantityEl = e.target.previousElementSibling;
        let quantity = parseInt(quantityEl.textContent);
        if (quantity > 0) {
        quantityEl.textContent = --quantity;
        updateTotal();
        }
    })
    );
    
  // Delete Item
    document.querySelectorAll(".fa-trash-alt").forEach((button) =>
    button.addEventListener("click", (e) => {
        const card = e.target.closest(".card");
        card.remove();
        updateTotal();
    })
    );
    
  // Like Item
    document.querySelectorAll(".fa-heart").forEach((button) =>
    button.addEventListener("click", (e) => {
        e.target.classList.toggle("liked");
        e.target.style.color = e.target.classList.contains("liked")
        ? "red"
        : "black";
    })
    );