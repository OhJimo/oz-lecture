// 사용자 입력
// input 검증

const STAR = "*";

const getPromptInput = () => {
    let input;
    let isNotValid = true;
    while (isNotValid) {
        let inputStr = prompt("출력할 별 갯수를 입력하세요.");
        input = Number(inputStr);
        if (isNaN(input)) {
            isNotValid = true;
            console.log(
                `[입력: ${inputStr}] Invalid input! This is not number. Please enter number.`
            );
            continue;
        }
        if (input >= 1 && input <= 10) {
            isNotValid = false;
        } else {
            console.log(
                `[입력: ${inputStr}] Invalid input! Enter a number between 1 and 10.`
            );
        }
    }
    return input;
};

function getStars(count) {
    var stars = "";
    for (let i = 0; i < count; i++) {
        stars += STAR;
    }
    return stars;
}

function printResult(input, stars) {
    console.log(`[입력: ${input}] ${stars}`);
}

// 기본과제
const printNormalStars = function (input) {
    console.log(input);
    const stars = getStars(input);
    printResult(input, stars);
};

// 역순별출력
const printReverseStars = function (input) {
    // 3
    // ***
    // **
    // *
    for (let i = input; i >= 0; i--) {
        const stars = getStars(i);
        if (stars === "") break;
        console.log(stars);
    }
};

console.log("Enter the number of stars (1-10):");
const input = getPromptInput();
// printNormalStars(input);
printReverseStars(input);
printSquare(input);
