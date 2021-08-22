// ES2015 (ES6)
class Person {
	// 클래스 로직
	constructor(name, age) {
		console.log('생성 되었습니다')
		this.name = name;
		this.age = age;
	}
	
	name = '';
	age = 0
}

const me = new Person('jin', 20);
console.log(me)

// 프로토 타입
var user = {name: 'capt', age: 100};
// var admin = {name: 'capt', age: 100, role: 'admin'};
var admin = {};

admin.__proto__ = user;  //
console.log(admin.__proto__, 'admin 프로토타입', admin.name)

// 자바스크립트에서는 단순 신텍스 슈가, 충분히 프로토 타입으로 생성 가능 하다
function Person2(name, age) {
	this.name = name;
	this.age = age;
}

const prototypeClassUser = new Person2('jin', 21)
console.log(prototypeClassUser)