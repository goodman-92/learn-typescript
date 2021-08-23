// 일반 js 함수  => 암묵적으로 any  라고 함
// function logText(text) {
// 	console.log(text);
// text.split('').reverse().join(''); // text 일경우만
// 	return text;
// }
//
// logText(10);
// logText('hello');
// logText(true);

function logText<T>(text: T): T {
	console.log(text)
	return text;
}

// 파라미터 타입을 지정해서 넘겨야 한다
logText(10).toLocaleString() // 타입을 추론했다
logText<string>('hello').split('') // 명시적으로 형타입을 제네릭에 지정함

logText<string>('10').toUpperCase()

function logNumber(num: number) {
	console.log(num);
	return num
}

const num = logNumber(10);
// num.toLocaleString() number 로 사용가능
// 타입을 받기위해서 계속해서 함수를 만드는게 않좋음

function logUnionText(text: string | number) {
	console.log(text);
	return text
}

const a = logUnionText('a')
// a.split() // 함수안에서 반환값에대한 형이 정의되지 않아서 호출을 못함
const b = logUnionText(10)

function logText3<T>(text: T): T {
	console.log(text)
	return text
}

// 제네릭을 이용해서 어떤게 반환될지 사용할때 선언됨
const logStr = logText<string>('hello')
// logStr.split('') string built in method 를 사용할수 있음

const logBool = logText<boolean>(true);
console.log(logBool)

interface IDropdown {
	value: string;
	selected: boolean;
}

// 안된다
// const numberDropdown: IDropdown = {value: 1, selected: false}


interface Dropdown<T> {
	value: T;
	selected: false
}

// const dropdown : Dropdown<number>  = {selected: false, value: "1"}   // 내가원하는 드롭다운 형태를 선언할수있다
const dropdown: Dropdown<number> = {selected: false, value: 1}   // 내가원하는 드롭다운 형태를 선언할수있다

// 제네릭의 타입 제한
// string[]
function logTextLength<T>(text: T[]): T[] { //배열을 선언하니 length 배열을 선언할수잇다
	console.log(text.length) // 어떤 타입이 올지 모르니 글자열의 빌트인 메소드를 사용하지 모샇ㄴ다

	text.forEach((t) => t) // ?? 이래도 t 가 안되는데

	return text
}

logTextLength<string>(['h1']);

// 제네릭의 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
	length: number;
}

function logTextLength2<T extends LengthType>(text: T): T {
	// length 라는 타입이 잇다는 걸 확장해서 알려준다
	console.log(text.length)
	return text
}

// logTextLength2<number>(10)   10 의 기본의 타입에 10이 없으니 에러가 나온다
logTextLength2({length: 10}) // object 기준으로 length 라는 필드 값이 있는지 확인하면 구현이된다
logTextLength2([1, 2, 3]) // object 기준으로 length 라는 필드 값이 있는지 확인하면 구현이된다

interface ShoppingItem {
	readonly id?: number
	name: string;
	price: number;
	stock: number;
}

function getShoppingItemOption<T>(itemOption: T): T {
	return itemOption;
}

// 단순이렇게해버리면 최소 조건이 필요한듯 쇼펑아이템정보의
function getShoppingItemOption2<T extends ShoppingItem>(itemOption: T): T {
	return itemOption;
}

function getShoppingItemOption3<T extends keyof ShoppingItem>(itemOption: T): T {
	return itemOption;
}

function getShoppingFindItemOption<T extends keyof ShoppingItem>(id: number, itemOption: T): undefined | ShoppingItem[T] {
	const items: ShoppingItem[] = [
		{ id: 1, stock: 1, price: 10, name: "watch"}, {id: 2, stock: 2, price: 20, name: "book"}
	]
	const filterItem = items.filter(i => i.id === id)

	return filterItem[0][itemOption];

}

const optionItem = getShoppingItemOption<ShoppingItem['price']>(1)

const minOptionItem = getShoppingItemOption2({name: 'car', price: 1, stock: 1})

const keyOfItem = getShoppingItemOption3("name")

const firstItemOptionValue = getShoppingFindItemOption(1, "name")
console.log(firstItemOptionValue)

console.log('optionItem', optionItem)
console.log('minOptionItem', minOptionItem)
console.log('keyOfItem', keyOfItem)
