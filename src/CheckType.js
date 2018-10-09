export default function (type, obj) {
	try
	{
		return type.prototype.constructor === obj.constructor
	}
	catch (error)
	{
		return false
	}
}