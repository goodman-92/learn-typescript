function sum(a, b) {
	return a + b;
}

sum(10, '20')

const result = sum(10, '20');

// 결과값의 오브젝트가 표현되지 안흔ㄴ다
// result.


// 타입스크립트 처럼 활용하기
/**
 *  @param{number} a 여기는 코멘트다
 *  @param{number} b js doc 의 새로운 사실을 알앗네
 *  @return{number} 리턴될값이 number 라는걸 알 수 있다
 * */
function sum2(a, b) {
	return a + b
}


// sum2('10','20') // 에러결과 값이 나옴
sum2(1,2).toLocaleString() // number 타입의 프로퍼티스 추측가능