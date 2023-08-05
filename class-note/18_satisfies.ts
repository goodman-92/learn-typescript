type Colors = "red" | "green" | "blue";

type RGB = [red: number, green: number, blue: number]

// 오타는 잡힌다
const palette: Record<Colors, RGB | string> = {
  red: [255, 0 ,0],
  green: '#00ff00',
  blue: [0, 0, 255]
}

const redComponent = palette.red.at(0);

// green 이 정확히 어떤타입인지 모른다. 객체가 유니언 타입이이어서 정확히 모른다
const greenNormalized = (palette.green as string).toUpperCase()


const palette2 ={
  red: [255, 0 ,0],
  green: '#00ff00',
  blue: [0, 0, 255]
} satisfies Record<'red' | 'green' | 'blue', [number, number, number] | string>

// 타입추론된 const 객체가 되면서 각각의 요소들을 record 타입으로 다시 한번 검사해줘서 타입을 생성해준다.
// 객체검사용

const obj = {
  a: 10,
  b: {a:10, b: 20}
} satisfies { a: number, b: {a: number, b: number} }

/** nextjs 에서 매우 활용할수있다 */

export const getStaticProps = () : {[key: string]: any} =>{
  return{
    props: {
      id: '123'
    }
  }
}
export const getStaticProps2 = () => {
  return{
    props: {
      id: '123'
    }
  } satisfies { props: {id: string }}
}

const a = getStaticProps()
const b = getStaticProps2().props.id.toUpperCase()



// satisfied 조금 더 루저타입에 대해서 안전하게 사용할수있습니다.
// Record Type
import RootLayout from "../project/next-sample-app/app/layout";

type GHissueURLParams = {
  title: string;
  body: string;
}

// example 1
const params = new URLSearchParams({
  title: "New Issue",
  body: '1'
} satisfies GHissueURLParams)

const params2 = new URLSearchParams({
  title: "New Issue",
  a: 'b'
} as GHissueURLParams)


// example 2
type Post = {
  title: string;
  content: string;
}

// json stringify 에는 제대로 타입을 매길수없다
// 활용해서 제대로 타일을 넣는다
fetch('api/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: '',
    content: 'Lorem ipsum'
  } satisfies Post)
})

// Infer tuples without as const with satisfies

// @errors: 2493
type MoreThanOneMember = [any, ...any[]]

const array = [1,2,3];

const maybeExists = array[3];
// 존재하지 않지만 에러가 체크 안되고잇음

const tuple = [1,2,3,] satisfies MoreThanOneMember

const doesNotExist = tuple[4]
// out of bounds 에러를 줘야하지만 주지않는다 설정이 먼가 꼬인듯?

// ex3
// 강제로 as const 에 type 줄 수 있습니다.

type RouteObject = Record<string, { url: string; searchParams: Record<string, string> }>

// 기존 타입은 리코드 타입에대해서 추론이 안되는 문제가있음
// 타입안주고 as const 만 할경우 또 제대로 타입을 안잡아줌
const routes = {
  home: {
    url: '',
    searchParams: {
    }
  },
  about:{
    url: 'about',
  }
} as const;


// 만족시켜줄수잇게 key 값들을 추론시켜주었습니다.
const routes2 = {
  home: {
    url: '',
    searchParams: {
    }
  },
  about:{
    url: 'about',
    searchParams: {

    }
  }
} as const satisfies RouteObject;

routes2.about.url

type NavElement = {
  title: string;
  url?: string;
  children?: readonly NavElement[];
};

const nav = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    children: [
      {
        title: "Team",
        url: "/about/team",
      },
    ],
  },
] as const satisfies readonly NavElement[];
// 정확하게 추론을 도와준다

