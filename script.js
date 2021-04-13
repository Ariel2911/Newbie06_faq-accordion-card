const acordion = document.getElementById('main__list');
const title = document.querySelectorAll('.main__list-title')
const text = document.querySelectorAll('.main__list-text-container');
const arrow = document.querySelectorAll('.main__img-arrow')

const desactivar = targetElement => {
    
    for (i of text){        
        i.classList.remove('main__list-text-container--active');
    }
    for (i of title){
        i.classList.remove('main__list-title--active');
    }
    
};
const activar = targetElement => {
    targetElement.classList.add('main__list-title--active');
    targetElement.nextElementSibling.classList.add('main__list-text-container--active');
   
}

acordion.addEventListener('click' , e => {  
    if (e.target.classList.contains('main__list-title')){
        if (e.target.classList.contains('main__list-title--active')){
            desactivar(e.target);
        }else {
            desactivar(e.target);
            activar(e.target);
        }    
    }  
});