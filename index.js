async function createProducts(product) {
  try {
    const response = await fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("ok");
  }
}


const newProduct = {
  title: 'New Product',
  price: 29.99,
  description: 'A great product',
  category: 'electronics'
};

createProducts(newProduct);