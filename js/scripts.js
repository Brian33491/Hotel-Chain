// Hamburger menu functionality
const hb = document.querySelector('#hamburgerBtn');
const pw = document.querySelector('#pageWrapper');

hb.addEventListener('click', () => {
    pw.classList.toggle('moveOver');
});

// Hotel data display functionality
async function loadHotels() {
    try {
        // Use the correct path for GitHub Pages
        const response = await fetch('/data/hotels.json');
        
        // Verify we got JSON and not an HTML error page
        const responseText = await response.text();
        if (responseText.startsWith('<!DOCTYPE')) {
            throw new Error('Server returned HTML instead of JSON');
        }
        
        const hotels = JSON.parse(responseText);
        displayHotels(hotels);
        
    } catch (error) {
        console.error("Error loading hotels:", error);
        // Show error message to users
        const container = document.querySelector('.hotels-grid');
        container.innerHTML = '<p class="error">Could not load hotel data. Please try again later.</p>';
    }
}

function displayHotels(hotels) {
    const container = document.querySelector('.hotels-grid');
    container.innerHTML = ''; // Clear any existing content
    
    hotels.forEach(hotel => {
        const card = document.createElement('div');
        card.className = 'hotel-card';
        
        const cleanPhone = hotel.phone.replace(/[^\d+]/g, '');
        
        card.innerHTML = `
            <img src="${hotel.image}" alt="${hotel.name}">
            <div class="hotel-info">
                <h2>${hotel.name}</h2>
                <address>${hotel.address}</address>
                <a href="tel:${cleanPhone}" class="call-btn">${hotel.phone}</a>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Load hotels when the page is ready
document.addEventListener('DOMContentLoaded', loadHotels);
