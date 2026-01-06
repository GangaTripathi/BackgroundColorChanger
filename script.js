const parent = document.getElementById('parent');

parent.addEventListener('click', (e) => {
     
    if (e.target.tagName === 'BUTTON') {
        const color = e.target.id;
        document.body.style.backgroundColor = color;
        
        
        const heading = document.querySelector('h1');
        if(color === 'yellow' || color === 'pink') {
            heading.style.color = '#222';
        } else {
            heading.style.color = 'white';
        }
    }
});
