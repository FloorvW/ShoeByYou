

var shapeID;
// var x;

var shape = document.getElementsByClassName("banaan")
for (var i=0; i < shape.length; i++){
  shape[i].onclick = findShape;
};

function findShape(eventObj){
  var shapePart = eventObj.target;
  console.log(shapePart)
  shapeID = shapePart.getAttribute("id");
  document.getElementById(shapeID).setAttribute("fill","grey");
  console.log("findshape" + shapeID);
  // shapeID = x;
}

var chosenColor = document.getElementsByClassName("color");
for (var i = 0; i < chosenColor.length; i++) {
   chosenColor[i].onclick = changeColor;
}

function changeColor(eventObj) {
  var fill =   eventObj.target;
  console.log(fill)
  console.log("changeColor");
  var z = fill.getAttribute("data-hex");
  // console.log("kleur " + z);
  // console.log("shape " + y);
document.getElementById(shapeID).setAttribute("fill", z);
localStorage.setItem("kleur" + shapeID, z);
}

var crocoClicked = document.getElementById("crocoleather");
crocoClicked.onclick = showCroco;

function showCroco(){
  if( shapeID == null){
    document.getElementById("warning").style.visibility = "visible";
  } else{
    document.getElementById("warning").style.visibility = "hidden";
    document.getElementById("crocoleather").classList.add("pressedmaterial");
    document.getElementById("leather").classList.remove("pressedmaterial");
    console.log("croco pressed");
    document.getElementById(shapeID).setAttribute("fill","white");
    document.getElementById("croco" + shapeID).style.display = "block";
    localStorage.setItem("croco" + shapeID, "block");
  }
 
};

var leatherClicked = document.getElementById("leather");
leatherClicked.onclick = showLeather;

function showLeather(){
  if(shapeID == null){
    document.getElementById("warning").style.visibility = "visible";
  } else{
    document.getElementById("crocoleather").classList.remove("pressedmaterial");
    document.getElementById("leather").classList.add("pressedmaterial");
    console.log("leather pressed")
    console.log(shapeID);
    document.getElementById("croco" + shapeID).style.display = "none";
  }

}

