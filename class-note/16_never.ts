// never
// 아주 작다,
// 다른 모든 타입들의 서브셋(다 쌉가능)
// 절대 발생하지 않는 타입 표현
// never empty 같다 비워진값이라 이해해도된다

// https://simsimjae.tistory.com/463
// T | never ⇒ T


// any 도 never 에 할당 못한다

// 항상 오류 출력 하거나, 리턴값을 절대 내보내지 않는 케이스

// T extends never ? ~~ : ~~

function invalid(message: string): never {
  throw new Error(message)
}

// 선언 되지 않음
// function invalid2(): never {
//     return true;
// }

/**
 *  T extends never 의미!!
 * */

/**
 *  never 는 다른 모든 타입들의 서브셋이다?
 *
 *  서브셋: 부분집합
 *  어떤 집합에 포함되는 집합. 말 그대로 어떤 집합에 부분이 되는 집합
 Ex) {1, 2, 3}의 부분 집합은 공집합, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3} 이 있다.

 * */

type Test1 = string extends never ? true : false; // false
// string > never 보다 확장개념이여서 false
type Test2 = string extends string ? string : false; // true
// never < string

const a: Test1 = false;

// keyof 오브젝트의 known key 를 union type 으로 생성한다

type Test3 = keyof 'hello' // string

type Test4 = keyof 5; // number
/**
 * T extends never ? ~~ : ~~
 *
 * T에 known key 가 있는지 없는지 판별한다
 * */

type Test<T> = keyof T extends never ? string : false

type t1 = Test<{ a: string }> // false, a 가 known key
type t2 = Test<{}> // true, known key 가 없음
type t3 = Test<object> //
type t4 = Test<string> // false string method 가 key 로 잡힘
type t5 = Test<{ a: string } | { b: string }> // true, 두 타입의 common known key가 없음

type DeepReadonly<T> = keyof T extends never ?
  T :
  { readonly [K in keyof T]: DeepReadonly<T[K]> }

type Z = DeepReadonly<{ a: string } | { b: string }>

declare const z: Z;

if ("a" in z) {
  z.a = ''
}

// 왜 필요하는지 ??
// 불가능을 나타낸다. 불가능 단어 자체가 모호한데?.
// 타입스크립트는 불가능을 아래와 같이 다양한 방법 나타내준다.

// 1. 값을 포함 할 수 없는 빈 타입
// - 제네릭과 함수에서 허용되지 않는 매개변수
// - 호환되지 않는 타입들의 교차 타입
// - 빈 합집합(무의 합집합)

// 실행이 끝날때 호출자에게 제어를 하지 않는 함수의 반환 타입
// 예) node 의 process.exit
// void 는 호출자에게 함수가 유용한 것을 반한하지 않는다는것이므로 혼동 하지 말자
// 절대로 도달할수엇을 els 분기

// 거부된 프로미스에서 처리된 값의 타입
// const p = Promise.reject('a')

type Res = never | string // string
type Res2 = never & string // never

// 허용할 수 없는 함수 매개변수에 제한을 가한다.

// switch, if-else 문의 모든 상황을 보장한다.

function fn(b: never) {

}

declare let myNever: never;
declare let myAny: any

fn(myNever)
// fn()// 아무 값 안줘도 문제네?
// fn(1)
// fn('foo')
// fn(myAny)

function unknownColor(x: never): never {
  throw new Error('unknown color')
}

type Color = 'red' | 'green' | 'blue';


function getColorName(c: Color): string {
  switch (c) {
    case "blue":
      return 'is red'
    case "green":
      return 'is green'
    case "red":
      return 'is red'
    default:
      return unknownColor(c)
    //     / 'string' 타입은 'never' 타입에 할당할 수 없음
  }
}

type VariantA = {
  a: string,
}

type VariantB = {
  b: number,
}

/**
 타이핑을 부분적으로 허용하지 않는다.
 */
declare function fnB(arg: VariantA | VariantB): void

const input = {a: 'foo', b: 123}
fnB(input)
// a 혹은  b만 인데 제대로 or 조건을 충족시키지 못하고있다

// never 를 사용하면 구조적 타이핑을 비활성화하고
// 사용자가 두 속성을 모두 포함ㅎ나느 객체를 전달하지 못하도록 할 수있다
type VariantObjA = {
  a: string;
  b?: never;
}

type VariantObjB = {
  a?: never;
  b: number;
}


declare function fnObj(arg: VariantObjA | VariantObjB): void

fnObj({a: 'foo'}) // obj key 값이 혼동되지 않게 사용하고 있다
fnObj({b: 1})

/**
 *
 * 의도하지 않은 API 사용을 방지한다.
 *
 */

type Read = {}
type Write = {}
declare const toWrite: Write

declare class MyCache<T, R> {
  put(val: T): boolean;

  get(): R;
}

const cache = new MyCache<Write, Read>()
cache.put(toWrite)

//
declare class ReadOnlyCache<R> extends MyCache<never, R> {
}

const readonlyCache = new ReadOnlyCache<Read>()
// put 이 안되게 되있네
readonlyCache.put(myNever)

/**
 *  이론적으로 도달할 수 없는 분기를 표기한다
 * */
type A = 'foo';
type B = A extends infer C ? (
  C extends 'foo' ? true : false // 이 표현식 c는 a 를 나타낸다
  ) : never
// else case 삼항 연산자가 같이 도달할수없을때 사용

/**
 *  유니언 타입(or 연산자)에서 멤버 필터링
 * 조건부 타입에서 원하지 않는 타입을 필터링 할수있음
 * */

type Foo = {
  name: 'foo'
  id: number
}
type Bar = {
  name: 'bar'
  id: number
}

type All = Foo | Bar

type ExtractTypeByName<T, G> = T extends { name: G } ? T : never;
type ExtractType = ExtractTypeByName<All, 'foo'>

/**
 * 매핑된 타입의 키 필터링
 * */
// 타입스크립트에서 타입은 불변이다. 객체 탕비에서 한 속성을 제거하고 싶으면 기존 타입을 변환 필터링해서
// 새로운 타입을 만들어야한다.
// 매핑된 타입의키를 never 로 조건부로 다시 매핑하면 해당 키가 필터링된다.

type Filter<Obj extends Object, ValueType> = {
  [Key in keyof Obj as ValueType extends Obj[Key] ? Key : never]
  : Obj[Key]
}

interface Foo2 {
  name: string;
  id: number
}

type StringType = Filter<Foo2, string>

// https://simsimjae.tisthttps://simsimjae.tistory.com/463ory.com/463
// type Arguments<T> = T extends (...args: infer A) => any ? A : never

