
window.onload = init;

function init(){
    // localStorage.clear();
    document.getElementById("step1").classList.add("active");
    var btns = document.getElementsByClassName("build");
    for(var i = 0; i < btns.length; i++){
       btns[i].onclick = show;
    }

    for(var i = 1; i < 10; i++){
        localStorage.setItem("onderdeel" + i, "none");
        localStorage.setItem("crocoshape" + i, "none");
    }
};

function show(e){
    var part = e.target.id;
    // console.log(part);
    var state = document.getElementById("onderdeel" + part).style.display;
    

    if(state == "none"){
        document.getElementById("onderdeel" + part).style.display = "block";
        localStorage.setItem("onderdeel" + part, "block");
        e.target.classList.add("pressed");
        // var test = localStorage.getItem("onderdeel" + part);
        // console.log(test);
    } else if (state == "block"){
        document.getElementById("onderdeel" + part).style.display = "none";
        localStorage.setItem("onderdeel" + part, "none");
        e.target.classList.remove("pressed");
    }
};


