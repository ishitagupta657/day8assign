console.log('Fetching data…');
fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => {
        renderUI(data.products);
        const search = document.getElementById('search');
        const debouncedsearch = debounce(() => {
            const searchtext = search.value.toLowerCase();
            const filtered = data.products.filter(product =>
                product.title.toLowerCase().includes(searchtext)
            );
            renderUI(filtered); 
        }, 300);

        search.addEventListener('input', debouncedsearch);
    });

function debounce(func, delay) {
    let debouncetimer;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(debouncetimer);
        debouncetimer = setTimeout(() => func.apply(context, args), delay);
    };
}

function renderUI(products) {
    const parent = document.getElementById('root');
    parent.innerHTML = ''; 
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const card = document.createElement('div');
        card.classList.add('card');
        const title = document.createElement('h4');
        title.innerText = product.title;
        card.appendChild(title);
        const image = document.createElement('img');
        image.src = product.thumbnail;
        image.alt = product.title;
        card.appendChild(image);
        const price = document.createElement('p');
        price.innerText = `Cost: Rs ${product.price}`;
        card.appendChild(price);
        const rating = document.createElement('p');
        rating.innerText = `Ratings: ${product.rating}`;
        card.appendChild(rating);
        const review = document.createElement('p');
        review.innerText = product.description;
        card.appendChild(review);

        parent.appendChild(card);
    }
}
