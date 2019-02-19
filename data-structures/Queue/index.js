/**
 * Queue:
 * @see https://en.wikipedia.org/wiki/Queue_(abstract_data_type)
 */
export default function Queue(initialValues) {
	if (initialValues) {
		if (Array.isArray(initialValues) && initialValues.length > 0) {
			this.elements = initialValues;
		} else {
			this.elements = [ initialValues ];
		}
	} else {
		this.elements = [];
	}

	this.isEmpty = () => {
		return this.elements.length === 0;
	}

	/**
	 * Javascript builtin push
	 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
	 */
	this.enqueue = (element) => {
		return this.elements.push(element);
	}

	/**
	 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
	 */
	this.dequeue = () => {
		return this.elements.shift();
	}

	this.size = () => this.elements.length;

	return this;
}
