

window.onload = saveDesign;

function saveDesign(){
    document.getElementById("step3").classList.add("active");
    var g = document.getElementsByTagName("g")
    for (var i = 1; i < g.length; i++){
        document.getElementById("svg" + i).style.display = localStorage.getItem("onderdeel" + i);
        document.getElementById("leathershape" + i).style.display = localStorage.getItem("onderdeel" + i);
        // alert(localStorage.getItem("crocoshape" + i));
        document.getElementById("shape" + i).style.fill = localStorage.getItem("kleurshape" + i);
        document.getElementById("crocoshape" + i).style.display = localStorage.getItem("crocoshape" + i);
       };
    document.getElementById("shape0").style.fill = localStorage.getItem("kleurshape0");
    document.getElementById("shape10").style.fill = localStorage.getItem("kleurshape10");
  }

