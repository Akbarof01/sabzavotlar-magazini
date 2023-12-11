document.addEventListener("DOMContentLoaded", function() {
  let totalMoney = 500;

  // Function to update the displayed money and its color based on the total money value
  function updateMoneyDisplay() {
    const moneyDisplay = document.getElementById('total-money');
  
    // Update the displayed money value
    moneyDisplay.textContent = totalMoney;
  
    // Check if the totalMoney is less than the initially set amount (500 in this case)
    if (totalMoney < 500) {
      moneyDisplay.style.color = 'red'; // Set the color to red if the totalMoney is less than 500
    } else {
      moneyDisplay.style.color = 'black'; // Otherwise, keep the color black (or any other desired color)
    }
  }
  
  // Initial call to display the money when the page loads
  updateMoneyDisplay();
  
  const vegetables = [
    { name: "sabzi 1-kg", price: 10.5, image: "carrots.png" },
    { name: "pomidor 1-kg", price: 20, image: "tomatoes.jpg" },
    { name: "gul karam 1-kg", price: 12.8, image: "broccoli.jpg" },
    { name: "Ismaloq 1-kg", price: 16.2, image: "spinach.jpg" },
    { name: "Balgarskiy 1-kg", price: 27.5, image: "Red_bell_pepper.jpg" }
  ];

  const vegetablesContainer = document.getElementById("vegetables");
  const totalMoneyDisplay = document.getElementById("total-money");
  const totalPriceDisplay = document.getElementById("total-price");

  function updateMoney(amount) {
    totalMoney -= amount;
    totalMoneyDisplay.textContent = totalMoney.toFixed(2);
  }

  vegetables.forEach(function(vegetable) {
    const div = document.createElement("div");
    div.classList.add("vegetable-item");

    const img = document.createElement("img");
    img.src = vegetable.image;
    img.alt = vegetable.name;
    img.width = 150;
    img.height = 100;
    div.appendChild(img);

    const name = document.createElement("p");
    name.textContent = vegetable.name;
    div.appendChild(name);

    const price = document.createElement("p");
    price.textContent = `$${vegetable.price}`;
    div.appendChild(price);

    const addButton = document.createElement("button");
    addButton.textContent = "savatga";
    addButton.onclick = function() {
      addToCart(vegetable);
    };
    

    addButton.style.width = "100px";
    addButton.style.height = "45px";
    addButton.style.borderRadius = "50px";
    addButton.style.color = "#fff";
    addButton.style.backgroundColor = "#68da66";
    addButton.style.border = "none";
    

    addButton.addEventListener("mouseenter", function() {
      addButton.style.backgroundColor = "#73e671";
    });
    
    addButton.addEventListener("mouseleave", function() {
      addButton.style.backgroundColor = "#68da66";
    });
    
    
    
    div.appendChild(addButton);

    vegetablesContainer.appendChild(div);
  });

  function addToCart(vegetable) {
    const li = document.createElement("li");
    li.textContent = `${vegetable.name} - $${vegetable.price}`;
    document.getElementById("cart-items").appendChild(li);

    const currentPrice = parseFloat(document.getElementById("total-price").textContent);
    const newTotalPrice = currentPrice + vegetable.price;
    totalPriceDisplay.textContent = newTotalPrice.toFixed(2);

    updateMoney(vegetable.price);
  }

  window.checkout = function() {
    const cartItems = document.getElementById("cart-items").getElementsByTagName("li");
    let purchasedItems = "Sotib olingan narsalar:\n";
  
    for (let item of cartItems) {
      purchasedItems += item.textContent + "\n";
    }
  
    const totalPrice = document.getElementById("total-price").textContent;
    const message = `${purchasedItems}hammasi bolib: $${totalPrice}`;
  
    alert(message);

  };
});




