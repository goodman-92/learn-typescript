interface User {
	age: number;
	name: string;
}

// 변수에 활용한 인터페이스
// 구현을 안하면 에러가나온다
let user: User = {
	name: 'jin',
	age: 1
}

// 함수에 인터페이스 활용
function getUser(user: User) {
	console.log(user)
}

// getUser(1); // 잘못된 데이터를 잘못넣더라도 알지를 못한다
const userA = {
	name: "a"
}

// getUser(userA) 함수 인자를 맞게 넣는지 추적한다

// 함수의 구조에 인터페이스를 활용하는 방법
interface SumFunc {
	(a:number, b:number): number;
}

let sum: SumFunc // 먼저 형을 선언하고 추가로 정의할때 에러가뜨는걸 똑같이 변수처럼 활용 가능한다
sum = (a: number, b: number) => a + b

// 인터페이스 인덱시
interface StringArr {
	[index: number]: string
}

let arr: StringArr = ['a','b','c'];
// arr[0] = 10 배열처럼 특정인덱싱에 넣어진 값에 접근할때 타입에 대해서 에러가뜬다

// 인터페이스 딕셔너리 패턴
interface StringRegexDictionary {
	[key: string]: RegExp // 정규식 타입을 예약어로 정의함
}

const obj: StringRegexDictionary = {
	// sth: /abc/
	// cssFile: 'css' 정규식의 타입이 아니여서 에러가 난다
	cssFile: /\.css%/,
	jsFile: /\.js%/,
	// scss : "1",
}

// obj['scssFile'] = '1' // 선언된 타입형식으로해야된다
// console.log(obj.cssFile2)  단점이 선언이 되어있는지 없는지 체크를안해준다!

// Object.keys(obj).forEach((value) => {
//
// })

// 인터페이스 확장
interface Person {
	name: string;
	age: number;
}

interface Developer extends Person {
	lang: string
}

let me : Developer = {
	name: "jin",
	age: 1,
	lang: "js"
}
