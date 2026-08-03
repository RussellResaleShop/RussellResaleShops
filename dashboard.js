/*
  EDIT YOUR DASHBOARD DATA HERE LATER.
  Change these values whenever you want to show products, orders or sales.
*/
const dashboardData = {
  revenue: 0,
  orders: 0,
  itemsSold: 0,
  products: [],
  recentOrders: [],
  countrySales: [],
  weeklyRevenue: [0, 0, 0, 0],
  dailyRevenue: [0, 0, 0, 0, 0, 0, 0]
};

/*
  OPTIONAL SELLER-SPECIFIC DASHBOARD DATA
  Add a token here to give that seller their own starting dashboard values.
  The token must exactly match one in access-control.js.
*/
const dashboardDataByToken = {
  'RUSSELL-SELLER-001': {
    profileName: 'Donna Raye',
    revenue: 165.00,
    orders: 3,
    itemsSold: 0,
    products: ['Automatic Cat Litter Box(1l)'],
    recentOrders: [],
    countrySales: [],
    weeklyRevenue: [0, 0, 0, 0],
    dailyRevenue: [0, 0, 0, 0, 0, 0, 0]
  },
  'RUSSELL-SELLER-002': {
    revenue: 0,
    orders: 0,
    itemsSold: 0,
    products: [],
    recentOrders: [],
    countrySales: [],
    weeklyRevenue: [0, 0, 0, 0],
    dailyRevenue: [0, 0, 0, 0, 0, 0, 0]
  },
  'RUSSELL-SELLER-003': {
    revenue: 0,
    orders: 0,
    itemsSold: 0,
    products: [],
    recentOrders: [],
    countrySales: [],
    weeklyRevenue: [0, 0, 0, 0],
    dailyRevenue: [0, 0, 0, 0, 0, 0, 0]
  },
  'RUSSELL-SELLER-004': {
    revenue: 0,
    orders: 0,
    itemsSold: 0,
    products: [],
    recentOrders: [],
    countrySales: [],
    weeklyRevenue: [0, 0, 0, 0],
    dailyRevenue: [0, 0, 0, 0, 0, 0, 0]
  },
  'RUSSELL-SELLER-005': {
    revenue: 0,
    orders: 0,
    itemsSold: 0,
    products: [],
    recentOrders: [],
    countrySales: [],
    weeklyRevenue: [0, 0, 0, 0],
    dailyRevenue: [0, 0, 0, 0, 0, 0, 0]
  }
};

