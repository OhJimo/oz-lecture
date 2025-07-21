// main.js - 조카 코드에서 딱 이것만 수정!

import calculate, {
    appendNumber,
    setOperator,
    resetDisplay,
    subDisplay,
    VALID_NUMBERS,
    VALID_OPERATORS,
} from "./index.js";

// 전역 상태 변수들 (index.js와 동기화를 위해)
let currentInput = "";
let firstNumber = null;
let operator = null;
let isError = false;

// HTML 버튼들을 위한 전역 함수 등록
window.appendNumber = (num) => {
    try {
        if (isError) {
            resetDisplay();
            isError = false;
            currentInput = "";
        }
        currentInput = appendNumber(num, currentInput);
    } catch (error) {
        console.error("숫자 입력 오류:", error.message);
    }
};

window.setOperator = (op) => {
    try {
        if (currentInput) {
            operator = setOperator(op, currentInput);
            firstNumber = Number(currentInput);
            currentInput = "";
            resetDisplay();
        }
    } catch (error) {
        console.error("연산자 설정 오류:", error.message);
    }
};

window.calculate = () => {
    try {
        if (firstNumber !== null && operator && currentInput) {
            const secondNumber = Number(currentInput);
            if (isNaN(secondNumber)) {
                throw new Error("유효한 숫자를 입력하세요.");
            }

            // operations.js에서 직접 계산
            import("./operations.js").then(
                ({ default: calculateOperation }) => {
                    try {
                        const result = calculateOperation(
                            firstNumber,
                            secondNumber,
                            operator
                        );

                        // history.js에서 기록 저장
                        import("./history.js").then(
                            ({ default: saveHistory }) => {
                                import("./index.js").then(({ history }) => {
                                    saveHistory(
                                        firstNumber,
                                        operator,
                                        secondNumber,
                                        result,
                                        history
                                    );
                                });
                            }
                        );

                        // 결과 표시
                        const resultElement = document.getElementById("result");
                        if (resultElement) {
                            resultElement.classList.remove(
                                "d-none",
                                "alert-danger"
                            );
                            resultElement.classList.add("alert-info");
                            resultElement.textContent = `결과: ${result}`;
                        }

                        // 상태 초기화
                        resetDisplay();
                        currentInput = "";
                        firstNumber = null;
                        operator = null;
                        isError = false;
                    } catch (error) {
                        import("./error.js").then(({ showError }) => {
                            showError(error.message);
                            isError = true;
                        });
                    }
                }
            );
        }
    } catch (error) {
        import("./error.js").then(({ showError }) => {
            showError(error.message);
            isError = true;
        });
    }
};

window.clearDisplay = () => {
    currentInput = "";
    firstNumber = null;
    operator = null;
    isError = false;
    resetDisplay();
};

// 키보드 이벤트 처리
document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (VALID_NUMBERS.includes(key)) window.appendNumber(key);
    if (VALID_OPERATORS.includes(key)) window.setOperator(key);
    if (key === "Enter") window.calculate();
    if (key === "Backspace") subDisplay();
});

// 페이지 로드 시 초기화
document.addEventListener("DOMContentLoaded", () => {
    resetDisplay();
    console.log("🧮 계산기가 준비되었습니다!");
});
