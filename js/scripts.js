const hb = document.querySelector('#hamburgerBtn');
const pw = document.querySelector('#pageWrapper');

hb.addEventListener('click', () => {
    pw.classList.toggle('moveOver');
});

// Hotel data display functionality
async function loadHotels() {
    try {
        const response = await fetch('../data/hotels.json'); // Adjust path as needed
        const hotels = await response.json();
        displayHotels(hotels);
    } catch (error) {
        console.error("Error loading hotels:", error);
    }
}

function displayHotels(hotels) {
    const main = document.querySelector('main');
    
    // Create a container for hotels
    const hotelsContainer = document.createElement('div');
    hotelsContainer.className = 'hotels-grid';
    
    hotels.forEach(hotel => {
        const hotelCard = document.createElement('div');
        hotelCard.className = 'hotel-card';
        
        hotelCard.innerHTML = `
            <img src="${hotel.image}" alt="${hotel.name}" loading="lazy">
            <div class="hotel-info">
                <h2>${hotel.name}</h2>
                <p class="phone">${hotel.phone}</p>
                <address>${hotel.address.join('<br>')}</address>
            </div>
        `;
        
        hotelsContainer.appendChild(hotelCard);
    });
    
    main.appendChild(hotelsContainer);
}

// Load hotels when DOM is ready
document.addEventListener('DOMContentLoaded', loadHotels);
