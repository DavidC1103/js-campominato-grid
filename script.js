const btn = document.getElementById('btn')
const container = document.querySelector('.dc-container')
const box = document.querySelector('.box')

btn.addEventListener('click', function(){
    container.classList.toggle('hide')
})