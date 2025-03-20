const ramens = [
    {
        id: 1,
        name: "Shoyu",
        restaurant: "Ichiran",
        rating: 5,
        image: src="img/shoyu.jpg",
        comment: "Delicious"
    },
    {
        id:2,
        name: "Miso Ramen",
        restaurant: "Menya",
        rating: 4,
        image: src="img/miso.jpg",
        comment: "Very flavorful!"
    },
    {
        id: 3,
        name:"Tan Tan Ramen",
        restaurant: "Lee Kang In Restaurant",
        rating: 4,
        image:src="img/tonkotsu.jpg",
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
        img.addEventListener('mouseenter', handleHover);
        img.addEventListener('mouseleave', clearDetail);
        ramenMenu.appendChild(img);
    });
  }
  
  function handleHover(event) {
      const index = event.target.dataset.index;
      const ramen = ramens[index];
      showDetail(ramen);
  }
  
  function clearDetail() {
      const detailDiv = document.querySelector('#ramen-detail');
      detailDiv.innerHTML = '';
  }
  
  function showDetail(ramen) {
      const detailDiv = document.querySelector('#ramen-detail');
      detailDiv.innerHTML = `
          <h1>${ramen.name}</h1>
          <p>Restaurant: ${ramen.restaurant}</p>
          <p>Rating: ${'⭐'.repeat(ramen.rating)}</p>
          ${ramen.comment ? `<p>Comment: ${ramen.comment}</p>` : ''}
      `;
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
  
  
  