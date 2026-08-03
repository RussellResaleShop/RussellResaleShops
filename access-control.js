/*
  SELLER ACCESS CODES
  Add one account for each seller you give access to. Change the sample
  email and token before sharing the site.

  This is client-side validation for a static website. Do not use it for
  real passwords, payments, or private customer data; a backend is needed
  for secure user accounts and central admin control.
*/
const sellerAccounts = [
  {
    name: 'Donna Raye',
    email: 'grumblis1@bellsouth.net',
    token: 'RUSSELL-SELLER-001'
  },
  {
    name: 'Seller Two',
    email: 'seller2@example.com',
    token: 'RUSSELL-SELLER-002'
  },
  {
    name: 'Seller Three',
    email: 'seller3@example.com',
    token: 'RUSSELL-SELLER-003'
  },
  {
    name: 'Seller Four',
    email: 'seller4@example.com',
    token: 'RUSSELL-SELLER-004'
  },
  {
    name: 'Seller Five',
    email: 'seller5@example.com',
    token: 'RUSSELL-SELLER-005'
  },
  {
    name: 'Seller Six',
    email: 'seller6@example.com',
    token: 'RUSSELL-SELLER-006'
  }
];

function normalizeEmail(email) {
  return String(email || '').trim().toLowerCase();
}

function normalizeToken(token) {
  return String(token || '').trim().toUpperCase();
}

function findSellerAccount(email, token) {
  const normalizedEmail = normalizeEmail(email);
  const normalizedToken = normalizeToken(token);
  return sellerAccounts.find(account =>
    normalizeEmail(account.email) === normalizedEmail &&
    normalizeToken(account.token) === normalizedToken
  );
}

function saveSellerSession(account) {
  localStorage.setItem('russellDashboardLoggedIn', 'true');
  localStorage.setItem('russellDashboardUser', JSON.stringify({
    name: account.name,
    email: normalizeEmail(account.email),
    token: normalizeToken(account.token)
  }));
  localStorage.setItem('russellDashboardToken', normalizeToken(account.token));
}

function getSellerSession() {
  try {
    return JSON.parse(localStorage.getItem('russellDashboardUser') || 'null');
  } catch {
    return null;
  }
}

function hasValidSellerSession() {
  const session = getSellerSession();
  return localStorage.getItem('russellDashboardLoggedIn') === 'true' &&
    Boolean(session && findSellerAccount(session.email, session.token));
}
