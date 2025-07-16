// ==================== Error Handling ====================
window.addEventListener('error', function(e) {
  console.error('Global error:', e.error);
  const errorDisplay = document.getElementById('global-error-display');
  if (errorDisplay) {
    errorDisplay.textContent = `Une erreur est survenue: ${e.error.message}`;
    errorDisplay.style.display = 'block';
  }
});

// Create a global error display element if not exists
const errorDiv = document.createElement('div');
errorDiv.id = 'global-error-display';
errorDiv.style.display = 'none';
errorDiv.style.position = 'fixed';
errorDiv.style.bottom = '0';
errorDiv.style.left = '0';
errorDiv.style.right = '0';
errorDiv.style.backgroundColor = 'red';
errorDiv.style.color = 'white';
errorDiv.style.padding = '10px';
errorDiv.style.zIndex = '9999';
document.body.appendChild(errorDiv);
// app.js - Version professionnelle unique

// ==================== Données Produits ====================
const allProducts = [
  { id: 1, name: "Robe d'été fleurie", price: 24.99, image: "https://via.placeholder.com/300x400?text=Robe+Fleurie", category: 'femmes' },
  { id: 2, name: "Jeans slim fit", price: 29.99, image: "https://via.placeholder.com/300x400?text=Jeans+Slim", category: 'hommes' },
  { id: 3, name: "T-shirt graphique", price: 14.99, image: "https://via.placeholder.com/300x400?text=T-shirt", category: 'hommes' },
  { id: 4, name: "Veste en denim", price: 39.99, image: "https://via.placeholder.com/300x400?text=Veste+Denim", category: 'femmes' },
  { id: 5, name: "Chaussures à talons", price: 34.99, image: "https://via.placeholder.com/300x400?text=Chaussures", category: 'femmes' },
  { id: 6, name: "Sac à main", price: 19.99, image: "https://via.placeholder.com/300x400?text=Sac+Main", category: 'femmes' },
  { id: 51, name: "Chapeau d'été", price: 15.99, image: "https://via.placeholder.com/300x400?text=Chapeau+Ete", category: 'femmes' },
  { id: 52, name: "Pantalon cargo homme", price: 42.5, image: "https://via.placeholder.com/300x400?text=Pantalon+Cargo", category: 'hommes' },
  { id: 53, name: "Robe imprimée", price: 39.0, image: "https://via.placeholder.com/300x400?text=Robe+Imprimee", category: 'femmes' },
  { id: 54, name: "Chaussures enfants sport", price: 27.9, image: "https://via.placeholder.com/300x400?text=Chaussures+Enfants", category: 'enfants' },
  { id: 55, name: "Parfum floral femme", price: 49.99, image: "https://via.placeholder.com/300x400?text=Parfum+Floral", category: 'beaute' },
  { id: 56, name: "Gel douche relaxant", price: 12.99, image: "https://via.placeholder.com/300x400?text=Gel+Douche", category: 'beaute' },
  { id: 57, name: "Ceinture homme cuir", price: 22.5, image: "https://via.placeholder.com/300x400?text=Ceinture+Cuir", category: 'hommes' },
  { id: 58, name: "Baskets blanches", price: 54.99, image: "https://via.placeholder.com/300x400?text=Baskets+Blanches", category: 'index' },
  { id: 59, name: "Crème solaire SPF 50", price: 18.75, image: "https://via.placeholder.com/300x400?text=Creme+Solaire", category: 'beaute' },
  { id: 60, name: "Combinaison enfant chic", price: 29.9, image: "https://via.placeholder.com/300x400?text=Combinaison+Enfant", category: 'enfants' }
];

