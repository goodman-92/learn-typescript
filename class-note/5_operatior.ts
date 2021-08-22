// function logMessage(value: any) {console.log(value)}

// logMessage('hello');logMessage(100);

var seho: string | number | boolean;

// union type 이란 ? 특정 파라미터 변수에 한가지 이상을 사용하고 싶을때 결합 할 수 있는 타입스크립트 기능을 지칭함
function logMessage(value: string | number) {
	if (typeof value === 'number') {
		// value. number 의 프로토 타입 메소드가 나온다
	}
	// value.toString 문자열의 메소드를 사용할 수 있다 => 타입 가드
	throw new TypeError('해당하지 않는 타입이 들어왔습니다')
}

logMessage(100)
logMessage('hello')

interface Developer {
	name: string;
	skill: string;
}

interface Person {
	name: string;
	age: number;
}

// 인터섹션 타입
var seho2: string | number | boolean;
//
var capt: string & number & boolean;

// 유니온 타입의 특징
function askSomeone(someone: Developer | Person) {
	// 공통적인 값밖에 지원을 안해준다
	// someone.name

	// 중복되지않는것은 지원해주지 않는다
	// someone.age
	// someone.skill
}

// 인터섹션 타입으로 정의
function askSomeone2(someone: Developer & Person) {
	console.log(
		someone.name,
		someone.age,
		someone.skill
	)
	// 함수를 합쳐서 사용
}

// 유니온이니 둘중에 하나만 인자를 넣으라고함
// ❌ askSomeone({age: 1, name: 'jin', skill: 2})
askSomeone({age: 1, name: "jin"})

// 인터섹션 교차로 할 경우 합쳐서 사용하라고 함(인수를 준버넣으라고함
// ❌ askSomeone2({age: 1, name: "jin"})
askSomeone2({age: 1, name: 'jin', skill: 'react'})