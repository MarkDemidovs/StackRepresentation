var StackHolder: number[] = [1, 2, 3];
var num:number = StackHolder[StackHolder.length - 1];
var addBtn = document.getElementById("addItem");
var removeBtn = document.getElementById("removeItem");
var currentBtn = document.getElementById("currentItem");
var currentTrack = document.getElementById("currentTrack");
var newContainer;
const ArrayTrack = document.getElementById("ArrayTrack");

function currentTrackShown() {
    currentTrack.innerHTML = "Current Item: " + num;
}

function arrayTrackShown() {
    ArrayTrack.innerHTML = "Array: " + StackHolder;
}

for (var i = 0; i <= StackHolder.length; i++) {
    console.log(StackHolder[i]);
}
function addStack() 
{
    num++;
    StackHolder.push(num);
    console.log(StackHolder);
    newContainer = document.createElement("div");
    newContainer.classList.add("itemCard");
    newContainer.style.backgroundColor = "rgb(99, 49, 216)";
    document.querySelector(".itemCard").appendChild(newContainer);
    currentTrackShown();
    arrayTrackShown()
}
function removeStack() {
    num--;
    StackHolder.pop();
    console.log(StackHolder);

    var parentContainer = document.querySelector(".itemCard");
    var lastChild = parentContainer.lastElementChild;
    parentContainer.removeChild(lastChild);
    currentTrackShown();
    arrayTrackShown()
}
function currentStack() {

    console.log(num);
}
/*for (var i: number = 0; i <= 3; i++ ) {
    console.log(StackHolder[i]);
}*/
