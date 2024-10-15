// document.body.style.backgroundImage = 'url("https://4kwallpapers.com/images/walls/thumbs_3t/18778.jpeg")';
// document.body.style.backgroundSize = 'cover';
// document.body.style.backgroundRepeat = 'no-repeat';
// document.body.style.backgroundPosition = 'center';
document.body.style.backgroundColor = "black"
let allProducts = document.querySelector('.products');

fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => {
        data.forEach(product => {
            let div = document.createElement('div');
            div.className = "bg-white bg-opacity-30 rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105"; // Keep hover effects

            let image = document.createElement('img');
            image.className = "w-full h-48 object-cover rounded-lg"; // Adjust height as needed
            image.src = product.image;

            let title = document.createElement('p');
            title.className = "mt-2 text-center text-sm"; // Center title
            title.innerText = product.title;

            let description = document.createElement('p');
            description.className = "mt-1 text-center text-xs"; // Center description
            description.innerText = product.description.length > 50 ? product.description.slice(0, 50) + '...' : product.description;

            div.appendChild(image);
            div.appendChild(title);
            div.appendChild(description);
            allProducts.appendChild(div);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
