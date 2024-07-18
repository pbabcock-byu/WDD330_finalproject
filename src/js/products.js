// Function to create and display product cards
function displayProducts(products) {
    const productContainer = document.getElementById("product-container");
  
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
  
      const productImage = document.createElement("img");
      productImage.src = product.images;
      productImage.alt = product.productname;
      productCard.appendChild(productImage);
  
      const productInfo = document.createElement("div");
      productInfo.classList.add("product-info");
  
      const productName = document.createElement("h3");
      productName.textContent = product.productname;
      productInfo.appendChild(productName);
  
      const productDescription = document.createElement("p");
      productDescription.classList.add("product-description");
      productDescription.textContent = product.description;
      productInfo.appendChild(productDescription);
  
      const productPrice = document.createElement("span");
      productPrice.classList.add("product-price");
      productPrice.textContent = `$${product.price.toFixed(2)}`;
      productInfo.appendChild(productPrice);
  
      const productRating = document.createElement("span");
      productRating.classList.add("product-rating");
      productRating.textContent = `Rating: ${product.rating}`;
      productInfo.appendChild(productRating);
  
      productCard.appendChild(productInfo);
  
      productContainer.appendChild(productCard);
    });
  }
  
  // Fetch product data from JSON file (replace with actual fetch logic)
  const productDataPromise = fetch("../json/pm_items_forsales.json");
  
  productDataPromise
    .then((response) => response.json())
    .then((products) => displayProducts(products))
    .catch((error) => console.error("Error fetching product data:", error));
  