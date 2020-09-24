function bgChange (){

    if(this.scrollY > this.innerHeight / 4){

        document.body.classList.add("bg-active");
    }

    else {

        document.body.classList.remove("bg-active");
    }
}

window.addEventListener("scroll", bgChange);