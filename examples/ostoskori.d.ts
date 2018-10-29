type Ostos = {
  nimi: string;
  hinta: number;
};

export const tuotteet: ReadonlyArray<Ostos>;

/** Lisää tuotteen ostoskoriin. */
export function lisaaTuote(ostos: Ostos): void;

/**
 * Palauttaa kaikki ostoskoriin lisätyt tuotteet.
 */
export function ostoskori(): Ostos[];