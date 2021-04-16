
const main = document.getElementById('main');
const title = document.querySelectorAll('.main__list-title')
const text = document.querySelectorAll('.main__list-text-container');

// Deactivador de efectos
const deactivate = targetElement => {    
    for (i of text){        
        i.classList.remove('main__list-text-container--active');
    }
    for (i of title){
        i.classList.remove('main__list-title--active');
    }    
};

// Activador de efectos
const active = targetElement => {
    targetElement.classList.add('main__list-title--active');
    targetElement.nextElementSibling.classList.add('main__list-text-container--active');   
}

// Activader del efecto de caja
main.addEventListener('mouseover' , e =>{
    if(e.target.classList.contains('main__list-title')){
        main.classList.add('main--active');
    }else {
        main.classList.remove('main--active');
    }    
});

// Actionar efectos
main.addEventListener('click' , e => {  
    if (e.target.classList.contains('main__list-title')){            
        if (e.target.classList.contains('main__list-title--active')){
            deactivate(e.target);
        }else {
            deactivate(e.target);
            active(e.target);
        }    
    }  
});