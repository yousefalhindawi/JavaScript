let data = new XMLHttpRequest();
data.open('GET', 'main.json');
data.send();
let tbody = document.querySelector("#tbody")
let show =document.querySelector('#show')
let hide =document.querySelector('#hide')
show.addEventListener('click',function() {
    let dataNew = JSON.parse(data.responseText); // convert string to array of object
    // console.log(dataNew);
    let tbodyData ='';
    for (let i = 0; i < dataNew.length; i++){
        tbodyData +=`<tr><td>${i}</td>
        <td>${dataNew[i].brand}</td>
        <td>${dataNew[i].model}</td>
        <td><img src="${dataNew[i].URL}"></td>
        </tr>`
    }
    tbody.innerHTML = tbodyData; 
})

hide.addEventListener('click',function() {
    tbody.innerHTML =''
})