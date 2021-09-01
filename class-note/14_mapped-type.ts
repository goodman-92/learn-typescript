type Heroes = 'Hulk' | 'Capt' | 'Thor'

type HeroAges = { [K in Heroes]: number }
type HeroInfo = { [K in Heroes]: {
	age: number,
	address: string
} }

const ages: HeroAges = {
	Capt: 1, Hulk: 2, Thor: 3
}
