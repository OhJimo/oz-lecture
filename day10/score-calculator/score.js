
// 사용자 입력

let inputStr = prompt("점수를 입력하세요.");
let score = Number(inputStr);
const MAX_SCORE = 105;

// let input = parseInt(inputStr);
// console.log(input);

// 입력 유효성 검사

if(isNaN(score) || score < 0 || score > 100){
    console.log("잘못된 점수입니다! 0과 100 사이의 숫자를 입력해주세요");
} else {
    // 최종점수 계산 (5점 추가)
    score++;
    score += 4;
    
    // 100점 초과 점수 제한
    if(score > 100) score = 100;
    
    let finalScore = score

    // 등급 결정 (if문)
    var grade;
    if (finalScore >= 100) {
        grade = "S";
    } else if(finalScore >= 90) {
        grade = "A";
    } else if(finalScore >= 80) {
        grade = "B";
    } else if(finalScore >= 70) {
        grade = "C";
    } else if(finalScore >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }


    // 합격/불합격 여부 결정 (삼항 연산자)
    let status = finalScore >=60 ? '합격' : '불합격';


    // 등급에 따른 console.log() 출력 (switch문)
    let message;
    switch (grade) {
        case 'S':
            message = "Perfect Score!";
            break;
        case 'A':
            message = "정말 잘했어!";
            break;
        case 'B':
            message = "잘했어!";
            break;
        case 'C':
            message = "만족스러운 성과야";
            break;
        case 'D':
            message = "더 노력이 필요해";
            break;
        case 'F':                
            message = '더 열심히 해봐!';
            break;
    }
    

    // 콘솔 출력
    console.log('최종 점수:', finalScore);
    console.log('등급:', grade);
    console.log('합격 여부:', status);
    console.log('문구:', message);
}



