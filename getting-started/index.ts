import {sum} from "./sum";

const b = 'a';

const arrFunc = () => "arrFunc"

const result = sum(10, 20) // compile

let nullish = null

const a = nullish ?? 'null 리싱';


// npm i typescript -g npm,
// node package manger
// tsc 파일이름 => 컴파일해준다(사실 트랜스파일)
// playground 로 활용 가능 하다.

// 컴파일시에슨 tsc project .

console.log(
	result, a
)