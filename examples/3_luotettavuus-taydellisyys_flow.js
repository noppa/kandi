// @flow

type Ostos = {
  +nimi: string;
  +hinta: number;
};
declare function lisääTuote(ostos: Ostos): void;

function osta(ostos) {
  if (typeof ostos.nimi === 'string') {
    lisääTuote({
      nimi: ostos.nimi,
      hinta: ostos.hinta
    });
  }
}

osta({ nimi: 'juusto', hinta: 5 });
osta({ hinta: 5 });
