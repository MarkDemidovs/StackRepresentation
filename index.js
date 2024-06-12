var StackArray = [];
StackArray.push("First");

for (var i = 0; i < StackArray.length; i++) {
    StackArray.push(i.toString());
    console.log(StackArray[i]);
}
