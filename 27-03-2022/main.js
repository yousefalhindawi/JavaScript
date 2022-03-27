// Task1
let yourName= document.querySelector('#yourName');
let yourAge= document.querySelector('#yourAge');
let birth= document.querySelector('#birth');
let major= document.querySelector('#major');
let select= document.querySelector('#gender');
let submit = document.querySelector('[type="submit"]');
let hide = document.querySelector('[value="hide"]');
let cards = document.querySelector('.cards');
let cardUl1 = document.querySelector('#personalInformation');
let cardUl2 = document.querySelector('#programming');
let checkbox1 = document.querySelector('#html')
let checkbox2 = document.querySelector('#css')
let checkbox3 = document.querySelector('#js')
let liCheckbox1 = document.querySelector('#li1')
let liCheckbox2 = document.querySelector('#li2')
let liCheckbox3 = document.querySelector('#li3')
let description = document.querySelector('#description')
let pBreif = document.querySelector('#breif')
let image = document.querySelector('img')


submit.addEventListener('click', function(event) {
    event.preventDefault();
    addInformation();
})
function addInformation(){
    localStorage.setItem('name',`${yourName.value}`) 
    localStorage.setItem('age',`${yourAge.value}`) 
    localStorage.setItem('birth',`${birth.value}`) 
    localStorage.setItem('major',`${major.value}`) 
    localStorage.setItem('select',`${select.value}`) 
    cards.style.visibility= 'visible';
    cardUl1.innerHTML=`<li>${localStorage.getItem('name')}</li>
    <li>${localStorage.getItem('age')}</li>
    <li>${localStorage.getItem('birth')}</li>
    <li>${localStorage.getItem('major')}</li>
    <li>${localStorage.getItem('select')}</li>`

        if (checkbox1.checked=== true){
            liCheckbox1.style.display='list-item'
        }else {
            liCheckbox1.style.display='none'
        }
        if (checkbox2.checked=== true){
            liCheckbox2.style.display='list-item'
            
        }else {
            liCheckbox2.style.display='none'
        }
        if (checkbox3.checked=== true){
            liCheckbox3.style.display="list-item"
    }else {
        liCheckbox3.style.display='none'
    }

    pBreif.innerHTML =`${description.value}`

    image.style.display='block'
}

hide.addEventListener('click', function(event) {
    cards.style.visibility= 'hidden';
    image.style.display='none'
    event.preventDefault();
})

