let a = "hello"
let b: boolean = false /* 명시적 */
let c = [1,2,3] /* 추론 */
c.push(1)

const player = {
    name:"nico"
}
player.hello()
// errors


// Type 시스템
// └ 명시적 정의(변수 선언 시 타입 정의)
// let a: boolean = "x"
// → boolean 타입에 string타입 할당 불가 알림

// └ 변수만 생성(타입 추론)
// let b = "hello"
// → b가 string 타입이라고 추론
// b = 1
// → string 타입에 number타입 할당 불가 알림

// Typescript는 명시적 표현보다 추론하는게 더 낫다