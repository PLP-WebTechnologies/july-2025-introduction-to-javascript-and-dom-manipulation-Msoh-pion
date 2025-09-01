// -------------------------
// Part 1: Variables & Conditionals
// -------------------------
function checkDiscount() {
  const amount = Number(document.getElementById("amount").value);
  const result = document.getElementById("discount-result");

  if (amount >= 5000) {
    result.innerText = "✅ You qualify for a 10% discount!";
  } else {
    result.innerText = "❌ No discount. Buy more than 5000 Ksh!";
  }
}

// -------------------------
// Part 2: Functions
// -------------------------
function calculateTotal(quantity, price) {
  return quantity * price;
}

function formatProduct(name) {
  return name.toUpperCase();
}

// -------------------------
// Part 3: Loops
// -------------------------
function listParts() {
  const parts = ["Brake Pads", "CVT Oil", "LED Bulbs", "Car Batteries", "Air Filters"];
  const list = document.getElementById("parts-list");

  // Clear existing list if re-run
  list.innerHTML = "";

  // Using for loop
  for (let i = 0; i < parts.length; i++) {
    const li = document.createElement("li");
    li.innerText = formatProduct(parts[i]);
    list.appendChild(li);
  }

  // While loop example (logs countdown in console)
  let countdown = 5;
  while (countdown > 0) {
    console.log(`Offer ends in ${countdown} days...`);
    countdown--;
  }
}

// -------------------------
// Part 4: DOM Interactions
// -------------------------
function toggleOffer() {
  const offer = document.getElementById("offer");
  offer.style.display = (offer.style.display === "none" || !offer.style.display)
    ? "block"
    : "none";
}

// -------------------------
// Event Listeners (bind buttons to functions)
// -------------------------
document.addEventListener("DOMContentLoaded", () => {
  // Part 1
  document.getElementById("check-discount-btn")
    .addEventListener("click", checkDiscount);

  // Part 2
  document.getElementById("order-btn")
    .addEventListener("click", () => {
      const total = calculateTotal(3, 2500);
      document.getElementById("total-result").innerText =
        `Your total is: Ksh ${total}`;
    });

  // Part 3
  listParts();

  // Part 4
  document.getElementById("toggle-offer")
    .addEventListener("click", toggleOffer);

  // Extra DOM styling
  document.getElementById("shop-info").style.color = "green";
});
