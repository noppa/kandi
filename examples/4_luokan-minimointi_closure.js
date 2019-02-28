
class HintaLaskuri {
	constructor() {
	/**
	 * @type {number}
	 * @private
	 */
		this.ostostenHintaEuroina = 0
		
		this.arvonLisaVero = 0.14
	}

	/**
	 * @param {number} hinta 
	 */
	lisaaTuote(hinta) {
		this.ostostenHintaEuroina += hinta
	}

	yhteensa() {
		return this.ostostenHintaEuroina * this.arvonLisaVero
	}
}

var laskuri = new HintaLaskuri();

laskuri.lisaaTuote(5)

console.log(laskuri.yhteensa())
