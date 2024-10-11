document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('category-container');

    if (!container) {
        console.error('Container element not found');
        return;
    }

    category.forEach(item => {
        const img = document.createElement('img');
        img.className = 'itemImg';
        img.src = item.image;
        img.alt = ''; // Optional: Add an alt text for accessibility
        container.appendChild(img);
    });
});

// carousel.js
document.addEventListener('DOMContentLoaded', () => {
    const carouselInner = document.getElementById('carousel-inner');

    if (!carouselInner) {
        console.error('Carousel inner element not found');
        return;
    }

    const createCarouselItems = (images) => {
        const itemsPerSlide = 6;
        const slideCount = Math.ceil(images.length / itemsPerSlide);

        for (let i = 0; i < slideCount; i++) {
            const slide = document.createElement('div');
            slide.className = 'carousel-item';

            if (i === 0) {
                slide.classList.add('active'); // Set the first slide as active
            }

            const row = document.createElement('div');
            row.className = 'row';

            for (let j = i * itemsPerSlide; j < (i + 1) * itemsPerSlide && j < images.length; j++) {
                const col = document.createElement('div');
                col.className = 'col-2';

                const img = document.createElement('img');
                img.className = 'itemImg';
                img.src = images[j].image;
                img.alt = ''; // Optional: Add an alt text for accessibility

                col.appendChild(img);
                row.appendChild(col);
            }

            slide.appendChild(row);
            carouselInner.appendChild(slide);
        }
    };

    // Ensure the data file is loaded before this script runs
    createCarouselItems(dealday);
});

//

let bagItems;
onLoad();

function onLoad() {
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayItemsOnHomePage();
    displayBagIcon();
}

function addToBag(itemId) {
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
}

function displayBagIcon() {
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if (bagItems.length > 0) {
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerText = bagItems.length;
    } else {
        bagItemCountElement.style.visibility = 'hidden';
    }
}

function displayItemsOnHomePage() {
    let itemsContainerElement = document.querySelector('.items-container');
    if (!itemsContainerElement) {
        return;
    }
    let innerHtml = '';
    items.forEach(item => {
        innerHtml += `
    <div class="item-container">
    
      <img class="item-image" src="${item.image}" alt="item image">
      <div class="rating">
          ${item.rating.stars} ⭐ | ${item.rating.count}
      </div>
      <div class="company-name">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price">
          <span class="current-price">Rs ${item.current_price}</span>
          <span class="original-price">Rs ${item.original_price}</span>
          <span class="discount">(${item.discount}% OFF)</span>
      </div>
      <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
        
    </div>`
    });
    itemsContainerElement.innerHTML = innerHtml;
}


