function fetchItems(): string[] {
	const items = ['a', 'b', 'c'];
	return items;
}

const result = fetchItems(); // 바로  string[]
console.log(result)

function fetchAsyncItems(): Promise<string[]> {
	const items = ['a', 'b', 'c'];
	return new Promise((resolve) => {
		resolve(items);
	})
}

