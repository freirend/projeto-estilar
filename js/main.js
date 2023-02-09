const burguer = document.querySelector('.uil-bars');
const navlist = document.querySelector('#nav')
const navbtn = document.querySelectorAll('.nav-btn')

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