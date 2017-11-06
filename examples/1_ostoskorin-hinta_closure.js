/**
* @typedef {{
*   hinta: number
* }}
*/
let Ostos;

/**
* @param {!Array<Ostos>} ostokset
* @return {number} Ostosten yhteenlaskettu hinta
*/
function ostoskorinHinta(ostokset) {
  let summa = 0;
  for (const ostos of ostokset) summa += ostos.hinta;
  return summa;
}

/** @type {number} */
const hinta = ostoskorinHinta([{ hinta: 5 }, { hinta: 10 }]);

//// Kommenteista poistaminen aiheuttaa virheen tarkastettaessa
// ostoskorinHinta([5, 10])