class Person {
	public name: string;
	private age: number;
	readonly log: string;

	constructor(name, age) {
		this.name = name;  // 기존 js 는 상관없지만 필드값을 생성하라고 경고가 뜬다
		this.age = age
	}
}
