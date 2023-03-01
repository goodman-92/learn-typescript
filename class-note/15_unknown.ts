/**
 *  any vs unknown
 *
 * */


// any 는 모든게 거의됨
let a: any

a = 1
a = 'own'
a = false
a.b;

// unknown
let b: unknown

// 프로퍼티로 접근도 안된다
// b.a;

// 특정 메소드도 접근이 안된다.
// b.trigger()

// 인스턴스 생성도 잘안됨
// new b()

// 타입가드를 통해야만 제대로 실행할수있다
let variable: unknown

variable = () => {
    console.log('검증된 variable 이야')
}
// declare function isFunction(x: unknown): x is Function
function isFunction(x: unknown): x is Function{
    return typeof x === 'function'
}


if (isFunction(variable)) {
    // variable.b() // no
    variable() // OK
}

/**
 *  언제 사용할수있을까?
 *
 * */

// 1. any 대신 사용

// 2. 타입 가드일때 인자를 넣어서 할수있음

const isOfType = <T>(varToBeChecked: unknown, propertyToCheckFor: keyof T): varToBeChecked is T => {
    return (varToBeChecked as T)[propertyToCheckFor] !== undefined
}

interface SomethingType {
    foo: string;
    bar: number;
    zoo: boolean
}

const anything = {
    foo: 2
}
console.log(isOfType<SomethingType>(anything, 'foo'))
