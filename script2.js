
window.onload = showFinal;

function showFinal(){
    document.getElementById("step2").classList.add("active");
        var g = document.getElementsByTagName("g")
        for (var i = 1; i < g.length ; i++){
            document.getElementById("svg" + i).style.display = localStorage.getItem("onderdeel" + i);
            document.getElementById("leathershape" + i).style.display = localStorage.getItem("onderdeel" + i);
           } 
    };

