const burguer = document.querySelector('.uil-bars');
const navlist = document.querySelector('#nav')
const navbtn = document.querySelectorAll('.nav-btn')
const valueCount = document.querySelectorAll('.count')
const interval = 5000;


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
    var startCount = 0;
    var endCount = Number(count.getAttribute("data-count"));
    var duration = Math.floor(interval / endCount);
    var counter = setInterval(function(){
        startCount += 1;
        count.textContent = startCount;
        if (startCount == endCount){
            clearInterval(counter);
        }
    }, duration)
})