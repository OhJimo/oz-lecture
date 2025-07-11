// // console.log(1);
// // console.log(2);
// // console.log(3);
// // console.log(4);
// // console.log(5);

// // 1씩 증가하는 while 반복문
// let num = 1;
// while (num <= 100) {
//   console.log(num);
//   num++;
// }
// console.log("반복문 종료");
// console.log("num", num);

// // 2씩 증가하는 while 반복문
// let num2 = 1;
// while (num2 <= 100) {
//   console.log(num2);
//   num2 += 2; // num2 = num2 +2
// }

let 내점수 = 0;
let 목표점수 = 100;

while(내점수 < 목표점수) {
    내점수 += 10;  // 10점씩 올라가
    console.log("현재 점수: " + 내점수 + "점");
}

console.log("목표 달성! 레벨업!");