// Task2

let Subject = document.querySelector('#Subject')
let descrip = document.querySelector('#descrip')
let userTypes = document.querySelector('#userTypes')
let Technology = document.querySelector('#Technology')
let submit = document.querySelector('#submit')
let Sub = document.querySelector('#Sub')
let desc = document.querySelector('#desc')
let types = document.querySelector('#types')
let Tech = document.querySelector('#tech')
let cards = document.querySelector('.cards')
let fileImg = document.querySelector('[type="file"]')
let image = document.querySelector('img')

submit.addEventListener('click', function(event) {
    event.preventDefault();
    addInformation();
})

function addInformation(){
    localStorage.setItem('Subject',`${Subject.value}`) 
    localStorage.setItem('descrip',`${descrip.value}`) 
    localStorage.setItem('userTypes',`${userTypes.value}`) 
    localStorage.setItem('Technology',`${Technology.value}`) 
    cards.style.visibility= 'visible';
    Sub.innerHTML=`${localStorage.getItem('Subject')}`
    console.log(localStorage.getItem('Descrip'))
    desc.innerHTML=`${localStorage.getItem('descrip')}`
    types.innerHTML=`${localStorage.getItem('userTypes')}`
    Tech.innerHTML=`${localStorage.getItem('Technology')}`
    console.log(fileImg.files[0].name)
    image.src = `${fileImg.files[0].name}`
    image.style.display='block'
}


// document.getElementById("myFile").addEventListener("change" , function(){
//     const reader = new FileReader();

//     reader.addEventListener("load" , ()=>{
//        localStorage.setItem("image" , reader.result);
//     });

//     reader.readAsDataURL(this.files[0]);
// });


// img = localStorage.getItem("image");

//  if(img){
//      document.getElementById("myimg").setAttribute("src" , img)
//  }

