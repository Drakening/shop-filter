const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

//filter
let list = document.querySelectorAll('.list');
let product = document.querySelectorAll('.pro');

for(let i = 0; i<list.length; i++){
    list[i].addEventListener('click', function(){
        for(let j =0; j<list.length; j++){
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for( let k = 0; k<product.length; k++){
            product[k].classList.remove('active');
            product[k].classList.add('hide');
            
            if(product[k].getAttribute('data-item') == dataFilter || dataFilter == 'all') {
                product[k].classList.remove('hide');
                product[k].classList.add('active');
            }
        }
    })
}