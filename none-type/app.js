// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('.username');
var email = document.querySelector('.email');
var address = document.querySelector('.address');

// user data
var user = {};

function startApp() {
	axios
		.get(url)
		.then(function (response) {
			console.log(response);
			user = response.data;
			// TODO: 이름, 이메일, 주소 표시하기
			username.textContent = user.username;
			email.textContent = user.email;
			address.textContent = user.addres; // 에러로 나올수 있다. 오탈자를 잡을수없다
		})
		.catch(function (error) {
			console.log(error);
		});
}

startApp();
