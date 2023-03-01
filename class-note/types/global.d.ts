// 전역 개체는 특별한 존재이며 import 로 참조할수 없는 모듈이기 때문에 전역개체의 타입을 커스텀할수잇는 문법 제공
declare global {
  interface Window {
    ENV: any
  }
  var country: any;

}

// 해당 글로벌이어도 모듈로 인식하기위해 export 를 가짜로라도 넣어야한다
export {}