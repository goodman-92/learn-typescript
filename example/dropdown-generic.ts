// interface Email {value: string;selected: boolean;}

// interface ProductNumber {value: number;selected: boolean}

// interface TrueFalse {value: boolean;selected: boolean;}

interface DropdownItem<T> {
	value: T;
	selected: boolean;
}


const emails: DropdownItem<string>[] = [
	{value: 'naver.com', selected: true},
	{value: 'gmail.com', selected: false},
	{value: 'hanmail.net', selected: false},
];

const numberOfProducts: Array<DropdownItem<number>> = [
	{value: 1, selected: true},
	{value: 2, selected: false},
	{value: 3, selected: false},
];



// 유니온타입으로 받을수있게됨
// function createDropdownItem(item: Email | ProductNumber) {
// function createDropdownItem(item: DropdownItem<string> | DropdownItem<number>) {     => 난 이게 더좋다
function createDropdownItem<T>(item: DropdownItem<T>) {
	const option = document.createElement('option');
	option.value = item.value.toString();
	option.innerText = item.value.toString();
	option.selected = item.selected;
	return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
	const item = createDropdownItem<string>(email);
	const selectTag = document.querySelector('#email-dropdown');
	selectTag.appendChild(item);
});

numberOfProducts.forEach((product) => {
	const item = createDropdownItem<number>(product)
	console.log(item.value) // 형타입을 다 스트링형으로 변환하니 이제 스트링이다
	const selectTag = document.querySelector('#production-name');
	selectTag.appendChild(item);
})

// 하나의 타입으로 여러가지 타입을 정의할수 잇음