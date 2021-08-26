// 타입 단언(type assertion)

var a;
a = 20;
a = 'a';

// var b = a 타입스크립트가 추론할수없다 any , number string 수시로 바뀌기때문에
var b = a as string // 개발자가 추론해줘서 string 으로 선언 할수 잇다

// DOM API 조작
// <div id="app">hi</div>

var div = document.querySelector('div');  // HTMLDivElement 라고 추정해준다
if (div){ // 존재 유무를 체크 해야 한다
	div.innerText
}