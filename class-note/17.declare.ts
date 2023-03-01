// declare 선언하다

// declare 키워드는 말하고있다. 컴파일러한테
// 해당 오브젝트가 존재하고 있다고, 그리고 너의 코드안에서 참조할수있음

// referenced : 참조
// declare:
// elsewhere : 다른곳
// aware of it : 그것을 알고, aware 알고 있는

// .d.ts 파일로도 지정할수있다.

// declare 로
// var,let, const, type, interface, class, enum, function, module
// namespace ?


declare module '*png'{
  const src: string;
  export default src;
}
// 타입스크립트컴파일러가 파일, 혹은 이미지 를 import 할때 이렇게도 선언할수있음




// 글로벌로 선언 방법:
declare var CPT: number;
declare function sayHello(hello: string): void;

// 전역객체에서 선언한걸썻다
globalThis.ENV

// 실행환경 상관없이 전역 개체를 참조하는 통일된 수단을 제공한다.
// https://huns.me/2022-05-22-43-TypeScript%EC%97%90%EC%84%9C%20%EC%A0%84%EC%97%AD%20%EA%B0%9C%EC%B2%B4%20%ED%83%80%EC%9E%85%EC%9D%80%20%EC%96%B4%EB%96%BB%EA%B2%8C%20%EC%A0%95%EC%9D%98%ED%95%98%EB%82%98%EC%9A%94
declare module "url"{

}

// 컴파일 정보만 알려주고 싶은걸 declare namespace 를 사용한다.
// 이것을 Ambient Namespace 또는 Internal Module

declare namespace D3 {
  export interface Selectors{
    select: {
      (selector: string): Selection;
      (element: EventTarget): Selection;
    }
  }
  export interface Event{
    x: number;
    y: number;
  }

  export interface Base extends Selectors{
    event: Event;
  }
}
declare var d3: D3.Base;
