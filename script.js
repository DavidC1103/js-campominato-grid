const btn = document.getElementById('btn')
const container = document.querySelector('.dc-container')






btn.addEventListener('click', function(){
    container.classList.toggle('hide')
    for(let i = 0; i < 100; i++){
        console.log(i);
        const quadrato = generate()
        console.log(quadrato);
        container.append(quadrato)
    }
    
})







function generate(){
    const newbox = document.createElement('div')
    newbox.className = 'box'
    return newbox
}