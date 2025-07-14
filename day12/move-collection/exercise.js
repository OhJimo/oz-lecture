// 변수 정리
const defaultGenre = "Unknown";
let movie;
var count;

// movie 기본 포멧
movie = {
    title: "string",
    director: "string",
    year: "number",
    genre: "string",
};

// 영화 객체들

const movie1 = {
    title: "케이팝 데몬 헌터스",
    director: "매기 강",
    year: 2024,
    genre: "액션",
};

const movie2 = {
    title: "반지의 제왕",
    director: "피터 잭슨",
    year: 2001,
    genre: "판타지",
};

const movie3 = {
    title: "슈퍼맨",
    director: "리처드 도너",
    year: 1978,
    genre: "액션",
};

// 영화 배열

let movies = [movie1, movie2, movie3];

// 함수

function printMovies(movies) {
    console.log("Movie Collection:");

    for (let i = 0; i < movies.length; i++) {
        const element = movies[i];
    }
}

// 출력
printMovies(movies);
console.log("Total Movies: ", count);
