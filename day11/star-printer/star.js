
// 사용자 입력
let inputStr = prompt("출력할 별 갯수를 입력하세요(1-10 숫자만).");
let input = Number(inputStr);
console.log("입력값:", input);

const MAX_STARS = 10;
var stars;

//

while(true){
    if(!isNaN(input) && input >= 1 && input <= MAX_STARS){
        break;
    } else {
        console.log("잘못된 입력입니다! 1-10까지의 숫자만 입력하세요.");
        inputStr = prompt("출력할 별 갯수를 입력하세요(1-10 숫자만 입력).");
        input = Number(inputStr);
    continue;
    }
}

//

function printStars(count = 1) {  
    var stars = "";
    for(let i = 0; i < count; i++){
        stars = stars + "⭐"; 
    }
    console.log(stars);
}

printStars(input);