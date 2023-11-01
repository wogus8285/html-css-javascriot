

 // object 객체
 // 자바스크립트 객체 기반 언어

 // 객체는 속성과 기능을 가진다.

 // phone의 상태 ( property 속성 )  - size, color
 // phone의 행동 ( method 기능 )  - ring, take a picture, play music

 // 형식 - {키 : 값}   -예시->   { color : 'white' }
  

//   객체의 종류
//  - 내장객체 : 문자(String), 날짜(Date), 배열(Array), 수학(Math) etc. 
//  - 브라우저 객체 모델 (BOM) : window, screen, location, history, navigator
//  - 문서객체 모델 (DOM) : html 문서 구조



const user = {
    name : 'Picccccaso', 
    age : 30,
    email : 'picaso@gmail.com',
    works : [                                                     //여러 개 넣을떈, 배열(아마도 댜괄효?)로 하는거 (array)
        { id : 1, title : '게르니카', price: 10000, like:50},
        { id : 2, title : '아비뇽의 처녀들', price: 30000, like:80},
        { id : 3, title : '우는 여인', price: 50000, like:200}
    ],

    // login : function(){
    //     console.log('Welcome.')
    // },                                          아래처럼 생략가능
    
    login(){
        console.log('Welcome.')
    },


    logout : function(){
        console.log('Good bye')
    },

//     goodWorks(){
//         console.log('피카소의 대표작')
//         this. works. forEach(work = Z{})
//     }

// }              졸았음


console.log(user . age)

 //수정
 user.age = 45
 console.log (user.age)

 //타입 확인
 console.log(typeof user)

 //매서드
 user.login()                                      //괄호의 뜻은 즉시 시행해주세요
 user. logout()
























