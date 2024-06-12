var StackArray: string[] = [];

StackArray.push("First");

for (let i: number = 0; i < StackArray.length; i++) {
    StackArray.push(i.toString());
    console.log(StackArray[i.toString()]);
}