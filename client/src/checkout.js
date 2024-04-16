const checkout = () => {
  let items = document.querySelectorAll(".case1");

  items.forEach((case1) => {
    const price = parseFloat(case1.querySelector(".price").innerHTML);
    const inc = case1.querySelector(".inc");
    const dec = case1.querySelector(".dec");
    const heartButton = case1.querySelector(".heart");
    const like = case1.querySelector(".like");
    const total = case1.querySelector(".total");
    let qty = case1.querySelector(".qty");
    let quantity = parseInt(qty.textContent);

    inc.addEventListener("click", () => {
      quantity++;
      console.log(quantity);
      console.log(price);
      qty.innerHTML = quantity;
      total.innerHTML = `${price * quantity}`;
      calculateTotal();
    });

    dec.addEventListener("click", () => {
      quantity--;
      console.log(quantity);
      console.log(price);
      qty.innerHTML = quantity;
      total.innerHTML = `${price * quantity}`;
      calculateTotal();
    });

    like.addEventListener("click", () => {
      if (heartButton.getAttribute("src") == "./res/heart-regular.svg") {
        heartButton.setAttribute("src", "./res/heart-solid.svg");
      } else {
        heartButton.setAttribute("src", "./res/heart-regular.svg");
      }
    });
  });

  // Function to calculate and update the total
  function calculateTotal() {
    let carttotals = 0;
    let taxtotals = 0;
    items.forEach((case1) => {
      const total = case1.querySelector(".total");
      carttotals += parseFloat(total.innerText);
    });
    taxtotals = (carttotals * 5) / 100;

    const shipping = parseFloat(document.getElementById("shipping").innerText);

    const total = carttotals + taxtotals + shipping;

    document.getElementById("subtotal").innerText = `$${carttotals.toFixed(2)}`;
    document.getElementById("tax").innerText = `$${taxtotals.toFixed(2)}`;
    document.getElementById("total").innerText = `$${total.toFixed(2)}`;
  }

  // Call the function when the page loads
  document.addEventListener("DOMContentLoaded", calculateTotal);
};
export default checkout;
