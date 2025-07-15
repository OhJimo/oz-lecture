// 변수 선언하기
const MAX_TIME = 10; // 최대 입력 가능한 시간 (절대 안 바뀜)
let timerCount; // 카운트다운 숫자 (계속 바뀜: 5→4→3→2→1)
var timerMessage = ""; // 타이머 메시지 (var 사용 요구사항)

// 현재 실행 중인 타이머를 저장할 변수
let currentTimer = null;

// 타이머 시작 함수 만들기
function startTimer(seconds = 10) {
    // 입력값 유효성 검사 (1~10 사이 숫자인지 확인)
    if (isNaN(seconds) || seconds < 1 || seconds > 10) {
        // 에러 메시지 화면에 표시
        const displayElement = document.getElementById("timerDisplay");
        displayElement.textContent = "유효한 숫자(1-10)를 입력하세요!";
        displayElement.classList.add("error"); // 빨간색으로 만들기
        return; // 함수 종료
    }

    // 에러 상태 초기화 (이전 에러 메시지 지우기)
    const displayElement = document.getElementById("timerDisplay");
    displayElement.classList.remove("error");

    // 시작 버튼 비활성화 (타이머 실행 중 중복 실행 방지)
    const startButton = document.getElementById("startTimer");
    startButton.disabled = true;

    // 타이머 카운트 시작
    timerCount = seconds; // 입력받은 숫자로 시작

    // 즉시 화면에 첫 번째 숫자 표시
    displayElement.textContent = `타이머: ${timerCount}초`;

    // "1초마다 이 함수를 실행해줘"라고 브라우저에게 부탁
    currentTimer = setInterval(() => {
        timerCount--; // 1초씩 감소 (5→4→3→2→1→0)

        if (timerCount > 0) {
            // 아직 시간이 남았으면 화면에 표시
            displayElement.textContent = `타이머: ${timerCount}초`;
        } else {
            // 시간이 다 되었으면 타이머 종료
            displayElement.textContent = "타이머 종료!";

            // 🎯 4단계: 타이머 정리하기
            clearInterval(currentTimer); // 타이머 멈추기
            currentTimer = null;

            // 시작 버튼 다시 활성화
            startButton.disabled = false;
        }
    }, 1000); // 1000ms = 1초마다 실행
}

// 버튼 클릭 이벤트 연결하기
// 페이지가 완전히 로드된 후 실행
document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("startTimer");
    const inputElement = document.getElementById("timerInput");

    // 버튼 클릭했을 때 실행될 함수
    startButton.addEventListener("click", () => {
        // HTML 입력란에서 값 가져오기
        const inputValue = inputElement.value;

        // 문자열을 숫자로 변환
        const seconds = Number(inputValue);

        // 타이머 시작!
        startTimer(seconds);
    });

    // 엔터키 눌렀을 때도 작동하도록
    inputElement.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            startButton.click(); // 버튼 클릭과 동일한 동작
        }
    });
});
