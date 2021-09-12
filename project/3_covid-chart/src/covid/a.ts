interface Hero {
  name: string;
  skill: string;
}

const capt: Hero = {
  name: 'capt',
  skill: 'shield',
};

// 정의된 함수를 적용해야한다
// const capt2: Hero = {};

// 타입 단언의 위험
const capt3 = {} as Hero;
// capt3.skill

// const a: string | null;

// 타입이 null 이 들어올수도 있으니 단언을 해서 입력하는게 옳지 않다
// a!.toString();
