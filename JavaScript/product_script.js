let carousel_slide = document.querySelectorAll('.logo');
let dot_selection = document.querySelectorAll('.dot');

let curr = 0;

//Resets the carousel
function reset_carousel(){
    for(let i = 0; i < carousel_slide.length; i++){
        carousel_slide[i].removeAttribute('active');
        dot_selection[i].removeAttribute('active');
    }
}

//Changes the carousel slides by a set interval
function slide_shift(){
    reset_carousel();
    carousel_slide[curr].setAttribute('active', '');
    dot_selection[curr].setAttribute('active', '');

    if(curr < carousel_slide.length - 1){
        curr++;
    }
    else{
        curr = 0;
    }

    setTimeout("slide_shift()", 2000);
}

slide_shift();