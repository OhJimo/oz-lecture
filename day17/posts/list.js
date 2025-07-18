// list.js (포스트 목록 화면용 JavaScript)
const apiUrl = "https://jsonplaceholder.typicode.com";

// 포스트 목록 표시
async function displayPosts() {
    try {
        // 1단계: API에서 포스트 데이터 가져오기
        console.log("📡 포스트 목록을 가져오는 중...");
        const response = await fetch(`${apiUrl}/posts`);

        // 2단계: 응답이 성공인지 확인
        if (!response.ok) {
            throw new Error("Failed to fetch posts");
        }

        // 3단계: JSON 데이터로 변환
        const posts = await response.json();
        console.log("✅ 포스트 데이터 가져오기 성공:", posts.length + "개");

        // 4단계: HTML 요소 찾기
        const postList = document.getElementById("post-list");
        postList.innerHTML = ""; // 기존 목록 초기화

        // 5단계: 각 포스트를 HTML 요소로 만들어서 화면에 추가
        posts.forEach((post) => {
            // li 요소 생성
            const li = document.createElement("li");
            li.textContent = post.title;
            li.dataset.postId = post.id; // 나중에 사용할 포스트 ID 저장

            // 포스트 클릭 시 상세 페이지로 이동
            li.addEventListener("click", () => {
                console.log(`🔗 포스트 ${post.id} 클릭됨: ${post.title}`);
                window.location.href = `detail.html?postId=${post.id}`;
            });

            // 목록에 추가
            postList.appendChild(li);
        });

        console.log("🎉 포스트 목록 화면 구성 완료!");
    } catch (error) {
        console.error("Error:", error.message);

        // 사용자에게 에러 메시지 표시
        const postList = document.getElementById("post-list");
        postList.innerHTML = `
            <li style="color: red; text-align: center;">
                ❌ 포스트를 불러오는데 실패했습니다.<br>
                인터넷 연결을 확인하고 다시 시도해주세요.
            </li>
        `;
    }
}

// 페이지 로드 시 포스트 목록 표시
displayPosts();
