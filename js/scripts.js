// Hamburger menu functionality
const hb = document.querySelector('#hamburgerBtn');
const pw = document.querySelector('#pageWrapper');

hb.addEventListener('click', () => {
    pw.classList.toggle('moveOver');
});

import { hotelplaces } from '../data/hotels.js';
console.log(hotelplaces);
const cards = document.querySelector('#hotels-grid'); // Added # for ID selector

hotelplaces.forEach(hotel => {
    // Create a container for each hotel card
    const card = document.createElement("div");
    card.className = "hotel-card"; // Add a class for styling
    
    // Create and add the image
    const theImage = document.createElement("img");
    theImage.src = hotel.image; // Changed from hotel.photo to hotel.image
    theImage.alt = hotel.name;
    
    // Create and add the name
    const theName = document.createElement("h2");
    theName.textContent = hotel.name;

    // Create and add the address
    const theAddress = document.createElement("h3");
    theAddress.textContent = hotel.address;

    // Create and add the phone
    const thePhone = document.createElement("p");
    thePhone.textContent = hotel.phone;

    // Append all elements to the card
    card.appendChild(theImage);
    card.appendChild(theName);
    card.appendChild(theAddress);
    card.appendChild(thePhone);
    
    // Append the card to the grid
    cards.appendChild(card);
});
