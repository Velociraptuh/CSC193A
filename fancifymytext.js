
function alertFunc(){
    alert("Hello, world!");
    document.getElementById("usertext").style.fontSize = "24px";
}

function styleChange(){
    var fancyButton = document.getElementById("fancy");
    var boringButton = document.getElementById("boring");
    var textarea = document.getElementById("usertext");
    if(fancyButton.checked){
        textarea.style.fontWeight = "bold";
        textarea.style.color = "blue";
        textarea.style.textDecoration = "underline";
    }
    if(boringButton.checked){
        textarea.style.fontWeight = "normal";
        textarea.style.color = "black";
        textarea.style.textDecoration = "none";
    }
}

function moo(){
    var textarea = document.getElementById("usertext");
    //var str = textarea.value;
    //str.toUpperCase();
    textarea.value = textarea.value.toUpperCase();
    //var s = textarea.value;
    textarea.value = textarea.value.replaceAll(".", "-Moo.");
    textarea.value = textarea.value.replaceAll("!", "-Moo.");
    textarea.value = textarea.value.replaceAll("?", "-Moo.");
}