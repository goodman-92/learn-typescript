// 타입 추론 기본 1
let a; // 가만히 있으면 a는 any 다
let x = 3; // 타입의 첫 값으로 추론된다(number)

// x = '3'; // 추론된 타입이 아니니 에러남

function getB(b = 10) {
	let c = 'hi'; // string 추론

	return b + c; // 기본값을 넣으면 기본값으로 추론한다, string + number = string 이기에 추론했다
}

interface Dropdown<T> {
	value: T;
	title: string;
}

let shoppingItem: Dropdown<String> = {
	value: 'abc', //알아서 추론해준다 string 값으로
	title: 'hello'
}

// 타입 추론 기본 3
interface DropDown<T> {
	value: T;
	title: string;
}

interface DetailedDropdown<K> extends Dropdown<K> {
	description: string;
	tag: K
}

// 제네릭도 타입이 상속까지해서 다른 인터페이스에도 연속된다
const detailedItem: DetailedDropdown<string> = {
	description: "",
	tag: "",
	value: "",
	title: "abc"
}

// Best Common Type
// 타입을 추론하는 알고리즘
let arr = ['a', 1, true, true] //  (string | number| boolean)[] // 유니온으로 추론한다
