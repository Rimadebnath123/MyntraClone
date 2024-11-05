//category container
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('category-container');

    if (!container) {
        console.error('Container element not found');
        return;
    }

    category.forEach(item => {
        const img = document.createElement('img');
        img.className = 'itemImg1';
        img.src = item.image;
        img.alt = ''; // Optional: Add an alt text for accessibility
        container.appendChild(img);
    });
});

// dealCarousel.js
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

let bagItems = [];
onLoad();

function addToBag(itemId) {
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
}

function onLoad() {
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayBagIcon();
}

function displayBagIcon() {
    const bagIcon = document.getElementById('bag-icon');
    if (bagIcon) {
        if (bagItems.length > 0) {
            bagIcon.style.display = 'block';
            bagIcon.innerText = bagItems.length;
            console.log("Bag icon shown with count:", bagItems.length); // Debugging
        } else {
            bagIcon.style.display = 'none';
            bagIcon.innerText = '';
            console.log("Bag icon hidden"); // Debugging
        }
    } else {
        console.error("Bag icon element not found");
    }
}

// document.addEventListener('DOMContentLoaded', () => {
//     onLoad();
// });


// Assuming this runs on load
window.onload = function () {
    displayBagIcon();
};


