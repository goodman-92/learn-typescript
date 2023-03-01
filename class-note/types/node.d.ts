
// declare module
// Ambient module 이 컴파일 대상에 포함이 되어있기만 하면 자동으로 타입인지함,
//

declare module 'url' {
  export interface Url {
    protocol?: string;
    hostname?: string;
    pathname?: string;
  }
  export function parse(urlStr: string, parseQuery)

}

declare module 'path'{
  export function normalize(p: string): string;
  export function join(...paths: any[]): string;
  export var sep: string;
}