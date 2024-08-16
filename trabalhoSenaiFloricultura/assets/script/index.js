let btnMenu = document.querySelector('#esconder');

function esconderMenu(){
    if(btnMenu.style.display == "none"){
        btnMenu.style.display = "grid";
    }else{
        btnMenu.style.display = "none";
    }

}