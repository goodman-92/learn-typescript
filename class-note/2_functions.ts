// 함수에 파라미터에 타입을 정희하는 방식
function sum(a: number, b: number) {
	return a + b;
}

sum(10, 20); // 리턴값을 지정안해도 타입을 추론해준다(반환값을)

function add(): number { // 반환을 안하면 에러가난다.
	return 1;
}

// optional
function add2(a: number, b: number): number {
	return a + b;
}

// add2(1, 2, 3, 4) // 함수의 인자를 체크한다, 마음대로 넣을수없다

log("hello world");
log("hello world", "ts")

// void 반환값이 없는것
function log(a: string, b?: string, c?: string): void { //
	console.log(a + b + c)
}