interface Todo { id: number, title: string, done: boolean }
let todoItems: any[];

function fetchTodoItems(): Array<Todo> {
	return [
		{id: 1, title: '안녕', done: false},
		{id: 2, title: '타입', done: false},
		{id: 3, title: '스크립트', done: false},
	]
}

function fetchTodos(): Todo[] {
	const todos = fetchTodoItems();
	return todos;
}

function addTodo(todo: Todo) {
	// if (todo.title.length === 0) {
	// 	throw new Error('제목을 입력해주세요')
	// }

	todoItems.push(todo)
}

function deleteTodo(index: number): void {
	todoItems.splice(index, 1)
}

function completeTodo(index: number, todo: Todo): void {
	todo.done = true;
	todoItems.splice(index, 1, todo)
	
}

function logFirstTodo(): Todo {
	return todoItems[0]
}

function showCompletedTodos(): Todo[] {
	return todoItems.filter((todo) => todo.done);
}

function addTodoItems(todos: Todo[]): void {
	todos.forEach((todo) => {
		addTodo(todo);
	})
}

function log(): void {
	console.log(todoItems); // console.log => undefined
	return addTodoItems([{title: "1", done: true, id: Date.now()}])
}

todoItems = fetchTodos();
// addTodoItems();
// log();

