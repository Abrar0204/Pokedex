class Pokemon {
	constructor(id = 0, name = '', height = 0, weight = 0, sprite = '', types = [], stats = [], abilities = []) {
		this.id = id;
		this.name = name;
		this.height = height;
		this.weight = weight;
		this.sprite = sprite;
		this.types = types;
		this.stats = stats;
		this.abilities = abilities;
	}
}

export default Pokemon;
