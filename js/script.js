let slideIndex = 1;

const showImage=(n)=> {
    let slide = document.getElementsByClassName('slides'), 
        dots = document.getElementsByClassName('dots'),
        i;
    if (n > slide.length) { 
        slideIndex = 1;
    }
    if (n < 1) {    
        slideIndex = slide.length;
    }
    for (i = 0; i < slide.length; i++) { 
        slide[i].style.display = 'none';
    }
    slide[slideIndex - 1].style.display = 'block';
    for (i = 0; i < dots.length; i++) {   
        dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[slideIndex - 1].className += ' active';
}
showImage(slideIndex);

const plusIndex=(n)=> {  
    showImage(slideIndex += n);
}
const currentSlide=(n)=> { 
    showImage(slideIndex = n);
}