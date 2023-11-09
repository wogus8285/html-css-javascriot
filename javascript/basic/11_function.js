// 1. 함수 선언과 호출
// function myFunc(){
//     console.log('안녕 자바스크립트')
// }

// myFunc()

// const sayHello = function () {
//     console.log('hello~~~~')
// }

// sayHello ()    // 즉시 실행을 하라는 뜻


// 2. 매개변수 parameter
// function printMessager (msg) {
//     console.log(msg)
// }

// printMessager('하하하')
// printMessager('호호호')

// function plus (a,b) {
//     console.log ( a + b )
// }

// plus(10, 20)


// 3. 기본 파라미터 (es6)
// function showInfo(title, name = '스티브잡스' ) {
//     console.log(`${title} by ${name}`)
// }

// showInfo('게르니카' , '피카소' )
// showInfo( '풍경')


// 4. Rest 파라미터 Spread 연산자 ( es6 ) : ...
// function printAll(...items){     //아이템스가 아니어도 됨, 걍 변수 설정
//     // for(let i = 0; i < items.length; i++){
//     //     console.log(items[i])
//     // }      //이것은 아래와 같다.

//     for (let item of items) {
//         console.log(item)
//     }
// }

// printAll('봄', '여름', '가을', '겨울', '안녕', '아침', '밤')


//5. scope

// let movie = '하하하' // 전역변수 global

// function printMovie() {
//     let myMovie = '생활의 발견'  // 지역변수 local
 
//     console.log(myMovie)
//     console.log(movie)
// }

// printMovie ()
// // console.log(myMovie)  ////이거는 읽지 못함, 왜냐하면 함수는 중괄호 안에서만 유효하니깐. 이게 스코프인가!?


// 6. return
// function plus( a, b ) {
//     // console.log( a + b )
//     return  a + b
// }

// const result = plus( 20, 30 )
// console.log(result)


// 7. 화살표 함수

// function add ( a, b ){
//     return a + b
// }

// const add = function( a, b ){
//     return a + b
// }

const add = (a,b) => a + b

const sum = add(5, 8)
console.log(sum)

