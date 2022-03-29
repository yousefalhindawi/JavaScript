let data = new XMLHttpRequest();
data.open('GET', 'main.json');
data.send();
let tbody = document.querySelector("#tbody")
let show =document.querySelector('#show')
let hide =document.querySelector('#hide')
show.addEventListener('click',function() {
    let dataNew = JSON.parse(data.responseText);
    // console.log(dataNew);
    let Data ='';
    for (let i = 0; i < dataNew.length; i++){
        Data +=`<tr><td>${i}</td>
        <td>${dataNew[i].brand}</td>
        <td>${dataNew[i].model}</td>
        <td><img src="${dataNew[i].URL}"></td>
        </tr>`
    }
    tbody.innerHTML = Data; 
})

hide.addEventListener('click',function() {
    tbody.innerHTML =''
})