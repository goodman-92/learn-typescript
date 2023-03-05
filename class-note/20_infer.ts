/**
 *
 * The extends keyword is versatile.
 * It can also apply constraints to generic type parameters.
 * For example:
 *
 * */
function getUserName<T extends {name: string}>(user: T){
  return user.name
}

// 항상 함수 name 이라는 string 타입을 가질수있다.
type User = {
  age: number,
}

/**
 *  g
 * */

getUserName<User>({ name: '1', age: 2})

// versatile 변하기 쉬운

// Retrieve 되찾다 매우다

type Names = string[]
type Name = Names[number]

type Tuple = [string, number]
type Age = Tuple[1]

type Fn  <A extends string, B extends string = 'world'>   =  [A, B]
//   ↑    ↑           ↑                          ↑              ↑
// name parameter parameter type          default value   function body/return statement

type Result = Fn<'hello'> // ["hello", "world"]

function func(arg: Result) {
  return arg.join()
}

func(['hello', 'world'])


//-------------//
function describePerson(person: {
  name: string,
  age: number,
  hobbies: [string, string]
}) {
  return `${person.name} is ${person.age} years old and love ${person.hobbies.join(" and  ")}.`;
}

const alex = {
  name: 'Alex',
  age: 20,
  hobbies: ['walking', 'cooking', 'playingGame'] // type string[] != [string, string]
}
// 타입을 제공해주지 않는다 라이브러ㅇ리에서
describePerson(alex)

// /* Type string[] is not assignable to type [string, string] */
// hobbies 가 제대로 타입이 안된다


/**
 *
 * 우선 타입스크립트 조건절이 문제인듯
 * The Infer keyword and conditional typing in TypeScript allows us to take a type and
 * isolate any piece of it for later use.
 *
 * */

// never 로 타입 줄일수 잇음
type StringFromType<T> = T extends string ? 'string' | 'varchar' : never;

type lorem = StringFromType<'lorem ipsum'> // string
type ten = StringFromType<10> // never

const loremStr: lorem = 'varchar'
// const nums: 아무것도 선언 못하게 막은다

type StringFromType2<T> = T extends string
  ? 'string'
  : T extends boolean
    ? 'boolean'
    : T extends Error
      ? 'error'
      : never

type lorem2 = StringFromType2<'lorem ipsum'>
type isActive = StringFromType2<false> // 'boolean
type unassignable = StringFromType2<TypeError> // 'error'


const lorem2Str: lorem2 = 'string';
const isActive: isActive = 'boolean'

type NullableString = string | null | undefined
type NonNullable<T> = T extends null | undefined ? never : T //
type CondUnionType = NonNullable<NullableString> // evalutes to string
// null undefined 가 never 타입으로가고 string 만 나와서 string 으로 되는듯

const str: CondUnionType = '1'

// const str2: CondUnionType = 1

// 제외한 포함에따라서 컨디션을 나눌수 있다
type Extract<T, U> = T extends U ? T : never
// 발췌한
type Exclude<T, U> = T extends U ? never : T
// 제외하는 타입

// 2번째에 포함 되지 않는 타입이면 다 never인다
type Strings = Extract<string, string | undefined>
type OnlyString =  Exclude<number, string | undefined | number>

/// https://blog.logrocket.com/understanding-infer-typescript/