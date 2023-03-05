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