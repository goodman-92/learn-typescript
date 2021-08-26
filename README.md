## 타입스크립트 요약

```
    Microsoft C#,  Angular 사용에 개발자가 만듬
```

### 타입스크립트의 장점

```
 API
   1-1. 안쓸경우 api 에서 데이터 처리 할때 , 어느게 들어올지 예상을 못한다. ide 에서 추적을 못한다. 오타 방지 불가능
   1-2. api의 데이터를 예측 할 수 있어서 Good!
   
   2. Function
   2-1. 함수의 인자를 잘못 넣는 실수를 방지가 가능하다
   2-2. 함수 결과값의 형 타입을 알아서 프로토 타입 메서드를 활용 할수 있다

   3. dynamically Typed => stataically typed
   3-1. 컴파일시 타입을 결정해 실수를 줄인다
   3-2. 대규모 프로젝트에서 안정성을 높일 수 있다
   
   4. OOP 사용가능(extends, implements, interface)
   5. module 지원
 ```

### 타입스크립트 환경 설정 및 실행 방법

```
    2-1. 우선 node 를 설치하자( node ver > 10, npm version)
    2-2. npm i -g typescript (글로벌 설치, 어디에서나 실행할수있게설정)
    2-3. tsc 파일명 (파일 컴파일)
    2-4. tsc --init (tsconfig.js) 설정파일을 기준으로 컴파일 한다(수동 생성시 문제생김)
    2-5. tsc --project (tsconfig.js 수동으로 설치시 이렇게해야적용된다..)
    2-6. tsc *.ts --watch (전체 파일 watch)                                                ㅏ
    2-7. sourceMap : js 로 빌드된 파일을 디버그시 잡고싶을때 사용하는 것, js typescript 를 연결해주는 맵이다 
```

### 변수와 함수 타입 정의

```typescript   
    !!차후 변수에 값을 추가로 지정할때 지정된 타입만 추가 할 수 있다.

    문자열
    let str: string
    
    숫자 
    let num: number
    
    불리언
    let bool: boolean
    
    배열 
     : 어떤 타입으로만 배열이 생성될것인지 결정함
    let numberArr: number[]
    let numberGenericArr: Array<Number>
   
    let strArr: string[]
    let objectArr: object[]
    
    튜플
      : 각 배열을 다른 타입들을 섞어서 각 인덱스에 정의해서 사용(인덱스 초과시 블가능)
    
    let person: [string, number] = ["jin", 20]
    let state: [any, function] // 리액트 useState 가 튜플 사용  
    
    객체
      : 객체 안 키 값을 지정하고, 키 값의 타입을 지정해야한다
    
    let personObj: { name: string, age: number, isAudult: boolean} = { name: 'jin', age: 20, isAudult:true }
```

### 제네릭

