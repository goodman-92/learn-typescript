// 값만 생성시 알아서 숫자형이넘의로 생성됨
enum Shoes {
	Nike,
	Adidas
}

const myShoes = Shoes.Nike;
console.log(myShoes); // 0 알아서 숫자를 지정해준다 (빼열처럼
console.log(Shoes[0],Shoes[1]) // 배열처럼 뽑아낼수잇다 ?
console.log(Shoes)

enum Shoes2 {
	Nike = "나이키",
	Adidas = "아디다스"
}
console.log(Shoes2)


enum Answer {
	Yes = 'Y',
	No = 'N'
}

// 예제
function askQuestion(answer: Answer) {
	// if (answer === 'yes'){console.log('정답입니다')}
	// if (answer === 'no'){console.log('오답입니다')}

	if (answer === Answer.Yes){
		console.log('정답입니다')
	}
	if (answer === Answer.No){
		console.log('오답입니다')
	}
}

// 마음대로 넣으니 사용하기 힘들다
// askQuestion('1')
// askQuestion('yes')
// askQuestion('예스')

// 🚀 Nice
 askQuestion(Answer.Yes)