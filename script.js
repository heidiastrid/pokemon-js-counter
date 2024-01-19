let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

let previousResults = document.getElementById("previous-entries")

function save() {
    let countString = count + " - "; 
    console.log(countString);
previousResults.innerHTML += countString
countEl.innerText = 0
}
