const button = document.querySelectorAll('.button');
const body = document.querySelector('body');
const h1 = document.querySelector('.heading1');
const h2 = document.querySelector('.heading2');

button.forEach(function(button) {
    button.addEventListener('click', function(e){
        body.style.backgroundColor = e.target.id;
        h1.style.color = "white";
        h2.style.color = "white";
        
    })
})