(() => {
  if (!hasValidSellerSession()) {
    window.location.href = 'index.html';
    return;
  }

  const user = getSellerSession();
  const token = normalizeToken(user?.token);
  const dataKey = token ? `russellDashboardData_${token}` : 'russellDashboardData';
  let sellerData = {};

  try {
    sellerData = JSON.parse(localStorage.getItem(dataKey) || '{}');
  } catch {
    sellerData = {};
  }

  // Starting data mirrors the dashboard's seller profiles when no browser data has been saved yet.
  const initialDataByToken = {
    'RUSSELL-SELLER-071': { revenue: 2250, itemsSold: 11 }
  };
  const isDonnaLegacyProfile = token === 'RUSSELL-SELLER-071' &&
    Number(sellerData.revenue) === 330 && Number(sellerData.orders) === 2;
  if (isDonnaLegacyProfile) {
    sellerData = initialDataByToken[token];
    localStorage.setItem(dataKey, JSON.stringify({
      ...JSON.parse(localStorage.getItem(dataKey) || '{}'),
      ...sellerData
    }));
  }
  const hasRecordedPerformance = Number(sellerData.revenue) > 0 || Number(sellerData.itemsSold) > 0 || Number(sellerData.orders) > 0;
  // Replace only an old, empty placeholder. Any real performance saved by the
  // dashboard remains the source of truth and is reflected here immediately.
  if (!hasRecordedPerformance && initialDataByToken[token]) {
    sellerData = initialDataByToken[token];
  }

  const revenue = Math.max(0, Number(sellerData.revenue) || 0);
  const productsSold = Math.max(0, Number(sellerData.itemsSold) || 0);

  // A seller moves into a higher tailored tier as their recorded sales grow.
  const tier = revenue >= 2000 || productsSold >= 10
    ? { name: 'Established seller', revenue: 2000, products: 10 }
    : revenue >= 500 || productsSold >= 3
      ? { name: 'Growing seller', revenue: 1000, products: 6 }
      : { name: 'New seller', revenue: 500, products: 3 };

  const revenuePercent = Math.min(100, (revenue / tier.revenue) * 100);
  const productsPercent = Math.min(100, (productsSold / tier.products) * 100);
  const approved = revenue >= tier.revenue && productsSold >= tier.products;
  const money = value => `$${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  const setText = (id, value) => { document.getElementById(id).textContent = value; };

  setText('sellerName', `${user?.name || 'Seller'} · ${tier.name}`);
  setText('currentRevenue', money(revenue));
  setText('revenueTarget', `Target: ${money(tier.revenue)}`);
  setText('currentProductsSold', productsSold.toLocaleString());
  setText('productsTarget', `Target: ${tier.products} products`);
  setText('revenueProgressText', `${Math.round(revenuePercent)}%`);
  setText('productsProgressText', `${Math.round(productsPercent)}%`);
  document.getElementById('revenueProgress').style.width = `${revenuePercent}%`;
  document.getElementById('productsProgress').style.width = `${productsPercent}%`;
  setText('requirementSummary', `Your ${tier.name.toLowerCase()} requirements are tailored to your recorded revenue and products sold.`);

  const statusCard = document.getElementById('statusCard');
  if (approved) {
    setText('statusTitle', 'Approved');
    setText('statusDescription', 'You meet the requirements for full seller access.');
    setText('nextStep', 'Your seller account is active and eligible for full features.');
    setText('statusAction', 'Return to Dashboard');
  } else {
    const revenueLeft = Math.max(0, tier.revenue - revenue);
    const productsLeft = Math.max(0, tier.products - productsSold);
    statusCard.classList.add('pending');
    setText('statusIcon', '!');
    setText('statusTitle', 'In progress');
    setText('statusDescription', 'Complete both personalized targets to receive approval.');
    setText('nextStep', `To qualify, record ${money(revenueLeft)} more in revenue and sell ${productsLeft} more product${productsLeft === 1 ? '' : 's'}.`);
    setText('statusAction', 'Continue Selling');
  }
})();