// ==================== Panier ====================
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartDisplay() {
  const cartCount = document.getElementById('cart-count');
  const cartItemsContainer = document.getElementById('cart-items-container');
  const cartTotalPrice = document.getElementById('cart-total-price');

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  if (cartCount) {
    cartCount.textContent = totalItems;
  }

  if (cartItemsContainer && cartTotalPrice) {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;

      const cartItem = document.createElement('div');
      cartItem.className = 'cart-item';
      cartItem.innerHTML = `
        <div class="cart-item-details">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">${item.price.toFixed(2)}€ x ${item.quantity}</div>
        </div>
        <div class="cart-item-quantity">
          <button class="quantity-btn minus" data-id="${item.id}">-</button>
          <span>${item.quantity}</span>
          <button class="quantity-btn plus" data-id="${item.id}">+</button>
        </div>
        <div class="cart-item-total">${itemTotal.toFixed(2)}€</div>
      `;
      cartItemsContainer.appendChild(cartItem);
    });

    cartTotalPrice.textContent = total.toFixed(2);

    document.querySelectorAll('.quantity-btn.plus').forEach(button => {
      button.addEventListener('click', (e) => {
        const productId = parseInt(e.target.dataset.id);
        const item = cart.find(item => item.id === productId);
        if (item) {
          item.quantity++;
          updateCartDisplay();
        }
      });
    });

    document.querySelectorAll('.quantity-btn.minus').forEach(button => {
      button.addEventListener('click', (e) => {
        const productId = parseInt(e.target.dataset.id);
        const itemIndex = cart.findIndex(item => item.id === productId);
        if (itemIndex !== -1) {
          if (cart[itemIndex].quantity > 1) {
            cart[itemIndex].quantity--;
          } else {
            cart.splice(itemIndex, 1);
          }
          updateCartDisplay();
        }
      });
    });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
}

document.addEventListener('DOMContentLoaded', updateCartDisplay);

