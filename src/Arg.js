export default class Arg {
	constructor (name, type, def) {
		this.set(name, type, def)
	}
	set (name, type, def) {
		this.name = name
		this.type = type
		this.default = def
	}
}