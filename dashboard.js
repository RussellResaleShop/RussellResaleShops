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

if (localStorage.getItem('russellDashboardLoggedIn') !== 'true') {
  window.location.href = 'login.html';
}

const user = JSON.parse(localStorage.getItem('russellDashboardUser') || '{"name":"Administrator"}');
const savedData = JSON.parse(localStorage.getItem('russellDashboardData') || 'null');
const data = savedData || dashboardData;

function saveData() {
  localStorage.setItem('russellDashboardData', JSON.stringify(data));
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

setText('profileName', user.name || 'Administrator');
const initials = (user.name || 'Administrator').split(/\s+/).slice(0, 2).map(word => word[0]).join('').toUpperCase();
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
  window.location.href = 'login.html';
});

renderMetrics();
renderProducts();
renderOrders();
renderCountries();
