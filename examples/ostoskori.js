
const tuotteet = [];

export function lisaaTuote(ostos) {
  tuotteet.push(ostos);
}

export function ostoskori() {
  return tuotteet;
}