document.addEventListener('DOMContentLoaded', function() {
  const cartModal = document.getElementById('cart-modal');
  const cartBtn = document.getElementById('cart-btn');
  const closeBtn = document.querySelector('.modal-close');

  if (cartBtn && cartModal && closeBtn) {
    cartBtn.addEventListener('click', () => {
      cartModal.style.display = 'block';
      cartModal.setAttribute('aria-hidden', 'false');
    });

    closeBtn.addEventListener('click', () => {
      cartModal.style.display = 'none';
      cartModal.setAttribute('aria-hidden', 'true');
    });

    window.addEventListener('click', (event) => {
      if (event.target === cartModal) {
        cartModal.style.display = 'none';
        cartModal.setAttribute('aria-hidden', 'true');
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Pour la page d'accueil
  const indexProductsContainer = document.querySelector('.index-products');
  // Pour les autres pages de catégorie
  const categoryProductsContainer = document.querySelector('.products');
  
  const container = indexProductsContainer || categoryProductsContainer;
  if (!container) return;

  const category = window.location.pathname.split('/').pop().replace('.html', '');
  const filteredProducts = category === 'index' ?
    allProducts.slice(0, 6) : // Affiche seulement 6 produits en vedette sur la page d'accueil
    allProducts.filter(product => product.category === category);

  const isIndexPage = !!indexProductsContainer;
  
  filteredProducts.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = isIndexPage ? 'index-product-card' : 'product-card';
    
    productCard.innerHTML = `
      <div class="${isIndexPage ? 'index-product-image' : 'product-image'}">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="${isIndexPage ? 'index-product-info' : 'product-info'}">
        <h3 class="${isIndexPage ? 'index-product-title' : 'product-title'}">${product.name}</h3>
        <span class="${isIndexPage ? 'index-product-price' : 'product-price'}">${product.price.toFixed(2)}€</span>
        <button class="${isIndexPage ? 'index-add-to-cart' : 'add-to-cart'}" data-id="${product.id}">Ajouter au panier</button>
      </div>
    `;
    container.appendChild(productCard);
  });

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
      const productId = parseInt(e.target.dataset.id);
      const product = allProducts.find(p => p.id === productId);
      if (!product) return;

      const existingItem = cart.find(item => item.id === productId);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        cart.push({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1
        });
      }

      updateCartDisplay();
      createConfetti();
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Implémentation portable de SHA-256
  function sha256(ascii) {
    function rightRotate(value, amount) {
      return (value >>> amount) | (value << (32 - amount));
    }
    
    const maxWord = Math.pow(2, 32);
    const words = [];
    const asciiBitLength = ascii.length * 8;
    
    let hash = [];
    let k = [];
    let primeCounter = k.length;
    let isComposite = {};
    for (let candidate = 2; primeCounter < 64; candidate++) {
      if (!isComposite[candidate]) {
        for (let i = 0; i < 313; i += candidate) {
          isComposite[i] = candidate;
        }
        hash[primeCounter] = (Math.pow(candidate, 0.5) * maxWord) | 0;
        k[primeCounter++] = (Math.pow(candidate, 1/3) * maxWord) | 0;
      }
    }
    
    for (let i = 0; i < ascii.length; i++) {
      words[i >> 2] |= ascii.charCodeAt(i) << (24 - (i % 4) * 8);
    }
    words[ascii.length >> 2] |= 0x80 << (24 - (ascii.length % 4) * 8);
    words[((asciiBitLength + 64 >> 9) << 4) + 15] = asciiBitLength;
    
    for (let j = 0; j < words.length; j += 16) {
      const w = words.slice(j, j + 16);
      const a = hash.slice(0, 8);
      
      for (let i = 0; i < 64; i++) {
        if (i < 16) {
          w[i] = w[i] || 0;
        } else {
          const s0 = rightRotate(w[i-15], 7) ^ rightRotate(w[i-15], 18) ^ (w[i-15] >>> 3);
          const s1 = rightRotate(w[i-2], 17) ^ rightRotate(w[i-2], 19) ^ (w[i-2] >>> 10);
          w[i] = w[i-16] + s0 + w[i-7] + s1;
        }
        
        const S1 = rightRotate(a[4], 6) ^ rightRotate(a[4], 11) ^ rightRotate(a[4], 25);
        const ch = (a[4] & a[5]) ^ (~a[4] & a[6]);
        const temp1 = a[7] + S1 + ch + k[i] + w[i];
        const S0 = rightRotate(a[0], 2) ^ rightRotate(a[0], 13) ^ rightRotate(a[0], 22);
        const maj = (a[0] & a[1]) ^ (a[0] & a[2]) ^ (a[1] & a[2]);
        const temp2 = S0 + maj;
        
        a[7] = a[6];
        a[6] = a[5];
        a[5] = a[4];
        a[4] = a[3] + temp1;
        a[3] = a[2];
        a[2] = a[1];
        a[1] = a[0];
        a[0] = temp1 + temp2;
      }
      
      for (let i = 0; i < 8; i++) {
        hash[i] = (hash[i] + a[i]) | 0;
      }
    }
    
    return hash.map(val => val.toString(16).padStart(8, '0')).join('');
  }

  function hashPassword(password) {
    return sha256(password);
  }

  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Migration des mots de passe en clair vers hachés
  if (users.length > 0 && typeof users[0].password === 'string' && users[0].password.length < 64) {
    users.forEach(user => {
      if (user.password && user.password.length < 64) {
        user.password = hashPassword(user.password);
      }
    });
    localStorage.setItem('users', JSON.stringify(users));
  }

  const loginForm = document.getElementById('login-form-element');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;
      const hashedPassword = hashPassword(password);

      const user = users.find(u => u.email === email && u.password === hashedPassword);
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        alert('Connexion réussie!');
        window.location.href = 'index.html';
      } else {
        document.getElementById('login-message').textContent = 'Email ou mot de passe incorrect';
      }
    });
  }

  const signupForm = document.getElementById('signup-form-element');
  if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('signup-email').value;
      const password = document.getElementById('signup-password').value;
      const confirmPassword = document.getElementById('signup-confirm').value;

      if (password !== confirmPassword) {
        document.getElementById('signup-message').textContent = 'Les mots de passe ne correspondent pas';
        return;
      }

      if (users.some(u => u.email === email)) {
        document.getElementById('signup-message').textContent = 'Cet email est déjà utilisé';
        return;
      }

      const hashedPassword = hashPassword(password);
      const newUser = {
        email,
        password: hashedPassword
      };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('currentUser', JSON.stringify(newUser));
      alert('Inscription réussie!');
      window.location.href = 'index.html';
    });
  }

  const clearBtn = document.getElementById('clear-storage-btn');
  if (clearBtn) {
    clearBtn.addEventListener('click', function() {
      localStorage.clear();
      document.getElementById('clear-storage-message').textContent = 'Données effacées avec succès';
      setTimeout(() => {
        document.getElementById('clear-storage-message').textContent = '';
      }, 3000);
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const authLinks = document.querySelector('.auth-links');
  if (!authLinks) return;

  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (currentUser) {
    authLinks.innerHTML = `
            <span>Bonjour, ${currentUser.email}</span>
            <a href="#" id="logout-link">Déconnexion</a>
        `;

    document.getElementById('logout-link').addEventListener('click', function() {
      localStorage.removeItem('currentUser');
      location.reload();
    });
  }
});

// ==================== Commande (Checkout) ====================
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('checkout-form');
  if (!form) return;
  const container = document.getElementById('checkout-items-container');
  const totalBox = document.getElementById('checkout-total-price');

  let total = 0;
  container.innerHTML = '';
  cart.forEach(item => {
    const sum = item.price * item.quantity;
    total += sum;
    const div = document.createElement('div');
    div.className = 'checkout-item';
    div.innerHTML = `<div class="checkout-item-name">${item.name}</div><div class="checkout-item-price">${item.price.toFixed(2)}€ x ${item.quantity} = ${sum.toFixed(2)}€</div>`;
    container.appendChild(div);
  });
  totalBox.textContent = total.toFixed(2);

  form.onsubmit = e => {
    e.preventDefault();
    const order = {
      firstName: form['first-name'].value,
      lastName: form['last-name'].value,
      phone: form['phone'].value,
      address: form['address'].value,
      paymentMethod: form.querySelector('input[name="payment"]:checked').value,
      items: cart,
      total,
      date: new Date().toISOString()
    };
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('lastOrder', JSON.stringify(order));
    localStorage.removeItem('cart');
    alert(`Commande validée ! Commande #${orders.length}`);
    location.href = 'invoice.html';
  }
});

