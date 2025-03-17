const ramens = [
    {
        name: "Tonkotsu Ramen",
        restaurant: "Ramen House",
        rating: 3.5,
        image: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?auto=format&fit=crop&w=800",
        comment: "Rich and creamy broth"
    },
    {
        name: "Miso Ramen",
        restaurant: "Noodle Bar",
        rating: 5,
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800",
        comment: "Perfect balance of flavors"
    },
    {
        name:"Tan Tan Ramen",
        restaurant: "Lee Kang In Restaurant",
        rating: 4,
        image:"https://thewoksoflife.com/wp-content/uploads/2021/01/tan-tan-ramen-16-1088x1536.jpg",
        comment:'Amazing',
    }
];

function displayRamens() {
    const ramenMenu = document.querySelector('#ramen-menu');
    ramenMenu.innerHTML = '';
    
    ramens.forEach((ramen, index) => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        img.dataset.index = index;
        img.addEventListener('click', handleClick);
        ramenMenu.appendChild(img);
    });
}

function handleClick(event) {
    const index = event.target.dataset.index;
    const ramen = ramens[index];
    const detailDiv = document.querySelector('#ramen-detail');
    
    detailDiv.innerHTML = `
        <h1>${ramen.name}</h1>
        <p>Restaurant: ${ramen.restaurant}</p>
        <p>Rating: ${'⭐'.repeat(ramen.rating)}</p>
        ${ramen.comment ? `<p>Comment: ${ramen.comment}</p>` : ''}
    `;
}

function addSubmitListener() {
    const form = document.querySelector('#new-ramen-form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const newRamen = {
            name: form.name.value,
            restaurant: form.restaurant.value,
            rating: parseInt(form.rating.value),
            image: form.image.value,
            comment: form.comment.value
        };
        
        ramens.push(newRamen);
        displayRamens();
        form.reset();
    });
}

function main() {
    displayRamens();
    addSubmitListener();
}


document.addEventListener('DOMContentLoaded', main);