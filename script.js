console.log('Fetching data…');
fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => {
        renderUI(data);
    })
    .catch(err => {
        console.log("Error fetching data", err);
    });
function renderUI(data) {
    const products = data.products;
    const firstProduct = products[0];
    const parent = document.getElementById('root');
    const card = document.createElement('div');
    card.classList.add('card');
    const title = document.createElement('h4');
    title.innerText = firstProduct.title;
    card.appendChild(title);
    const image = document.createElement('img');
    image.src = firstProduct.thumbnail;
    image.alt = firstProduct.title;
    card.appendChild(image);
    const price = document.createElement('p');
    price.innerText = `Cost: Rs ${firstProduct.price}`;
    card.appendChild(price);
    const rating = document.createElement('p');
    rating.innerText = `Ratings: ${firstProduct.rating}`;
    card.appendChild(rating);
    const review = document.createElement('p');
    review.innerText = firstProduct.description;
    card.appendChild(review);

    parent.appendChild(card);
}
