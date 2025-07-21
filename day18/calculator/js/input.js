// input.js - 입력 처리 함수
const VALID_NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const VALID_OPERATORS = ["+", "-", "*", "/"];

const resetDisplay = () => {
    const display = document.getElementById("display");
    if (display) {
        display.textContent = "0";
    }
    return "";
};

const setDisplay = (text) => {
    const display = document.getElementById("display");
    if (display) {
        display.textContent = text || "0";
    }
    return text;
};

const subDisplay = () => {
    const display = document.getElementById("display");
    if (display) {
        const currentText = display.textContent;
        if (currentText.length > 1) {
            const newText = currentText.slice(0, -1);
            display.textContent = newText;
            return newText;
        } else {
            display.textContent = "0";
            return "";
        }
    }
    return "";
};

const appendNumber = (number, currentInput) => {
    if (!VALID_NUMBERS.includes(number)) {
        throw new Error("유효한 숫자를 입력하세요.");
    }

    // 현재 화면이 "0"이거나 비어있으면 새 숫자로 교체
    if (currentInput === "0" || currentInput === "") {
        return setDisplay(number);
    }

    // 아니면 기존 숫자 뒤에 추가
    return setDisplay(currentInput + number);
};

const setOperator = (op, currentInput) => {
    if (!VALID_OPERATORS.includes(op)) {
        throw new Error("유효한 연산자를 선택하세요.");
    }
    if (!currentInput) {
        throw new Error("숫자를 먼저 입력하세요.");
    }
    return op;
};

export {
    resetDisplay,
    setDisplay,
    subDisplay,
    appendNumber,
    setOperator,
    VALID_NUMBERS,
    VALID_OPERATORS,
};
