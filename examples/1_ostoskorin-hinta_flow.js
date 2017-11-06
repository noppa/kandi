// @flow

type Ostos = {
  hinta: number;
};

function ostoskorinHinta(ostokset: Ostos[]): number {
  let summa = 0;
  for (const ostos of ostokset) summa += ostos.hinta;
  return summa;
}
