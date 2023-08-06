console.log('Hello world!!!');
let message = 'Yulian';
alert('Hi, ' + message + '!!!');

let a = +prompt("Enter number five");
let b = +prompt("Enter number six");
if (b===0) {
    alert ("Error:division by zero");
} else {
    alert(`Sum = `+ ( a + b ));
    alert(`Difference = `+ ( a - b ));
    alert(`Addition = `+ ( a * b ));
if (a<b) { 
    let confirmation = confirm("Are you sure you want to continue the operation?");
    if (confirmation) {
      alert(`Division = `+ ( a / b ));
    } else {
      alert("Operation skipped");
    }
  } else {
    alert(`Division = `+ ( a / b ));
  }
}