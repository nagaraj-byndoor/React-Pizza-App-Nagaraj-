import 'isomorphic-fetch';

export function fetch() {
    return global.fetch('./../pizza.json')
		.then((response)=>response.json())
}