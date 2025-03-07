let desc = document.querySelectorAll('.description');
let curr = 0;

//Resets the text box background
function reset_shine(){
    for(let i = 0; i < desc.length; i++){
        desc[i].removeAttribute('shine');
    }
}

//Changes the background of the text boxes by a set interval
function shine_shift(){
    reset_shine();
    desc[curr].setAttribute('shine', '');

    if(curr < desc.length - 1){
        curr++;
    }
    else{
        curr = 0;
    }

    setTimeout("shine_shift()", 3000);
}

shine_shift();