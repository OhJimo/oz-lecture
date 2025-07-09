
// if 와 switch 는 개발자 마다 선호가 다름

let food = 'melon';

switch (food) {
    case "apple":
    case 'melon':
    case 'cherry':
    case 'banana':
        console.log('fruit')
        break;

    default:
        console.log('not food')
        break;
}

//

let score = 90;
let grade;

if(score >= 90 && score <= 100){
    grade = 'A++'
}

console.log('garde', grade)

