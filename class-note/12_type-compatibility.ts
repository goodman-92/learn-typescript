// 인퍼테이스
interface Developer {
	name: string;
	skill: string;
}

interface Person {
	name: string;
}

let developer: Developer;
let person: Person;

// developer = person // 인간은 개발자를 충족시킬수없다
person = developer // 개발자는 인간의 필요조건을 충족 할 수 있다

class Person {
	name: string;
}

person = developer // 인터페이스 클래스 상관없이 객체타입으로 비교한다

let add = (a: number) => {}

let sum = (a: number, b: number) => {}

// add = sum // 함수의 인자타입도 비교된다
sum = add; // 포함관계로 비교된다

// 제네릭
interface Empty<T> {}

let empty1: Empty<string>;
let empty2: Empty<number>;

empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
	Data: T
}

let notEmpty1: NotEmpty<string>
let notEmpty2: NotEmpty<number>

// notEmpty1 = notEmpty2
// notEmpty2 = notEmpty1