```typescript
   // 1. 사용방법 사용방법 함수에 <T>라고 넣고 사용하고 싶은 타입 반환값 or 인자에 넣어서 활용 된다
  // 2. 장점
  // 2-1 반환값에 타입을 제네릭 선언된걸 사용 하면 어느 인자든 주입한 제네릭 타입에 의해 사용 가능하다(재활용이 좋다) 👍
  // : 없을경우 유니온 타입값이 반환값이 어정쩡할때 코드의 수고량이 들어간다. 타입체크를 해야되서
  // 	: 아니면 각 맞는 함수를 생성해야하는 번거로움이 존재한다
  function logText<T>(text: T): T {
  	console.log(text)
  	return text;
  }
  // 반환값을 표기하기에 반환값의 타입의 다양성을 정확히 추론할수있다
  logText(10).toLocaleString();
  logText<string>('hello').split('')


    //2-2 같은 모양의 인터페이스에 타입을 기입해 재사용 가능하다 👍
    interface DropdownItem<T> {
			value: T;
			selected: boolean;
		}

  const emails: DropdownItem<string>[] = [
	{value: 'naver.com', selected: true},
	{value: 'gmail.com', selected: false},
	{value: 'hanmail.net', selected: false},
  ];

  const numberOfProducts: Array<DropdownItem<number>> = [
  	{value: 1, selected: true},
  	{value: 2, selected: false},
    {value: 3, selected: false},
  ];

// 함수에서 넣은 T 를 인자의 타입 인터페이스, 배열에도 적용 가능하다
    function createDropdownItem<T>(item: DropdownItem<T>) {
	// function logTextLength<T>(text: T[]) T[] : 단점이 제네릭으로 선언된 배열 아이템의 인자를 모른다. 그래서 사용하기어렵다
	// 3. 추가 기능
	// 3-1 확장자 기능(<T extends { length: number }>
    // : 차입을 모르니 함수안에서 활용성이 떨어질수 밖에 없다.
    // : 확장을 하면서 함수를 호출할때 제한적일수밖에 없다(확장조건에 충족이 되어야한다)
	interface LengthType {
		length: number;
	}

	function logTextLength<T extentds LengthType>(text: T): void {
		console.log(text.length)
	}

	// length 라는 프로퍼티를 충종하기 위해 값이 제한된다
	logTextLength(10) // ❌ 숫자열 10은 length 라는 숫자타입의 프로퍼티를 제공하지 않는다
	logTextLength({leng: '1'}) //❌ 정확히 object안에 length 라는 키값에 number 타입이 들어와야된다
	logTextLength({length: 1})
	logTextLength('hello world')
	logTextLength([1,2,3])

	// 3-2: keyof 타입 제한
	interface ShoppingItem {
		name: string;
		price: number;
		stock: number;
	}

	// 굳이 만든 억지 예제대, 제네릭에 키를 확장에서 itemOption 의 키 값을 제한을 줬다. 그래서 이넘처럼 사용 가능하다? 딱히 필요성은 모르겟다  
	function getShoppingFindItemOption<T extends keyof ShoppingItem>(id: number, itemOption: T): undefined | ShoppingItem[T] {
		const items: ShoppingItem[] = [
			{ id: 1, stock: 1, price: 10, name: "watch"}, {id: 2, stock: 2, price: 20, name: "book"}
		]

		const filterItem = items.filter(i => i.id === id)

		return filterItem[0][itemOption];
	};

```

### 타입 추론

```typescript

    let a; // any 
    let hello = "hello" // string
    hello = 10 // X 추론으로 이미 선언되서 바꿀 수 없다

    function getB(b = 10) {      // 타입과 타입이 만날경우도 추론해준다!!
    	let c = 'hi'; // string 추론
    
	// 기본값을 넣으면 기본값으로 추론되고 타입끼리 충돌할 경우
	// Best Common type (타입스크립트 알고르즘) 기반으로 추론해준다 
	// string + number = string 이기에 추론했다
	  return b + c;
    }

// 타입 추론 기본 3
interface DropDown<T> {
	value: T;
	title: string;
}

interface DetailedDropdown<K> extends Dropdown<K> {
	description: string;
	tag: K
}

// 제네릭도 타입이 상속까지해서 다른 인터페이스에도 연속된다 => 추론이 잘되서 편리하다
const detailedItem: DetailedDropdown<string> = {
	description: "",
	tag: "",
	value: "",
	title: "abc"
}

```

### 타입 단언

~~~typescript
    // 타입 단언(type assertion)
    // 타입이 정확하다고 개발자가 선언하는것이다
	// as [Type]
    var a;
    a = 20;
    a = 'a';

    // var b = a 타입스크립트가 추론할수없다 any , number string 수시로 바뀌기때문에
    var b = a as string // 개발자가 추론해줘서 string 으로 선언 할수 잇다

    // DOM API 조작
    // <div id="app">hi</div>

    var div = document.querySelector('div');  // HTMLDivElement 라고 추정해준다
    if (div) { // 존재 유무를 체크 해야 한다
    	div.innerText
    }
~~~