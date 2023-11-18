// function slider
function slider(par){
    const buttonRadio = document.querySelectorAll('.buttonRadio');
    const sectionSec03 = document.querySelector('.section-section-03');
    const sectionSecSec03 = document.querySelector('.section-section-section-03');
    const cardSectionSec03 = document.querySelectorAll('.card-section-section-03');
    let valorMarginDesktop = 300;
    let valorMarginMobile = 400;

    
    // desktop
    if(cardSectionSec03[0].style.width === '400px'){
        for(let i = 0; i < cardSectionSec03.length; i++){
            if(par === i){
                sectionSec03.style.paddingRight = i * valorMarginDesktop + 'px';
                buttonRadio[i].checked = true
        
            }else{
                // sectionSec03.style.padding = '0';
                buttonRadio[i].checked = false
        
            }
        }   
    }
    //mobile
    else{
        for(let i = 0; i < cardSectionSec03.length; i++){
            if(par === i){
                sectionSec03.style.paddingRight = i * valorMarginMobile + 'px';
                buttonRadio[i].checked = true
        
            }else{
                // sectionSec03.style.paddingRight = '0';
                buttonRadio[i].checked = false
        
            }
        } 
    }
    
    

};

const showMenu = () => {
    const conteinerLinks = document.querySelector('.conteiner-links');
    const button02ContHead = document.querySelector('.button-02-conteiner-header');
    if(conteinerLinks.style.display === 'none'){
        conteinerLinks.style.display = 'flex'
        button02ContHead.innerHTML = '<img src="images/icon-close.svg" alt="" class="icon-button-02-header">'
    }else{
        conteinerLinks.style.display = 'none'
        button02ContHead.innerHTML = '<img src="images/icon-hamburger.svg" alt="" class="icon-button-02-header">'
    }


}
