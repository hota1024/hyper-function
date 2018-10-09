import PrepareFunctions from './PrepareFunctions'
import CreateWrapper from './CreateWrapper'
import NamedParameter from './NamedParameter'

function hyper(funcsArray) {
	// Prepare Functions Data
	const funcs = PrepareFunctions(funcsArray)
	// Function Wrapper
	const wrap = CreateWrapper(funcs)

	return wrap
}

hyper.Np = NamedParameter

export default hyper