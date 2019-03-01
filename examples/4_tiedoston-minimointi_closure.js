
class HintaLaskuri {
	constructor() {
	  this.ostostenHintaYhteensa = 0
		this.arvonLisaVero = 0.14
	}

	lisaaTuote(hinta) {
		this.ostostenHintaYhteensa += hinta
	}

	yhteensa() {
		return this.ostostenHintaYhteensa + this.ostostenHintaYhteensa * this.arvonLisaVero
	}
}

const laskuri = new HintaLaskuri()

laskuri.lisaaTuote(5)
console.log(laskuri.yhteensa())
