// Math Object
{
    console.log(Math)
    console.log(Math.PI)

    const sum = 9.499999999999999
    const sum2 = '12.12463'

    console.log(Math.round(sum)) // 소수점 첫째 자리에서 반올림, 정수 반환
    console.log(Math.ceil(sum)) // 올림 정수반환
    console.log(Math.floor(sum)) // 내림 정수반환
    console.log(parseInt(sum2)) // 문자를 내림으로 하여서 숫자로 반환 
    console.log(Number(sum2)) // 문자를 숫자로 반환

}

{
    const num = Math.random()
    console.log(num)

    // 0 ~ 9 사이의 숫자를 출력
    console.log(Math.random() * 10)
    
    //0~9 정수//
    console.log(Math.floor(Math.random() * 10))
    
    // 1 ~ 10 정수
    console.log(Math.floor(Math.random() * 10) + 1)
    console.log(Math.ceil(Math.random() * 10))
     

    const food = ['김밥', '우동', '칼국수', '햄버거']
    const randomNum = Math.floor(Math.random() * food.length)
    
    console.log(food[randomNum])
}



