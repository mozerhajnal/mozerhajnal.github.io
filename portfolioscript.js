var projects = document.querySelectorAll('.hoverbtn');

for(var project of projects){
    project.addEventListener('mouseover',mouseOver);
    project.addEventListener('mouseout',mouseOut);

}

function mouseOver(event){
    event.target.element.style.display = "flex";
    event.target.element.style.alignItems = "center";
    event.target.element.style.visibility = "visible";
    document
    .querySelector('.hoverbtn').classList.remove('hidden');
    console.log(  document
        .querySelector('.hoverbtn'));

    console.log("csaa");

}

function mouseOut(event){
    event.target.element.style.display = "none";
    event.target.element.style.visibility = "hidden";
}

