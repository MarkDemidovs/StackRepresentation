var StackHolder = [1, 2, 3];
var num = StackHolder[StackHolder.length - 1];
var addBtn = document.getElementById("addItem");
var removeBtn = document.getElementById("removeItem");
var currentBtn = document.getElementById("currentItem");
for (var i = 0; i <= StackHolder.length; i++) {
    console.log(StackHolder[i]);
}
function addStack() {
    num++;
    StackHolder.push(num);
    console.log(StackHolder);
}
function removeStack() {
    num--;
    StackHolder.pop();
    console.log(StackHolder);
}
function currentStack() {
    console.log(num);
}
/*for (var i: number = 0; i <= 3; i++ ) {
    console.log(StackHolder[i]);
}*/
