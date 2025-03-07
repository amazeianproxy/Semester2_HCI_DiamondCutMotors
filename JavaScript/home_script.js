//Top Pick Gallery

let gallery_image = document.querySelectorAll('.slide');
// console.log(gallery_image);

let arrow_left = document.querySelector('.left_button');
let arrow_right = document.querySelector('.right_button');
let curr = 0;

let slide_array = [
    "Revuelto Lamborghini",
    "Taycan Turbo Porsche",
    "Centiodieci Bugatti"
]

//Resets Gallery View
function reset_gallery(){
    for(let i = 0; i < gallery_image.length; i++){
        gallery_image[i].removeAttribute('active');
    }
}

//Starts Gallery
function gallery_start(){
    reset_gallery();
    gallery_image[0].setAttribute('active', '');
    document.querySelector('.slide_text').textContent = slide_array[0];
}

//Left Button
function go_left(){
    reset_gallery();
    gallery_image[curr - 1].setAttribute('active', '');
    curr--;
    document.querySelector('.slide_text').textContent = slide_array[curr];
}

arrow_left.addEventListener('click', function(){
    if(curr === 0){
        curr = gallery_image.length;
    }
    go_left();
});

//Right Button
function go_right(){
    reset_gallery();
    gallery_image[curr + 1].setAttribute('active', '');
    curr++;
    document.querySelector('.slide_text').textContent = slide_array[curr];
}

arrow_right.addEventListener('click', function(){
    if(curr === gallery_image.length - 1){
        curr = -1;
    }
    go_right();
});

//Run Function
gallery_start();