// @flow

type Ostos = {
  nimi: string;
  hinta: number;
};

function ostoskorinHinta(ostokset: Ostos[]): number {
  let summa = 0;
  for (const ostos of ostokset) summa += ostos.hinta;
  return summa;
}

const hinta: number = ostoskorinHinta([{ nimi: "juusto", hinta: 5 }, { nimi: "lahjapakkaus", hinta: 10 }]);

//// Kommenteista poistaminen aiheuttaa virheen tarkastettaessa
// ostoskorinHinta([5, 10]);
