type Ostos = {
  nimi: string;
  hinta: number;
};

export const tuotteet: ReadonlyArray<Ostos>;

/** Lisää tuotteen ostoskoriin. */
export function lisääTuote(ostos: Ostos): void;
