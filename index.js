let [, ,method, endpoint, ...args] = process.argv;

method = method.toUpperCase();
endpoint = endpoint.toLowerCase();

// npm run start GET products
if (method == "GET" && endpoint == "products") {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  console.log(data);
}


//npm run start GET products/3
if (method == "GET" && endpoint.startsWith("products/")) {
  let id = endpoint.split("/")[1];
  id = parseInt(id);

  if (isNaN(id) || id <= 0) {
    console.log("No es un numero");
  }

  fetch("https://fakestoreapi.com/products/" + id)
    .then((response) => response.json())
    .then((data) => console.log(data));
}


//npm run start POST products t-shirt-rex 300 remeras
if (method == "POST" && endpoint == "products") {

  const [title, price, category] = args;

  const product = { title, price, category };

  fetch("https://fakestoreapi.com/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  })
    .then((response) => response.json())
    .then((data) => console.log("The product was published: ",data));
}


//npm run start DELETE products/7
if (method == "DELETE" && endpoint.startsWith("products/")) {
  const id = parseInt(endpoint.split("/")[1]);

  fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => console.log("the product was removed: ",data));
}
