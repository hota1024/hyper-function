import { ClearNamedParameter } from './NamedParameter'
import BreakableForeach from './BreakableForeach'
import { NamedParameter } from './index'
import CheckType from './CheckType'

export default function CreateWrapper (funcs) {
	const wrap = function () {
		// Data
		let args = Array.from(arguments)
		let returnValue = undefined
		let isCorresponded = false

		// Zero Argument
		if (args.length === 0)
		{
			let noParmFunc = funcs.find(func => func.args.length === 0)
			if (noParmFunc)
			{
				return noParmFunc.process(wrap)
			}
		}

		// Copy Named Parameters and Clear Named Parameters
		let tmpNp = Object.assign({}, NamedParameter)
		ClearNamedParameter()

		// Find Corresponding Function
		BreakableForeach(funcs, func => {
			let isCorrespond = true
			let computed = {}
			BreakableForeach(func.args, (funcArg, funcArgIndex) => {
				// Check Passed Parameter
				if (tmpNp[funcArg.name]) // NamedParameter
				{
					computed[funcArg.name] = tmpNp[funcArg.name]
				}
				else if (funcArg.default && typeof args[funcArgIndex] === 'undefined') // Default Value
				{
					computed[funcArg.name] = funcArg.default()
				}
				else if (CheckType(funcArg.type, args[funcArgIndex]) === false) // Not Exists
				{
					isCorrespond = false
					return false
				}
				else // Passed Value
				{
					computed[funcArg.name] = args[funcArgIndex]
				}
			})

			if (isCorrespond) {
				// Execute
				returnValue = func.process(computed, wrap)
				isCorresponded = true
				return false
			}
		})

		// If not undefined function, throw error
		if (isCorresponded === false) {
			throw Error('Undefined function.')
		}

		return returnValue
	}

	return wrap
}