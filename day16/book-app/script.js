// 도서 데이터를 저장할 배열
const books = [];
// 대여 상태를 관리할 배열
const rentals = [];

// 도서 추가 기능
function addBook() {
    const titleInput = document.getElementById("bookTitle");
    const priceInput = document.getElementById("bookPrice");
    const title = titleInput.value.trim();
    const price = Number(priceInput.value);

    if (title === "" || isNaN(price) || price <= 0) {
        alert("도서 제목과 유효한 가격(0 이상)을 입력하세요!");
        return;
    }

    const book = { title, price };
    books.push(book);

    // 대여 상태 클로저 객체 생성 및 저장
    const rental = createBookRental(title);
    rentals.push(rental);

    const bookList = document.getElementById("bookList");
    const li = document.createElement("li");
    li.className = "book-item";
    li.innerHTML = `
        <span>${title} - ${addCommaToNumber(price)}원 (대여 가능)</span>
        <button onclick="removeBook(this)">삭제</button>
        <button onclick="toggleRental(this)">대여/반납</button>
    `;
    bookList.appendChild(li);

    titleInput.value = "";
    priceInput.value = "";
}

// 삭제 기능
function removeBook(button) {
    // li 요소와 제목 추출
    const li = button.parentElement;
    const text = li.querySelector("span").textContent; // 예: "책1 - 5000원 (대여 가능)"
    const title = text.split(" - ")[0]; // 제목: "책1"

    // TODO : books 배열에서 도서 제거 (findIndex, splice 사용)
    const bookIndex = books.findIndex((book) => book.title === title);
    if (bookIndex !== -1) {
        books.splice(bookIndex, 1);
    }

    // TODO(도전과제) : rentals 배열에서 대여 상태 제거 (findIndex, splice 사용)
    const rentalIndex = rentals.findIndex((rental) => {
        const status = rental.getStatus();
        return status.title === title;
    });
    if (rentalIndex !== -1) {
        rentals.splice(rentalIndex, 1);
    }

    // DOM에서 li 제거
    li.remove();
}

// 도서 데이터 처리
function processBooks() {
    // TODO : map 제목에 "Book: " 접두사 추가
    const prefixedBooks = books.map((book) => {
        return {
            title: "Book: " + book.title,
            price: book.price,
        };
    });

    // TODO : filter 10000원 이상 도서
    const highPriceBooks = books.filter((book) => {
        return book.price >= 10000;
    });

    // TODO : reduce 총 가격 계산
    const totalPrice = books.reduce((sum, book) => {
        return sum + book.price;
    }, 0);

    // 결과 표시
    const resultsDiv = document.getElementById("results");
    let html = "<h3>상위 가격 도서:</h3><ul>";
    if (prefixedBooks.length === 0) {
        html += "<li>도서가 없습니다.</li>";
    } else {
        prefixedBooks.forEach((book) => {
            html += `<li>${book.title} - ${addCommaToNumber(book.price)}원</li>`;
        });
    }
    html += "</ul>";

    html += "<h3>고가 도서:</h3><ul>";
    if (highPriceBooks.length === 0) {
        html += "<li>고가 도서가 없습니다.</li>";
    } else {
        highPriceBooks.forEach((book) => {
            html += `<li>${book.title} - ${addCommaToNumber(book.price)}원</li>`;
        });
    }
    html += "</ul>";

    html += `<h3>총 가격:</h3><p>${addCommaToNumber(totalPrice)}원</p>`;
    resultsDiv.innerHTML = html;
}

// 클로저로 대여 상태 관리
const createBookRental = (bookTitle) => {
    let isBorrowed = false;
    let borrowCount = 0;
    return {
        borrow: () => {
            if (isBorrowed) {
                alert(`${bookTitle}은 이미 대여 중입니다.`);
                return false;
            }
            isBorrowed = true;
            borrowCount++;
            return true;
        },
        returnBook: () => {
            isBorrowed = false;
        },
        getStatus: () => ({
            title: bookTitle,
            isBorrowed,
            borrowCount,
        }),
    };
};

// 대여/반납 토글
function toggleRental(button) {
    const li = button.parentElement;
    const text = li.querySelector("span").textContent;
    const title = text.split(" - ")[0];

    // TODO(도전과제) : rentals에서 title과 동일한 요소 찾기
    const rental = rentals.find((rental) => {
        const status = rental.getStatus();
        return status.title === title;
    });
    if (!rental) return;

    const status = rental.getStatus();

    // TODO(도전과제) : books에서 title과 동일한 요소 찾기
    const book = books.find((book) => book.title === title);

    if (status.isBorrowed) {
        rental.returnBook();
        li.querySelector("span").textContent = `${title} - ${addCommaToNumber(
            book.price
        )}원 (대여 가능)`;
    } else {
        if (rental.borrow()) {
            li.querySelector("span").textContent = `${title} - ${addCommaToNumber(
                book.price
            )}원 (대여 중)`;
        }
    }
    updateRentalStatusDisplay();
}

function updateRentalStatusDisplay() {
    const resultsDiv = document.getElementById("results");

    // 결과창에 이미 대여 상태가 표시되어 있는지 확인
    if (resultsDiv.innerHTML.includes("<h3>대여 상태:</h3>")) {
        // 이미 대여 상태가 표시 중이면 자동 업데이트
        showAllRentalStatus();
    }
}

// 모든 대여 상태 표시
function showAllRentalStatus() {
    const resultsDiv = document.getElementById("results");
    let html = "<h3>대여 상태:</h3><ul>";
    if (rentals.length === 0) {
        html += "<li>대여 정보가 없습니다.</li>";
    } else {
        rentals.forEach((rental) => {
            const status = rental.getStatus();
            html += `<li>${status.title}: ${
                status.isBorrowed ? "대여 중" : "대여 가능"
            }, 대여 횟수: ${status.borrowCount}</li>`;
        });
    }
    html += "</ul>";
    resultsDiv.innerHTML = html;
}

// 키보드 제어 기능
document.addEventListener("DOMContentLoaded", function () {
    const titleInput = document.getElementById("bookTitle");
    const priceInput = document.getElementById("bookPrice");

    // Enter 키 처리 함수 (일반 Enter + 숫자패드 Enter 모두 지원)
    function handleEnterKey(event, nextAction) {
        if (event.key === "Enter" || event.key === "NumpadEnter") {
            event.preventDefault(); // 기본 동작 막기
            nextAction(); // 지정된 동작 실행
        }
    }

    // 제목 입력창: Enter 누르면 가격 입력창으로 이동
    titleInput.addEventListener("keypress", function (event) {
        handleEnterKey(event, () => {
            priceInput.focus(); // 가격 입력창으로 포커스 이동
        });
    });

    // 가격 입력창: Enter 누르면 도서 추가
    priceInput.addEventListener("keypress", function (event) {
        handleEnterKey(event, () => {
            addBook(); // 도서 추가 실행
        });
    });

    // ESC 키로 입력창 초기화
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            titleInput.value = "";
            priceInput.value = "";
            titleInput.focus(); // 제목 입력창으로 포커스 이동
        }
    });

    // 접근성 향상을 위한 aria-label 추가
    titleInput.setAttribute("aria-label", "도서 제목 입력 후 Enter 키로 다음 단계");
    priceInput.setAttribute("aria-label", "가격 입력 후 Enter 키로 도서 추가");
});

// 숫자에 콤마 추가하는 함수
function addCommaToNumber(number) {
    return number.toLocaleString("ko-KR");
}
