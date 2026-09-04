
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}


if (navLinks) {
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

const menuData = [
    { category: 'appetizers', name: 'Spring Rolls', desc: 'Crispy spring rolls stuffed with vegettables', price: 15.00, img: 'images/ga.png' },
    { category: 'appetizers', name: 'Shawarma', desc: 'Spit-roasted marinated chicken, wrapped in soft bread with garlic sauce and pickles', price: 60.00, img: 'images/sharwama.jpg' },
    { category: 'mains', name: 'Grilled Chicken', desc: 'Tender grilled chicken served with spicy sauce', price: 45.00, img: 'images/grilled chicken.png' },
    { category: 'mains', name: 'Fried Rice', desc: 'Stir-fried rice with mixed vegetables and eggs', price: 35.00, img: 'images/FRIED RICE.jfif' },
    { category: 'mains', name: 'Jollof Rice', desc: 'Classic Ghanaian jollof rice with tomatoes and spices', price: 30.00, img: 'images/jollof rice.jfif'},
    { category: 'desserts', name: 'Fresh Fruit Salad', desc: 'Assorted fresh seasonal fruits', price: 25.00, img: 'images/FRESH FRUIT SALAD.jfif' },
    { category: 'desserts', name: 'kebab', desc: 'Spicy grilled beef kebab', price: 20.00, img: 'images/kebab.png' },
    { category: 'drinks', name: 'Juice Drink', desc: 'Freshly squeezed fruit juice', price: 12.00, img: 'images/fruit juice.jfif' },
    { category: 'drinks', name: 'Bottled Water', desc: 'Naturally special', price: 6.00, img: 'images/bottle water.jfif' }
];

function displayMenu(category = 'all') {
    const container = document.getElementById('menuItems');
    if (!container) return; 

    container.innerHTML = '';
    const filtered = category === 'all' ? menuData : menuData.filter(item => item.category === category);

    if (filtered.length === 0) {
        container.innerHTML = '<p>No items in this category.</p>';
        return;
    }

    filtered.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'menu-item';

        const price = Number(item.price);
        const formattedPrice = isNaN(price) ? 'N/A':'&#x20B5;' + price.toFixed(2);

        itemDiv.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
            <span>${formattedPrice}</span>
        `;
        container.appendChild(itemDiv);
    });
}


const tabs = document.querySelectorAll('.tab-btn');
if (tabs.length > 0) {
    tabs.forEach(btn => {
        btn.addEventListener('click', () => {
            tabs.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.dataset.category;
            displayMenu(category);
        });
    });
    
    displayMenu('all');
}


const reservationForm = document.getElementById('reservationForm');
if (reservationForm) {
    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();

        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const guests = document.getElementById('guests').value;
        const messageEl = document.getElementById('reservationMessage');

        
        if (!name || !email || !phone || !date || !time || !guests) {
            messageEl.textContent = 'Please fill in all required fields.';
            messageEl.style.color = 'red';
            return;
        }

       
        if (!email.includes('@') || !email.includes('.')) {
            messageEl.textContent = 'Please enter a valid email address.';
            messageEl.style.color = 'red';
            return;
        }

        
        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0,0,0,0);
        if (selectedDate < today) {
            messageEl.textContent = 'Please select a future date.';
            messageEl.style.color = 'red';
            return;
        }

        
        messageEl.textContent = 'Reservation request sent!';
        messageEl.style.color = 'green';
        reservationForm.reset();
    });
}


const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const message = document.getElementById('contactMessage').value.trim();
        const statusEl = document.getElementById('contactMessageStatus');

        if (!name || !email || !message) {
            statusEl.textContent = 'All fields are required.';
            statusEl.style.color = 'red';
            return;
        }

        if (!email.includes('@') || !email.includes('.')) {
            statusEl.textContent = 'Please enter a valid email.';
            statusEl.style.color = 'red';
            return;
        }

        statusEl.textContent = 'Message sent!';
        statusEl.style.color = 'green';
        contactForm.reset();
    });
}

