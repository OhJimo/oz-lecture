// 과제: HTML 파일에 연결하여 브라우저에서 실행하세요

// DOM 요소 선택
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const clearButton = document.getElementById("clearButton");
const taskCount = document.getElementById("taskCount");
const prioritySelect = document.getElementById("priority"); // 우선순위 선택 추가!

// 할 일 개수 표시
function updateTaskCount() {
    const count = taskList.children.length;
    taskCount.textContent = `현재 할 일: ${count}개`;
}

// 입력값 검증 및 할 일 추가 함수
function addTask() {
    const taskText = taskInput.value.trim();
    const priority = prioritySelect.value; // 우선순위 값 가져오기!

    // 입력값이 비어있는지 확인 (유효성 검증) early-return;
    console.log(taskText, priority);
    if (taskText === "") {
        alert("할 일을 입력해주세요!");
        return;
    }

    // 새로운 리스트 아이템 생성
    const li = document.createElement("li");
    li.className = "task-item";

    // 할 일 텍스트 추가
    const span = document.createElement("span");
    span.textContent = taskText;

    // 우선순위에 따른 스타일 적용!
    if (priority === "high") {
        span.className = "high-priority";
    } else {
        span.className = "low-priority";
    }

    // 삭제 버튼 생성
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "삭제";
    deleteButton.className = "delete-button";

    // 삭제 버튼 이벤트 리스너
    deleteButton.addEventListener("click", function () {
        taskList.removeChild(li);
        updateTaskCount();
    });

    // 완료 상태 토글 이벤트 리스너
    span.addEventListener("click", function () {
        span.classList.toggle("completed");
    });

    // 요소 조립
    li.appendChild(span);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    // 입력창 초기화
    taskInput.value = "";

    // 우선순위 선택도 초기화 (선택사항)
    prioritySelect.value = "low";

    // 개수 업데이트
    updateTaskCount();
}

// 모든 할 일 삭제 함수
function clearAllTasks() {
    taskList.innerHTML = "";
    updateTaskCount();
}

// 추가 버튼 클릭 이벤트 적용
addButton.addEventListener("click", addTask);

// 입력창에서 Enter 키 이벤트 적용 (event.key === 'Enter')
taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// 전체 삭제 버튼 클릭 이벤트 적용
clearButton.addEventListener("click", clearAllTasks);

// 페이지 로드 시 초기 개수 표시
updateTaskCount();
