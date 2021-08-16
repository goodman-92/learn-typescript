// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var usernameElem = document.querySelector('.username');
var emailElem = document.querySelector('.email');
var addressElem = document.querySelector('.address');

// user data
var user = {};

/**
 * @typedef {object} Address
 * @property {string} street
 *
 * */


/**
 *  @typedef {object} User
 *  @property {string} username
 *  @property {string} email
 *  @property {Address} address
 * */


// 제네릭으로 타입을 지정해줌, 지금은 모르니 패스하자
/**
 *  @return {Promise<User>}
 *
 * */
function fetchUser() {
	return axios.get(url).then(({data}) => data)
}

function startApp() {
	debugger
// 위에 js doc 을 다니까 추적이 되네 신기방쓰
	fetchUser().then(({address, email, username}) => {
		usernameElem.textContent = username;
		emailElem.textContent = email;
		addressElem.textContent = address.street; // 에러로 나올수 있다. 오탈자를 잡을수없다
	}).catch(console.error)
}

startApp();
