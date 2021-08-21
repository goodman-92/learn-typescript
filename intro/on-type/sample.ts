function sum(a: number, b: number) {
	return a + b;
}

//bad
console.log(
	sum(10, '20') // 에러로 표현함
)

// good
console.log(
	sum(10, 20)
)


// 결과값으로 정형화된 프로토 타입읍 활용할 수 있다
const result = sum(10, 20);

// numberType 
result.toLocaleString();

