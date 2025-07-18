// detail.js (포스트 상세 화면용 JavaScript)
const apiUrl = "https://jsonplaceholder.typicode.com";

// 포스트 상세 정보 표시
async function displayPostDetail() {
    try {
        // 1단계: URL에서 postId 추출하기
        const urlParams = new URLSearchParams(window.location.search);
        const postId = urlParams.get("postId");

        console.log("🔍 현재 URL:", window.location.href);
        console.log("📋 추출된 postId:", postId);

        // postId가 없으면 에러
        if (!postId) {
            throw new Error("No post ID provided");
        }

        let post = {};

        // 2단계: localStorage에서 캐시 확인 (도전 과제)
        const cacheKey = `post_${postId}`;
        const cachedData = localStorage.getItem(cacheKey);

        if (cachedData) {
            const parsedCache = JSON.parse(cachedData);
            const now = new Date().getTime();
            const cacheTime = parsedCache.timestamp;
            const fiveMinutes = 5 * 60 * 1000; // 5분을 밀리초로 변환

            // 캐시가 5분 이내면 사용
            if (now - cacheTime < fiveMinutes) {
                post = parsedCache.data;
                console.log("📦 Post loaded from localStorage");
            } else {
                console.log("⏰ 캐시가 만료되어 새로 가져옵니다");
                localStorage.removeItem(cacheKey); // 만료된 캐시 삭제
            }
        }

        // 3단계: 캐시에 없으면 API에서 가져오기
        if (!post.id) {
            console.log("📡 API에서 포스트 데이터를 가져오는 중...");
            const response = await fetch(`${apiUrl}/posts/${postId}`);

            if (!response.ok) {
                throw new Error(`Failed to fetch post ${postId}`);
            }

            post = await response.json();
            console.log("✅ Post fetched from API");

            // 4단계: localStorage에 캐시 저장 (도전 과제)
            const cacheData = {
                data: post,
                timestamp: new Date().getTime(),
            };
            localStorage.setItem(cacheKey, JSON.stringify(cacheData));
            console.log("💾 포스트 데이터가 localStorage에 저장되었습니다");
        }

        // 5단계: 화면에 포스트 표시
        renderPost(post);
    } catch (error) {
        console.error("Error:", error.message);
        document.getElementById("post-detail").innerHTML = `
            <div style="text-align: center; color: red; padding: 20px;">
                <h3>❌ 오류 발생</h3>
                <p>${error.message}</p>
                <p>잠시 후 다시 시도해주세요.</p>
            </div>
        `;
    }
}

// 포스트 렌더링 함수
function renderPost(post) {
    const postDetail = document.getElementById("post-detail");

    // HTML 구성
    postDetail.innerHTML = `
        <div style="border: 1px solid #ddd; border-radius: 8px; padding: 20px; background: #f9f9f9;">
            <div style="margin-bottom: 10px; color: #666; font-size: 14px;">
                포스트 ID: ${post.id} | 작성자 ID: ${post.userId}
            </div>
            <h3 style="color: #333; margin-top: 0; margin-bottom: 15px; line-height: 1.4;">
                ${post.title}
            </h3>
            <p style="color: #555; line-height: 1.6; white-space: pre-line;">
                ${post.body}
            </p>
            <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #eee; color: #999; font-size: 12px;">
                💡 이 데이터는 JSONPlaceholder API에서 가져온 샘플 데이터입니다.
            </div>
        </div>
    `;

    console.log("🎉 포스트 상세 화면 구성 완료!");
    console.log("📄 포스트 제목:", post.title);
}

// 추가 기능: 캐시 상태 확인 (개발자 도구용)
function checkCacheStatus() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("postId");

    if (postId) {
        const cacheKey = `post_${postId}`;
        const cachedData = localStorage.getItem(cacheKey);

        if (cachedData) {
            const parsedCache = JSON.parse(cachedData);
            const now = new Date().getTime();
            const cacheAge = Math.floor((now - parsedCache.timestamp) / 1000);

            console.log("📊 캐시 상태:");
            console.log("- 캐시 키:", cacheKey);
            console.log(
                "- 캐시 생성 시간:",
                new Date(parsedCache.timestamp).toLocaleString()
            );
            console.log("- 캐시 나이:", cacheAge + "초");
            console.log("- 캐시 유효성:", cacheAge < 300 ? "유효" : "만료");
        } else {
            console.log("📊 캐시 없음");
        }
    }
}

// 페이지 로드 시 포스트 상세 정보 표시
displayPostDetail();

// 개발자를 위한 캐시 상태 체크 (콘솔에서 checkCacheStatus() 호출 가능)
window.checkCacheStatus = checkCacheStatus;
