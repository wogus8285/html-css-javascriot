// const onePrice = document.getElementById('price')
// const minus = document.querySelector('.minus')
// const plus = document.getElementsByClassName('plus')


const onePrice = document.querySelector('#price')
const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const count = document.querySelector('.count')
const totalPrice = document.querySelector('.total span')


// console.log(onePrice);
// console.log(minus);
// console.log(plus);
// console.log(count);
// console.log(totalPrice);

const unit_price = 30000
let num = 1
onePrice.textContent = unit_price.toLocaleString()
count.textContent = num

plus.addEventListener('click', function(){
    console.log('plus!!');
    num++
    count.textContent = num
    paintTotal ()
})

minus.addEventListener('click' , function(){
    num--
    if( num < 1){
        alert('최소 주문 수량은 한 개입니다.')
        num = 1
    }
    count.textContent = num
    paintTotal ()
})


function paintTotal (){
    totalPrice.textContent = (unit_price * num).toLocaleString()
}

paintTotal()