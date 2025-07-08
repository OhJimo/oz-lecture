// const NAME = 'taem';
// let templateString = `나의 이름은 ${NAME}입니다.`

// console.log(NAME);
// console.log(templateString);

// var, let, const 사용

const COFFEE_SHOP = 'oz coffee';
let todayCoffee = 'ice latte';
var basicMenu = 'americano';

console.log('어서오세요. ' + COFFEE_SHOP + ' 입니다.');
console.log('오늘의 커피는 ' + todayCoffee + ' 입니다.');
console.log('많이 찾는 메뉴는 ' + basicMenu + ' 입니다.');

// number, string, boolean 변수 사용

let americanoPrice = 2500;
let cafeLocation = '서울시 강남구';
let isOpen = true;

console.log(`${COFFEE_SHOP}의 정보\n\t위치: ${cafeLocation} \n\t해당 사실은 ${isOpen} 입니다.`)

// 배열 리터럴

let ozcoffeeAdvantage = ['맛있는 커피', '청결한 실내', '잘생기고 예쁜 알바'];

console.log(ozcoffeeAdvantage);
console.log(`저희 ${COFFEE_SHOP}의 장점은 ${ozcoffeeAdvantage[0]}와 ${ozcoffeeAdvantage[1]}. 그리고 ${ozcoffeeAdvantage[2]} 입니다.`)

// 객체 리러털

let operatingInfo = {
    openTime: '오전:' + 9 + '시',
    closeTime: '오후:' + 9 + '시',
    openDays:'월-일',
    closedDays:'연중무휴',
};

console.log(`저희 ${COFFEE_SHOP}의 오픈은 ${operatingInfo.openTime}이고, 마감은 ${operatingInfo.closeTime}입니다. 
영업일은 ${operatingInfo['openDays']}이며, 휴무없이 ${operatingInfo['closedDays']}입니다.`
);

// typeof 사용

console.log('COFFEE_SHOP의 타입:', typeof COFFEE_SHOP);
console.log('americanoPrice의 타입:', typeof americanoPrice);
console.log('isOpen의 타입:', typeof isOpen);
console.log('ozcoffeeAdvantage의 타입:', typeof ozcoffeeAdvantage);
console.log('operatingInfo의 타입:', typeof operatingInfo);

// 도전 과제
// null, undefined 사용
// null → 참조형 자료 타입

let ozcoffeeEvent = null;
let ozcoffeeNewmenu = undefined;

console.log('ozcoffeeEvent의 타입:', typeof ozcoffeeEvent);
console.log('ozcoffeeNewmenu의 타입:', typeof ozcoffeeNewmenu);

console.log('null === undefinde 결과:',null === undefined);