export const formatDate = (date) => new Date(date).toLocaleDateString('en-IN');

export const formatCurrency = (amount) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount);

export const getInitials = (name) =>
  name?.split(' ').map(n => n[0]).join('').toUpperCase() || 'U';
