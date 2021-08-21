// js 문자열
var str1 = 'hello';

// TS 문자열 선언
let str2: string = "hello";

// str2 = 2 => 숫자로 인식안된다
let num: number = 10;

// 배열안에 어떤 타입이 들어가야되는지 정해야한다
let arr: Array<number> = [1, 2, 3];

let heroes: Array<String> = ['capt', 'thor', 'hulk', 'a'];
// ['Capt', 'Thor', 'Hulk', 0]; // 숫자를 못넣는다

// 제네릭을안쓰네?
let items: number[] = [1, 2, 3];

// TS 튜플
// 모든 index 에 배열을 담아놓고있다, 각 배열이 어떻게 나올지 지정함

let address: [string, number] = ['gangNam', 100];

// let address2: [string, number] = ['seongnam', 100, 200];
// 잘안됨

type UseState = [any, Function];

// 커스텀 state 를 만들어볼려햇는데? 잘안되네
let _value
const useState = (value: any): UseState => {
	_value = value;

	return [_value, (newValue: any) => {
		console.log('newValue', newValue)
		_value = newValue;
	}]
}
// const [ isState, setState ] = useState(false);
// console.log(
// 	isState, setState
// )
//
// console.log(isState, 'isState');
// setState(true);
// console.log(isState, 'isState');


// TS 객체
let obj: object = {};
let person: { name: string, age: number } = {name: "hiJin", age: 2}

type personPossibleAge = number

// 진위값으로 오브젝트의 키값을 확인한다
let person2: { name: string, age: personPossibleAge } = {name: "hiJin", age: 2}