// ==================== Facture ====================
document.addEventListener('DOMContentLoaded', () => {
  const date = document.getElementById('invoice-date');
  if (!date) return;
  const order = JSON.parse(localStorage.getItem('lastOrder'));
  if (!order) return location.href = 'index.html';
  document.getElementById('invoice-date').textContent = new Date(order.date).toLocaleDateString();
  document.getElementById('invoice-number').textContent = `#${(JSON.parse(localStorage.getItem('orders')) || []).indexOf(order) + 1}`;
  document.getElementById('client-name').textContent = `${order.firstName} ${order.lastName}`;
  document.getElementById('client-phone').textContent = order.phone;
  document.getElementById('client-address').textContent = order.address;

  const items = document.getElementById('invoice-items-container');
  let total = 0;
  order.items.forEach(item => {
    const sum = item.price * item.quantity;
    total += sum;
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${item.name}</td><td>${item.price.toFixed(2)}€</td><td>${item.quantity}</td><td>${sum.toFixed(2)}€</td>`;
    items.appendChild(tr);
  });
  document.getElementById('invoice-total-price').textContent = total.toFixed(2);
});

// ==================== Admin ====================
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('orders-container');
  if (!container) return;
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  if (!orders.length) return container.innerHTML = '<p>Aucune commande enregistrée.</p>';

  orders.forEach((o, i) => {
    const div = document.createElement('div');
    div.className = 'order-card';
    div.innerHTML = `
      <h3>Commande #${i + 1}</h3>
      <p><strong>Client:</strong> ${o.firstName} ${o.lastName}</p>
      <p><strong>Téléphone:</strong> ${o.phone}</p>
      <p><strong>Adresse:</strong> ${o.address}</p>
      <p><strong>Total:</strong> ${o.total.toFixed(2)}€</p>
      <p><strong>Date:</strong> ${new Date(o.date).toLocaleString()}</p>
      <div class="order-items">
        <h4>Articles commandés:</h4>
        <ul>${o.items.map(item => `<li class="order-item"><span class="order-item-name">${item.name}</span> <span class="order-item-quantity-price">${item.quantity} x ${item.price.toFixed(2)}€</span></li>`).join('')}</ul>
      </div>
      <button class="view-order-btn" data-index="${i}">Voir la facture</button>
    `;
    container.appendChild(div);
  });

  document.querySelectorAll('.view-order-btn').forEach(btn => {
    btn.onclick = () => {
      const index = +btn.dataset.index;
      const orders = JSON.parse(localStorage.getItem('orders')) || [];
      localStorage.setItem('lastOrder', JSON.stringify(orders[index]));
      location.href = 'invoice.html';
    };
  });
});

// ==================== Confetti Effect ====================
function createConfetti() {
  const confettiCount = 100;
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '0';
  container.style.left = '0';
  container.style.width = '100%';
  container.style.height = '100%';
  container.style.pointerEvents = 'none';
  container.style.zIndex = '1000';
  container.id = 'confetti-container';
  
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.animationDelay = Math.random() * 5 + 's';
    container.appendChild(confetti);
    
    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
  
  document.body.appendChild(container);
  
  setTimeout(() => {
    container.remove();
  }, 5000);
}

// Test function to verify confetti animation
function testConfetti() {
  console.log("Testing confetti animation...");
  createConfetti();
  setTimeout(() => {
    console.log("Confetti test complete!");
  }, 5000);
}

// Run tests when in development mode
if (window.location.href.includes('localhost')) {
  testConfetti();
}
