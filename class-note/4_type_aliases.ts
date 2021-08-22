// type 키워드를 작성한다
interface Person {name: string;age: number;}

// type Person = { name: string; age: number; }

let seho: Person = {   // 같은게 있으면 첫번째는 인터페이스로 매칭, 선언될때는 다르다, 인터페이스는 해당 선언부로 간다(마우스 올리면 확인가능), 타입 별칭은 바로 확인가능하다
	name: 'hoin',
	age: 30
}

type MyString = string;
// 사용방법: 변수 선언 뒤에 : 선언 = 초기값 설정
const str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean}

function getTodo(todo: Todo) {}

// 타입과 인터페이스의 차이
// 타입 별칭의 특징 ==> 특징 나중에 정의된 타입에 이름만 부여하는것
// 인터페이스는 해당 선언부로 간다(마우스 올리면 확인가능), 타입 별칭은 바로 확인 가능하다
// 타입은 확장이 불가능하다!! 인터페이스는 가능



