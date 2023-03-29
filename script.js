const btn = document.getElementById('btn')
const container = document.querySelector('.dc-container')






btn.addEventListener('click', function(){
    container.classList.toggle('hide')
    for(let i = 0; i < 100; i++){
        const quadrato = generate()
        container.append(quadrato)
        quadrato.addEventListener('click', function(){
            this.classList.toggle('clicked')
            console.log(i);
        })
    }
    
})


function generate(){
    const newbox = document.createElement('div')
    newbox.className = 'box'
    return newbox
}