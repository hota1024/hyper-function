export default function (type, obj) {
	let toString = Object.prototype.toString
	return toString.call(obj).slice(8, -1) === type.name
}