const productNames = [
  "Noise-Cancelling Headphones",
  "Rayban Smartglasses",
  "Multiple Charger Port",
  "JBL headphones",
  "Digital Rice Cooker",
  "Pressure Cooker",
  "Handheld Air Blower",
  "Electric Multi-Cooker",
  "Hydrating Skin Care Set",
  "Luxury Eau de Parfum",
  "Gold-Plated Pendant Necklace",
  "Classic Stainless Steel Watch",
  "Cat Water Fountain",
  "Enclosed Cat Litter Box",
  "Premium Leather Handbag",
  "Everyday Running Sneakers",
  "Minimal Table Lamp",
  "Automatic Cat Water Fountain",
  "Quiet Flow Cat Fountain",
  "Stainless Steel Cat Water Fountain",
  "Compact Cat Water Fountain",
  "Covered Cat Litter Box",
  "Large Enclosed Cat Litter Box",
  "Modern Cat Litter Box",
  "Easy-Clean Cat Litter Box",
  "Premium Covered Cat Litter Box",
  "Home Strength Training Set",
  "Educational Building Blocks",
  "Premium Coffee Collection",
  "Bestseller Novel Bundle",
  "Fantasy Adventure E-Book",
  "Car Phone Mount Pro",
  "Ceramic Car Air Freshener",
  "PlayStation 5 Console",
  "Wireless Gaming Headset",
  "Ergonomic Office Desk",
  "Premium Stationery Set",
  "Deluxe Pet Bed",
  "Interactive Pet Toy Set",
  "Multivitamin Daily Supplement",
  "Premium Yoga Mat",
  "Everyday Canvas Tote Bag",
  "XL Beach Towel",
  "High Support Sports Bra",
  "Body Retinol",
  "Hammock with Stand",
  "Interactive Dog Toy",
  "Travel Organizer Tote",
  "Striped XL Beach Towel",
  "Quick-Dry Beach Towel",
  "Cabana Beach Towel",
  "Oversized Pool Towel",
  "Tropical Print Beach Towel",
  "Sand-Free Beach Towel",
  "Family Size Beach Towel",
  "Body Retinol Renewal Lotion",
  "Body Retinol Firming Cream",
  "Body Retinol Night Serum",
  "Body Retinol Smoothing Treatment",
  "Body Retinol Moisture Cream",
  "Award-Winning Body Retinol",
  "Body Retinol Overall Pick",
  "High Support Racerback Bra",
  "High Support Training Bra",
  "High Impact Sports Bra",
  "Seamless Support Bra",
  "Adjustable High Support Bra",
  "Breathable Support Bra",
  "Performance Sports Bra",
  "Classic Canvas Tote",
  "Printed Everyday Tote",
  "Large Shopper Tote",
  "Reusable Market Tote",
  "Structured Canvas Tote",
  "Minimalist Carryall Tote",
  "Oversized Utility Tote",
  "Classic Hammock with Stand",
  "Portable Hammock Stand Set",
  "Quilted Hammock with Frame",
  "Outdoor Hammock Stand",
  "Double Hammock with Stand",
  "Curved Steel Hammock Stand",
  "Garden Hammock Set",
  "Padded Hammock Lounger",
  "Adjustable Hammock Stand",
  "Lymphatic Support Drops",
  "Daily Lymphatic Drops",
  "Herbal Lymphatic Drops",
  "Lymphatic Wellness Formula",
  "Liquid Lymphatic Support",
  "Lymphatic Balance Drops",
  "Overall Best Lymphatic Drops",
  "Durable Chew Dog Toy",
  "Interactive Dog Toy",
  "Plush Squeaky Dog Toy",
  "Tough Tug Dog Toy",
  "Treat Puzzle Dog Toy",
  "Rubber Fetch Dog Toy",
  "Rope Ball Dog Toy",
  "Best Seller Dog Toy",
  "Overall Best Dog Toy",
  "Gaming Controller",
  "Wireless Gaming Headset",
  "RGB Gaming Mouse",
  "Mechanical Gaming Keyboard",
  "Gaming Desk Mat",
  "Console Gaming Bundle",
  "Gaming Monitor",
  "Gaming Chair",
  "Gaming Microphone",
  "Gaming Speaker Set",
  "Gaming Accessory Kit",
  "Gaming Starter Set",
  "Red Heart Crystal Pendant Necklace",
  "To My Wife Heart Necklace Gift Set",
  "To My Wife Heart Necklace",
  "Round Cubic Zirconia Stud Earrings",
  "69-Piece Gold-Tone Jewelry Set",
  "Gold Flower Hoop Earrings",
  "Gold-Tone Bracelet Set",
  "Reusable Push-up Bra",
  "66-Piece Gold-Tone Jewelry Set",
  "Oscillating Tower Fan",
  "Smart RGB Floor Lamp",
  "Artificial Olive Tree",
  "Portable HEPA Air Purifier",
  "Premium Silicone Push-Up Bra",
  "Desktop Air Purifier",
  "Plug-In LED Night Light",
  "Vintage Floral Area Rug",
  "Ultra Hold Adhesive Bra",
  "MaxCalm Magnesium Drink Mix",
  "Adjustable LED Floor Lamp",
  "Heated Neck and Shoulder Massager",
  "Goli Ashwagandha Gummies",
  "BeNatu Essential Oil Roller Set",
  "Wellness Absorbent Underwear",
  "LES Labs Cortisol Health Capsules",
  "Ancient Minerals Magnesium Bath Flakes",
  "Invisble Silicone Adhesive Bra",
  "Frozen Drink Slushie Machine",
  "Precision Toenail Cutter",
  "Compact Slushie Maker",
  "Family Frozen Drink Machine",
  "Countertop Ice Slush Maker",
  "Home Party Slushie Blender",
  "Quick Freeze Slush Drink Maker",
  "Frozen Beverage Station",
  "Mini Slush Cup Maker",
  "Stainless Steel Nail Clipper",
  "Wide Jaw Toenail Clipper",
  "Ergonomic Toenail Trimmer",
  "Professional Nail Cutter",
  "Heavy Duty Nail Clipper",
  "Precision Pedicure Clipper",
  "Travel Toenail Grooming Cutter"
];

