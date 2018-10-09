import BreakableForeach from './BreakableForeach'
import Arg from './Arg'
import Func from './Func'
import hyper from './index'

export default function PrepareFunctions (funcsArray) {
	const funcs = []

	BreakableForeach(funcsArray, funcItem => {
		let keys = Object.keys(funcItem)
		let args = []
		let process = null

		// Check exists _ process function.
		if (keys.includes('_') === false) {
			throw Error('Function must have "_" property.')
		}

		// Process function
		process = funcItem._

		// Remove _ key
		keys = keys.filter(key => key !== '_')

		// Build args array
		keys.forEach(key => {
			let data = funcItem[key]
			let arg = new Arg()

			if (typeof data === 'function')
			{
				arg.set(key, data, null)
			}
			else if (typeof data === 'object')
			{
				arg.set(key, data.type || null, data.default || null)
			}

			args.push(arg)
		})

		funcs.push(new Func(args, process))
	})

	return funcs
}