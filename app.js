fetch('products.json')
  .then(response => response.json())
  .then(products => {
    products.forEach(product => {
      let productElement = document.createElement('div');
      productElement.classList.add('product');

      let imageElement = document.createElement('img');
      imageElement.src = product.image;
      imageElement.alt = product.name;
      productElement.appendChild(imageElement);

      let nameElement = document.createElement('p');
      nameElement.textContent = product.name;
      productElement.appendChild(nameElement);

      let priceElement = document.createElement('p');
      priceElement.textContent = `Price: $${product.price}`;
      productElement.appendChild(priceElement);

      let buttonElement = document.createElement('button');
      buttonElement.textContent = 'Add to Cart';
      buttonElement.addEventListener('click', () => addToCart(product));
      productElement.appendChild(buttonElement);

      document.getElementById('product-container').appendChild(productElement);
    });
  })
  .catch(error => console.error('Error fetching products:', error));
