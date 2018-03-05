// @flow

type Ostos = {
  +nimi: string;
  +hinta: number;
};
declare function lisaaTuote(ostos: Ostos): void;

function osta(ostos) {
  if (typeof ostos.nimi === 'string') {
    lisaaTuote({
      nimi: ostos.nimi,
      hinta: ostos.hinta
    });
  }
}

osta({ nimi: 'juusto', hinta: 5 });
osta({ hinta: 5 });
