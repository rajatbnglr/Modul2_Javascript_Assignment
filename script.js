let sum = 0
let input = prompt("enter a no between 0 1000000 :")
let count = Number(input)

if (count > 0 && count < 1000000) {
    for (let i = 1; i <= count; i++) {
        sum += i

    }
    // alert(`Sum of numbers up to ${count} is ${sum}`);
    // alert(`sum of ${count} is ${sum}`);

    alert(`Sum of numbers up to ${count} is ${sum}`);
    console.log(`Sum of numbers up to ${count} is ${sum}`)



}
else {

    alert(`Invalid Number!!! ${count}`);

    console.log("Invalid Number")
}

