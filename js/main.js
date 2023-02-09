const burguer = document.querySelector('.uil-bars');
const navlist = document.querySelector('#nav')
const navbtn = document.querySelectorAll('.nav-btn')
let valueCount = document.querySelectorAll('.count')
let interval = 6000;


burguer.addEventListener('click', ()=>{
    if (burguer.className == 'uil uil-bars' || burguer.className == 'uil-bars'){
        burguer.className = 'uil-multiply'
        navlist.className = 'nav-toggle'
    } else {
        burguer.className = 'uil-bars'
        navlist.className = 'nav-hidden'
    }
})

function captarElementos(id){
    document.getElementById(id).addEventListener('click', ()=>{
        navlist.className = 'nav-hidden'
        burguer.className = 'uil-bars'
    })
}

for (c = 0; c < navbtn.length; c++){
    var busca = navbtn[c].id
    captarElementos(busca)
}

valueCount.forEach((count) => {
    let startCount = 0;
    let endCount = Number(count.getAttribute("data-count"));
    let duration = Math.floor(interval / endCount);
    let counter = setInterval(function(){
        startCount += 1;
        count.textContent = startCount;
        if (startCount == endCount){
            clearInterval(counter);
            if (valueCount[0].innerHTML === '700'){
                valueCount[0].innerHTML += '+'
            }
            if (valueCount[1].innerHTML === '500'){
                valueCount[1].innerHTML += '+'
            }
            if (valueCount[2].innerHTML === '500'){
                valueCount[2].innerHTML += '+'
            }
            if (valueCount[3].innerHTML === '15'){
                valueCount[3].innerHTML += '+'
            }
        }
    }, duration)
})