const content = document.querySelectorAll('.content')




// for(let i = 0; i < content.length; i++) {

//     console.log(i);
    
//     content[i].addEventListener('click', function(){
        
//         this.classList.toggle('active')
//     console.log(i);
//     })
// }


for(let i = 0; i < content.length; i++) {


    content[i].addEventListener('click', function(){
        if (this.classList.contains('active')) {
            this.classList.remove('active')
        } else {
            for(let j = 0; j < content.length; j++) {
                content[j].classList.remove('active')
                
                // content[i].classList.add('active')
                console.log(j)
            }

            this.classList.add('active')
        }
    })
}

        // console.log(i);

        // for(let j = 0; j < content.length; j++) {
        //     content[j].classList.remove('active')
            
        //     // content[i].classList.add('active')
        //     console.log(j)
        // }

        // console.log(i);

        // this.classList.add('active')

        // this.classList.add('active')
        

        // // console.log(i);
        // const contentActive = document.querySelectorAll('.content.active')
        // console.log(contentActive)

        // function(){
        //     contentActive.classList.remove('active')
        // }


    

// // const contentActive = document.querySelector('.content.active')
// contentActive.addEventListener('click', function(){
//     this.classList.remove('active')
// })

