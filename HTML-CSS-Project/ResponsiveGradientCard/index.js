let output = document.querySelector(".output");
let date = new Date();

let currentDay = date.getDate();
let currentMonth = date.getMonth()+1;
let currentYear = date.getFullYear();

let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// console.log(currentDay, month[currentMonth], currentYear);

output.textContent = `${currentDay} ${month[currentMonth]} ${currentYear}`;