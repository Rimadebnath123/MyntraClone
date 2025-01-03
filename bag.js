
let bagItemObjects;
onLoad();

function onLoad() {
  loadBagItemObjects();
  displayBagItems();
  displayBagSummary()

}


function displayBagSummary() {
  let bagSummaryElement = document.querySelector(".bag-summary")

  let totalItem = 0
  let totalMRP = 0
  let totalDiscount = 0


  bagItemObjects.forEach(bagItem => {
    // totalMRP += parseFloat(bagItem.original_price);
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
    totalItem++;
  })

  let totalamount = totalMRP - totalDiscount + 99

  bagSummaryElement.innerHTML = `
    <div class="bag-details-container">
    <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
    <div class="price-item">
      <span class="price-item-tag">Total MRP</span>
      <span class="price-item-value">₹${totalMRP}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Discount on MRP</span>
      <span class="price-item-value priceDetail-base-discount">-₹${totalDiscount}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Convenience Fee</span>
      <span class="price-item-value">₹99</span>
    </div>
    <hr>
    <div class="price-footer">
      <span class="price-item-tag">Total Amount</span>
      <span class="price-item-value">₹${totalamount}</span>
    </div>
  </div>
  <button class="btn-place-order">
    <div class="css-xjhrni">PLACE ORDER</div>
  </button>
  `;
}




function loadBagItemObjects() {
  console.log("Bag items:", bagItems);

  bagItemObjects = bagItems.map(itemId => {
    console.log("Checking item ID:", itemId);
    // Ensure that both `itemId` and `item.id` are treated as numbers
    const foundItem = items.find(item => item.id === itemId);
    console.log("Found item:", foundItem);
    return foundItem || null; // Return the found item or null if not found
  }).filter(item => item !== null); // Remove any null values from the result

  console.log("Bag item objects:", bagItemObjects);
}


function displayBagItems() {
  let containerElement = document.querySelector('.bag-items-container');
  let innerHTML = '';
  bagItemObjects.forEach(bagItem => {
    innerHTML += generateItemHTML(bagItem);
  });
  containerElement.innerHTML = innerHTML;
}


function removeFromBag(itemId) {
  bagItems = bagItems.filter(bagItemId => bagItemId !== itemId); // Use strict equality for comparison
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  loadBagItemObjects();
  displayBagIcon();
  displayBagItems();
  displayBagSummary();
}


function generateItemHTML(item) {
  if (!item.image) {
    console.error("Image not found for item:", item);
    return ''; // Skip this item if image is missing
  }

  // Calculate the discount percentage if not provided
  const discount = item.discount || Math.round(((item.original_price - item.current_price) / item.original_price) * 100);
  console.log(discount)

  return `<div class="bag-item-container">
        <div class="item-left-part">
         <img class="bag-item-img" src="${item.image}">
        </div>
        <div class="item-right-part">
          <div class="company">${item.company}</div>
          <div class="item-name">${item.item_name}</div>
          <div class="price-container">
            <span class="current-price">Rs ${item.current_price}</span>
            <span class="original-price">Rs ${item.original_price}</span>
            <span class="discount-percentage">(${discount}% OFF)</span>
          </div>
          <div class="return-period">
            <span class="return-period-days">${item.return_period} days</span> return available
          </div>
          <div class="delivery-details">
            Delivery by
            <span class="delivery-details-days">${item.delivery_date}</span>
          </div>
        </div>

        <div class="remove-from-cart" onclick="removeFromBag(${item.id})">X</div>
      </div>`;
}
