export default function BreakableForeach (array, callback) {
	for (let i = 0; i < array.length; ++i)
	{
		if (callback(array[i], i) === false)
		{
			return
		}
	}
}