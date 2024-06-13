let StackHolder: number [] = [1,2,3];
let num:number = StackHolder[StackHolder.length - 1];
const addBtn = document.getElementById("addItem")
const removeBtn = document.getElementById("removeItem")
const currentBtn = document.getElementById("currentItem");

for (var i: number = 0; i <= StackHolder.length; i ++) {
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

