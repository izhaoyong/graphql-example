class RandomDie {
	constructor(numSides) {
		this.numSides = numSides;
	}
	rollOnce() {
		return 1 + Math.floor(Math.random() * this.numSides);
	}
	roll({ numRolls }) {
		var output = [];
		for (var i = 0; i < numRolls; i++) {
			output.push(this.rollOnce());
		}
		return output;
	}
}

let random = new RandomDie(1);
console.log(random);