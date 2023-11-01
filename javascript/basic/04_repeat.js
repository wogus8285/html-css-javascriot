// console.log('hi')


//반복문
//while문

// let a = 'aaa'
// let b = 'bbb'

// console.log(`${a} ${b}`)
// console.log('i는 ' ,  a , '입니다' )

{
    // let i = 4

    // while( i > 0 && i <5 ){
    //     console.log(`i는 ${i}`)
    //     i--
    // }
}

// for문
{
    // // for(변수 ; 조건 ; 증감식){
    // for(let i = 3; i > 0; i-- ){
    //     console.log(`i는 ${i}`)
    // }
    // //  여기로 빠져 나간다.
}

// const day = ['월' , '화' , '수' , '목' , '금']

// for(let i = 0;  i < day.length ;  i++ ){
//     console.log( day [i] )
// }


// break : 반복문을 종료
// continue : 실행문을 무시하고 증감연산을 실행한다.

// 0~10 -> 0에서 7까지만 출력:break
{
    // for(let i = 0;  i <= 10;  i++ ){
    //     if(i>7)break //{} break를 감싸는 중괄호는 생략
    //     console.log(i)
    // }
}

// 0~10 -> 홀수만 출력
{
    // for(let i = 0; i <= 10; i++){
    //     if( i % 2 == 0 ){
    //         continue //{} 생략가능하지만 위치 확인하라고 넣어 봤음
    //     }
    //     console.log(i)
    // }
}



//연습문제
{
    // let i = 1
    // while ( i < 10 ){
    //     console.log(`6 x ${i} = ${6 * i} `)
    //     i++
    // }  //여기//
} //이거 강사님 코드 보고 다시 => 여기 중괄호를 빼먹었었음


//for문으로 구구단 출력
{
    for(let i = 1; i <= 9;  i++ ) {
        console.log(`🎈 ${i}단 시작`)
        for(let j = 1; j <=9; j++) {
            console.log (`${i} x ${j} = ${ i * j } `) 
        }
    }
}
    // 강사님 코드 보기

