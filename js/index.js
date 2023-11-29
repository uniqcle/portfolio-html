const runningString = document.querySelector("#runningString");
const runningStringText = runningString.textContent;
let index = 0;

function runString() {
  runningString.innerText = runningStringText.slice(0, index);
  index++;
}

runString();

let intervalId = setInterval(runString, 100);

setTimeout(() => {
  clearInterval(intervalId);
}, 7000);
