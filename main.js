function dropdown(content) {
    content.classList.toggle('show');
}

window.onclick = function(event) {
    if(!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName('dropContent');
        for (var i = 0; i < dropdowns.length; i++) {
            if (dropdowns[i].classList.contains('show')) {
                dropdowns[i].classList.remove('show');
            }
        }
    }
}

function darken(active){
    images = document.querySelectorAll('#projects table img');
    for(var i = 0; i < images.length; i++){
        if(images[i] != active){
            images[i].style.opacity = 0.6;
        }
    }
}

function lighten(){
    images = document.querySelectorAll('#projects table img');
    for(var i = 0; i < images.length; i++){
        images[i].style.opacity = 1;
    }
}

