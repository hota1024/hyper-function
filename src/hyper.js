import PrepareFunctions from './PrepareFunctions'
import CreateWrapper from './CreateWrapper'

export default function hyper(funcsArray) {
	// Prepare Functions Data
	const funcs = PrepareFunctions(funcsArray)
	// Function Wrapper
	const wrap = CreateWrapper(funcs)

	return wrap
}