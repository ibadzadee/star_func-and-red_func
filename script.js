// let divs = document.querySelectorAll("div");
// divs.forEach(function (div, index) {
//     div.addEventListener("click", function () {
//         changeColor(index);
//     });
// });
// function changeColor(index) {
//     divs.forEach(function (div, i) {
//         if (i <= index) {
//             div.style.backgroundColor = 'yellow';
//         } else {
//             div.style.backgroundColor = 'white';
//         }
//     });
// }

// ---------------2------------------

// let divOne = document.querySelector("#one")
// let divTwo = document.querySelector("#two")
// let divThree = document.querySelector("#three")
// let divFour = document.querySelector("#four")
// let divFive = document.querySelector("#five")

// divOne.addEventListener("click" , ()=>{
//     divOne.style.background = "yellow"
//     divTwo.style.background = "white"
//     divThree.style.background = "white"
//     divFour.style.background = "white"
//     divFive.style.background = "white"
// })

// divTwo.addEventListener("click" , ()=>{
//     divOne.style.background = "yellow"
//     divTwo.style.background = "yellow"
//     divThree.style.background = "white"
//     divFour.style.background = "white"
//     divFive.style.background = "white"
// })

// divThree.addEventListener("click" , ()=>{
//     divOne.style.background = "yellow"
//     divTwo.style.background = "yellow"
//     divThree.style.background = "yellow"
//     divFour.style.background = "white"
//     divFive.style.background = "white"
// })

// divFour.addEventListener("click" , ()=>{
//     divOne.style.background = "yellow"
//     divTwo.style.background = "yellow"
//     divThree.style.background = "yellow"
//     divFour.style.background = "yellow"
//     divFive.style.background = "white"
// })

// divFive.addEventListener("click" , ()=>{
//     divOne.style.background = "yellow"
//     divTwo.style.background = "yellow"
//     divThree.style.background = "yellow"
//     divFour.style.background = "yellow"
//     divFive.style.background = "yellow"
// })


// -----------------------3------------------

// let div = document.querySelectorAll("div")

// div.forEach(element => {
//     element.addEventListener("click" , function(e){
//         div.forEach(item =>{
//             item.style.background = ''
//         })
//         div.forEach(item =>{
//             if(e.target.style.background !=='yellow'){
//                 item.style.background = "yellow"
//             }
//         })     

//     })
// })



// ------------------------------- 2ci task -------------------

// let div = document.querySelectorAll("#div")

// div.forEach(element => {
//     element.addEventListener("click",  ()=>{
//         if(element.style.background !== "red"){
//             element.style.background = "red"
//         }
//         else{
//             element.style.background = "white"
//         }
//     })

// });




const divs = document.querySelectorAll('#div');
divs.forEach(function (div) {
    div.addEventListener('click', ()=> {
        if (div.style.backgroundColor === 'red') {
            div.style.backgroundColor = 'white';
        } else {
            divs.forEach(function (e) {
                e.style.backgroundColor = 'white';
            });
            div.style.backgroundColor = 'red';
        }
    });
});

