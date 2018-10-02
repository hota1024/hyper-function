let NamedParameter = {}

export default NamedParameter

export function ClearNamedParameter () {
	for (let param in NamedParameter) {
		delete NamedParameter[param]
	}
}