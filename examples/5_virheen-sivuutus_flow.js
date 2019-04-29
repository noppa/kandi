// @flow

const koriElementti: null | HTMLElement = document.getElementById('kori')
// $FlowFixMe Tiedetään että kori elementti on dokumenttissa eikä se ole null.
const koriElementtiEiNull: HTMLElement = koriElementti
koriElementtiEiNull.innerHTML = '<h1>Ostoskori</h1>'
