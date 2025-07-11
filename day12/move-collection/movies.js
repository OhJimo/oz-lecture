const defaultGenre = "Unknown";
let movie;
var count;

// 1. 준비: 영화 객체들 생성

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

// 2. 저장: 배열에 담기

let movies = [movie1, movie2, movie3];

// 3. 처리: 함수로 가공
function printMovies(movies) {
    console.log("Movie Collection:");

    for (let i = 0; i < movies.length; i++) {
        const element = movies[i];
        console.log(
            `${i + 1}. Title: ${movie1.title}, Director: ${
                movie1.director
            }, Year: ${movie1.year}, Genre: ${movie1.genre}`
        );
        console.log(
            `${i + 2}. Title: ${movie2.title}, Director: ${
                movie2.director
            }, Year: ${movie2.year}, Genre: ${movie2.genre}`
        );
        console.log(
            `${i + 3}. Title: ${movie3.title}, Director: ${
                movie3.director
            }, Year: ${movie3.year}, Genre: ${movie3.genre}`
        );
        break;
    }
}

count = movies.length;

// 4. 출력: 실행
printMovies(movies);
console.log(`Total Movies: ${count}`);

// function addMovies(index, ...newMovies) {
//     console.log(index);
//     console.log(newMovies);
// }

// addMovies(0, movie, movie, movie, movie);
