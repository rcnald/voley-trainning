export function formatToCPF(value) {

  const valueRaw = value.replace(/\D/g, '').replace(/^0+/, '').slice(0, 11)

  return valueRaw
    .padStart(11, '0')
    .replace(/^(\d{3})(\d)/, '$1.$2') 
    .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3') 
    .replace(/\.(\d{3})(\d)/, '.$1-$2')
}

export function formatToNumeric(value){
  return value.replace(/\D/g, '')
}

export function getPlayerById(playerId) {
  const accounts = JSON.parse(localStorage.getItem('@court-connect:accounts')) || [];

  const player = accounts.find(account => account.id === playerId);

  if (!player) {
    return null;
  }

  return player;
}

export function logout() {
  localStorage.removeItem('@court-connect:session')
}

export function randomUUID() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
    (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
  );
}

export function formatDate(dateStr) {
  const [year, month, day] = dateStr.split('-');
  return `${day}/${month}/${year}`;
}

export function capitalize(str) {
  return str.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}