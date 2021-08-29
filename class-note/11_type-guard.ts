interface Developer {
	name: string;
	skill: string;
}

interface Person {
	name: string;
	age: number;
}

function introduce(): Developer | Person {

	return {
		age: 33, name: "Tony", skill: "Iron Making"
	}
}

const tony = introduce();

// console.log(tony.skill, tony.name) // 유니온 타입의 공통된 속성만 지원되지 skill 을 접근불가, name 만 접근 가능

if ((tony as Developer).skill) {
	const skill = (tony as Developer).skill;
	console.log(skill);
} else if ((tony as Person).age) {
	const age = (tony as Person).age;
	console.log(age);
}

// function is 해당타입() {}
// 타입 가드 정의
const isDeveloper = (target: Developer | Person): target is Developer => {
	return (target as Developer).skill !== undefined;
};

if (isDeveloper(tony)) {
	tony.skill;
} else {
	tony.age;
}