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
    const container = document.querySelector('.hotels-grid');
    
    hotels.forEach(hotel => {
      const card = document.createElement('div');
      card.className = 'hotel-card';
      
      const cleanPhone = hotel.phone.replace(/[^\d+]/g, '');
      
      card.innerHTML = `
        <img src="${hotel.image}" alt="${hotel.name}">
        <div class="hotel-info">
          <h2>${hotel.name}</h2>
          <address>${hotel.address}</address>
          <a href="tel:${cleanPhone}" class="call-btn"> ${hotel.phone}</a>
        </div>
      `;
      
      container.appendChild(card);
    });
  }

// Load hotels when DOM is ready
document.addEventListener('DOMContentLoaded', loadHotels);
