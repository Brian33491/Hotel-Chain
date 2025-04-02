// Hamburger menu functionality
const hb = document.querySelector('#hamburgerBtn');
const pw = document.querySelector('#pageWrapper');

hb.addEventListener('click', () => {
    pw.classList.toggle('moveOver');
});

import { hotelplaces } from '../data/hotels.js';
const cards = document.querySelector('#hotels-grid');

hotelplaces.forEach(hotel => {
    // Create a <section> instead of a div (to match your CSS)
    const hotelSection = document.createElement("section");
    
    // Create and add the image (will use grid-area: name)
    const theImage = document.createElement("img");
    theImage.src = hotel.image;
    theImage.alt = hotel.name;
    
    // Create and add the name (will also use grid-area: name)
    const theName = document.createElement("h2");
    theName.textContent = hotel.name;

    // Create and add the address
    const theAddress = document.createElement("h3");
    theAddress.textContent = hotel.address;

    // Create and add the phone
    const thePhone = document.createElement("p");
    thePhone.textContent = hotel.phone;

    // Append all elements to the section
    hotelSection.appendChild(theImage);
    hotelSection.appendChild(theName);
    hotelSection.appendChild(theAddress);
    hotelSection.appendChild(thePhone);
    
    // Append the section to the grid
    cards.appendChild(hotelSection);
});
