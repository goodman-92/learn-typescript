 ## 타입스크립트  요약
 
```
    Microsoft C# 개발자가 만듬
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
```   
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

```
    

```