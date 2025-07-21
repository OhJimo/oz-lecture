// error.js - 에러 처리 함수들

// 에러 메시지 표시 (화살표 함수 사용)
const showError = (message) => {
    const resultElement = document.getElementById("result");
    if (resultElement) {
        // 기존 클래스들 제거
        resultElement.classList.remove("d-none", "alert-info");
        // 에러 스타일 추가
        resultElement.classList.add("alert-danger");
        // 에러 메시지 표시
        resultElement.textContent = `오류: ${message}`;
    }
};

// 에러 메시지 제거 (화살표 함수 사용)
const removeError = () => {
    const resultElement = document.getElementById("result");
    if (resultElement) {
        // 결과 영역 숨기기
        resultElement.classList.add("d-none");
        // 모든 스타일 클래스 제거
        resultElement.classList.remove("alert-danger", "alert-info");
        // 텍스트 비우기
        resultElement.textContent = "";
    }
};

// 함수들 내보내기
export { showError, removeError };
