function addProduct(product) {
  if (product.image) {
    product.image = "data:image/png;base64" + product.image;
  }
  if (product.unit_price) {
    product.unit_price = `<del>Rp.${product.unit_price}</del>`;
  }
  const productHTML = `
    <div class="product_storage" id="${product.name}">
      <p class="product_discount">-${product.discount}%</p>
      <img class="product_image" src="${product.image}" />
      <p class="product_name">${product.name}</p>
      <p class="product_price">Rp.${product.price}</p>
      <p class="product_desc">${product.short_desc}</p>
      <p class="product_tag">${product.tag}</p>
      <p class="product_unit_price">${product.unit_price}</p>
      <div>
        <button class="add_to_cart">Add to cart</button>
        <a href=""><span class="material-symbols-outlined">share</span>Share</a>
        <a href=""><span class="material-symbols-outlined">compare_arrows</span>Compare</a>
        <a href=""><span class="material-symbols-outlined">thumb_up</span>Like</a>
      </div>
    </div>
  `;

  const add = document.getElementById("products");
  add.insertAdjacentHTML("beforeend", productHTML);
}

const productss = [];
async function loadProducts() {
  const response = await fetch("https://dummyapi-0uzr.onrender.com/products");
  const products = await response.json();

  const productContainer = document.getElementById("products");

  products.forEach((product) => {
    const productHTML = addProduct(product);
    productContainer.insertAdjacentHTML("beforeend", productHTML);
  });
}

loadProducts();

productss.forEach((product) => {
  addProduct(product);
});
