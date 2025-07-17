const output = document.querySelector("#output");
const btnFetchPosts = document.querySelector("#fetchPosts");
const inputPostIds = document.querySelector("#postIds");

const clearOutput = () => {
  output.innerHTML = `<div id="output"></div>`;
};

const fetchPost = async (postId) => {
  try {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    let post = await response.json();
    return post;
  } catch (error) {
    document.getElementById(
      "output"
    ).innerHTML = `<p>에러: ${error.message}</p>`;
  }
};

const fetchMultiplePosts = async (postIds) => {
  const posts = [];
  for (const postId of postIds) {
    const post = await fetchPost(postId);
    posts.push(post);
  }
  posts.forEach((post, idx) => {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.textContent = post?.title
      ? `post${idx + 1}: ${post.title} [${post.id}]`
      : `postX: 에러: 유효한 ID(1-100)를 입력하세요`;
    if (!post?.title) postDiv.classList.add("error");
    output.appendChild(postDiv);
  });
};

const handleClickSearch = async () => {
  const postIdsString = inputPostIds.value;
  const postIds = postIdsString.split(",").map((postId) => Number(postId));
  clearOutput();
  await fetchMultiplePosts(postIds);
};

btnFetchPosts.addEventListener("click", handleClickSearch);
