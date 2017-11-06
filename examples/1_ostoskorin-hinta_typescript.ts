type Ostos = {
  hinta: number;
};

function ostoskorinHinta(ostokset: Ostos[]): number {
  let summa = 0;
  for (const ostos of ostokset) summa += ostos.hinta;
  return summa;
}

const hinta: number = ostoskorinHinta([{ hinta: 5 }, { hinta: 10 }]);

//// Kommenteista poistaminen aiheuttaa virheen tarkastettaessa
// ostoskorinHinta([5, 10]);