if (!hasValidSellerSession()) {
  localStorage.removeItem('russellDashboardLoggedIn');
  localStorage.removeItem('russellDashboardUser');
  localStorage.removeItem('russellDashboardToken');
  window.location.href = 'index.html';
}

const user = getSellerSession() || { name: 'Seller', token: '' };

function getProfileNameForUser() {
  const token = String((user?.token || localStorage.getItem('russellDashboardToken') || '')).trim().toUpperCase();
  const tokenConfig = dashboardDataByToken[token];
  return tokenConfig?.profileName || user?.name || 'Seller';
}

function createDefaultData() {
  const token = normalizeToken(user.token);
  return JSON.parse(JSON.stringify(dashboardDataByToken[token] || dashboardData));
}

function getUserDataKey() {
  const token = (localStorage.getItem('russellDashboardToken') || '').trim();
  return token ? `russellDashboardData_${token}` : 'russellDashboardData';
}

function loadUserData() {
  const savedData = JSON.parse(localStorage.getItem(getUserDataKey()) || 'null');
  return savedData ? savedData : createDefaultData();
}

const data = loadUserData();

function saveData() {
  localStorage.setItem(getUserDataKey(), JSON.stringify(data));
}

function money(value) {
  return `$${Number(value || 0).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
}

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}

function populateProductNamesList() {
  const input = document.getElementById('newProductName');
  const datalist = document.getElementById('productNameSuggestions');
  if (!input || !datalist) return;

  const renderSuggestions = (query = '') => {
    const normalizedQuery = query.trim().toLowerCase();
    const matches = productNames.filter(name => name.toLowerCase().includes(normalizedQuery));
    datalist.innerHTML = matches.map(name => `<option value="${name}"></option>`).join('');
  };

  renderSuggestions();
  input.addEventListener('input', event => renderSuggestions(event.target.value));
}

const profileName = getProfileNameForUser();
setText('profileName', profileName);
populateProductNamesList();
const initials = profileName.split(/\s+/).slice(0, 2).map(word => word[0]).join('').toUpperCase();
setText('profileAvatar', initials);

function renderMetrics() {
  setText('metricRevenue', money(data.revenue));
  setText('metricOrders', Number(data.orders || 0).toLocaleString());
  setText('metricCustomers', data.products.length.toLocaleString());
  setText('metricConversion', Number(data.itemsSold || 0).toLocaleString());
  setText('revenueHint', data.revenue ? 'Recorded revenue' : 'No sales yet');
  setText('ordersHint', data.orders ? `${data.orders} recorded order${data.orders === 1 ? '' : 's'}` : 'No sales yet');
  setText('listingsHint', data.products.length ? `${data.products.length} product${data.products.length === 1 ? '' : 's'} added` : 'No products added yet');
  setText('itemsSoldHint', data.itemsSold ? 'Items sold' : 'No sales yet');

  const chart = document.getElementById('barChart');
  if (chart) {
    const max = Math.max(...data.weeklyRevenue, 1);
    chart.innerHTML = data.weeklyRevenue.map((value, index) => `
      <div class="bar-group">
        <div class="bar" style="height:${(value / max) * 100}%" title="Week ${index + 1}: ${money(value)}"></div>
        <small>Week ${index + 1}</small>
      </div>
    `).join('');
  }
}

function renderProducts() {
  const container = document.getElementById('topProducts');
  if (!container) return;
  container.innerHTML = data.products.length ? data.products.map((product, index) => `
    <div class="top-product">
      <div class="seller-avatar">${product.name.slice(0, 2).toUpperCase()}</div>
      <div><strong>${product.name}</strong><small>${product.quantity || 0} available</small></div>
      <strong>${money(product.price)}</strong>
      <button class="listing-action listing-action-danger" onclick="removeProduct(${index})">Remove</button>
    </div>
  `).join('') : '<p>No products yet. Use “Add product” when you are ready.</p>';
}

function renderOrders() {
  const table = document.getElementById('ordersTable');
  if (!table) return;
  table.innerHTML = data.recentOrders.length ? data.recentOrders.map(order => `
    <tr>
      <td><strong>${order.id}</strong></td>
      <td>${order.customer}</td>
      <td>${order.product}</td>
      <td>${order.country}</td>
      <td><strong>${money(order.total)}</strong></td>
      <td><span class="status completed">Completed</span></td>
    </tr>
  `).join('') : '<tr><td colspan="6">No orders yet. Your sales will appear here later.</td></tr>';
}

function renderCountries() {
  const container = document.getElementById('countrySales');
  if (!container) return;
  if (!data.countrySales.length) {
    setText('countrySalesDescription', 'No sales recorded yet.');
    container.innerHTML = '<p>No customer countries to show yet.</p>';
    return;
  }
  const max = Math.max(...data.countrySales.map(item => item.revenue), 1);
  container.innerHTML = data.countrySales.map(item => `
    <div class="country-row">
      <div><span class="flag">🌍</span><div><strong>${item.country}</strong><small>${item.orders} orders</small></div></div>
      <div><strong>${money(item.revenue)}</strong><span class="progress"><i style="width:${(item.revenue / max) * 100}%"></i></span></div>
    </div>
  `).join('');
}

function renderAnalytics() {
  setText('analyticsRevenue', money(data.dailyRevenue.reduce((sum, value) => sum + value, 0)));
  setText('analyticsOrders', data.orders || 0);
  setText('analyticsBestDay', data.dailyRevenue.some(Boolean) ? ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][data.dailyRevenue.indexOf(Math.max(...data.dailyRevenue))] : 'No sales yet');

  const chart = document.getElementById('analyticsChart');
  if (!chart) return;
  const values = data.dailyRevenue;
  const width = 640, height = 280, left = 52, right = 24, top = 24, bottom = 42;
  const plotWidth = width - left - right, plotHeight = height - top - bottom;
  const max = Math.max(...values, 1);
  const points = values.map((value, index) => ({
    x: left + (plotWidth / 6) * index,
    y: top + plotHeight - (value / max) * plotHeight
  }));
  const line = points.map(point => `${point.x},${point.y}`).join(' ');
  chart.innerHTML = `<polyline class="analytics-trend-line" points="${line}" />${points.map(point => `<circle class="analytics-point" cx="${point.x}" cy="${point.y}" r="5"></circle>`).join('')}`;
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1800);
}

window.removeProduct = index => {
  data.products.splice(index, 1);
  saveData();
  renderMetrics();
  renderProducts();
};

const modal = document.getElementById('productModal');
document.getElementById('addProductBtn')?.addEventListener('click', () => modal?.classList.add('active'));
document.getElementById('closeModal')?.addEventListener('click', () => modal?.classList.remove('active'));

document.getElementById('productForm')?.addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('newProductName').value.trim();
  const quantity = Number(document.getElementById('newProductQuantity').value);
  const price = Number(document.getElementById('newProductPrice').value);
  if (!name || quantity < 0 || price < 0) return;
  data.products.push({ name, quantity, price });
  saveData();
  renderMetrics();
  renderProducts();
  modal.classList.remove('active');
  event.target.reset();
  showToast('Product added successfully.');
});

const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('dashboardOverlay');
document.getElementById('sidebarToggle')?.addEventListener('click', () => {
  sidebar?.classList.add('active');
  overlay?.classList.add('active');
});
function closeSidebar() {
  sidebar?.classList.remove('active');
  overlay?.classList.remove('active');
}
document.getElementById('sidebarClose')?.addEventListener('click', closeSidebar);
overlay?.addEventListener('click', closeSidebar);

document.getElementById('analyticsNav')?.addEventListener('click', event => {
  event.preventDefault();
  const panel = document.getElementById('analyticsPanel');
  panel.hidden = false;
  renderAnalytics();
  panel.scrollIntoView({ behavior: 'smooth' });
  closeSidebar();
});

document.getElementById('sellerNotificationsButton')?.addEventListener('click', () => {
  const panel = document.getElementById('sellerNotificationsPanel');
  panel.hidden = !panel.hidden;
  document.getElementById('sellerNotificationsList').innerHTML = '<p class="notification-empty">No notifications yet.</p>';
});

document.getElementById('logoutBtn')?.addEventListener('click', () => {
  localStorage.removeItem('russellDashboardLoggedIn');
  localStorage.removeItem('russellDashboardUser');
  localStorage.removeItem('russellDashboardToken');
  window.location.href = 'index.html';
});

renderMetrics();
renderProducts();
renderOrders();
renderCountries();
