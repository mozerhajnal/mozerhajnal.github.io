document.getElementById("left").addEventListener("mouseover", function(){
    document.getElementById("txt-left").style.opacity = "1";
    document.getElementById("txt-left").style.transition = "all 0.5s ease";
});

document.getElementById("left").addEventListener("mouseout", function(){
    document.getElementById("txt-left").style.opacity = "0";
    document.getElementById("txt-left").style.transition = "all 0.5s ease";
});


document.getElementById("right").addEventListener("mouseover", function(){
    document.getElementById("txt-right").style.opacity = "1";
    document.getElementById("txt-right").style.transition = "all 0.5s ease";
    console.log(document.getElementById("txt-right"));
});

document.getElementById("right").addEventListener("mouseout", function(){
    document.getElementById("txt-right").style.opacity = "0";
    document.getElementById("txt-right").style.transition = "all 0.5s ease";
});