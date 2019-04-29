
const koriElementti: null | HTMLElement = document.getElementById('kori')
// Tiedetään että kori elementti on dokumenttissa eikä se ole null.
const koriElementtiEiNull: HTMLElement = koriElementti as any
koriElementtiEiNull.innerHTML = '<h1>Ostoskori</h1>'
