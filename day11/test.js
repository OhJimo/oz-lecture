
// // While

// let week = 0;
// let firsttMoney = 0;
// let weeklyAllowance = 5000;
// let targetAmount = 20000;

// while(firsttMoney <= targetAmount){
//     firsttMoney += weeklyAllowance;
//     week++;
//     console.log(week + "주차: " + firsttMoney +"모았어요!");
// }
// console.log("목표 달성! " + week + "주 걸렸어요!")

// // Do While

// let answer = 7;
// let guess = 0;
// let attempts = 0;

// do{
//     attempts++;
//     guess +=2;
//     console.log(attempts + "번째 시도: - " + "")
// } while(answer = guess);

// console.log("총 ", attempts, "번 만에 맞췄어요!")

// For

// let totalEarnings = 0;  // 총 수익
// let deliveryFee = 3000;  // 배달비

// for(let customer = 1; customer < 6; customer++){
//     totalEarnings += deliveryFee;
//     console.log(customer,"번째 고객 배달 완료! 현재 수익: ", totalEarnings, "원")
// }

// console.log("오늘 총 수익: ", totalEarnings, "원");

// For 중첩

// let floor;
// let room;
// let roomNumber;

// for(floor = 1; floor <= 3; floor++){
//     console.log("===", floor, "층 ===");
    
//         for(room = 1; room <= 4; room++){
//             roomNumber = floor * 100 + room;
//             console.log(roomNumber + "호")
//     }    
// }

//

// let products = ["콜라", "사이다", "물", "커피", "우유"];
// let stock = [3, 8, 2, 12, 1];
// let needOrder = 0;

// console.log("=== 편의점 재고 현황 ===");
// for(let i = 0; i < products.length; i++){
//     if(stock[i] < 5){
//         console.log((i+1) + ". " + products[i] + ": " + stock[i] + "개 - 주문 필요!");
//         needOrder++;
//     } else {
//         console.log((i+1) + ". " + products[i] + ": " + stock[i] + "");
//     }
// }

// console.log("총 " + products.length + "개 상품 중 " + needOrder + "개 상품 주문 필요!");

//

let grades = {
    math: 95,
    english: 88,
    science: 92,
    korean: 90
};

for(key in grades){
    console.log(key + ": " + grades[key]);
}