type Ostos = {
  hinta: number;
};

/** Lisää tuotteen ostoskoriin. */
export function lisaaTuote(ostos: Ostos): void;

/**
 * Palauttaa kaikki ostoskoriin lisätyt tuotteet.
 */
export function ostoskori(): Ostos[];