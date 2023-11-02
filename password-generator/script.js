const pass = document.getElementById("password");
const upper_case = document.getElementById("upper-case");
const total_char = document.getElementById("total-char");
const lower_char = document.getElementById("lower-case");
const special = document.getElementById("symbol");
const num = document.getElementById("number");

let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let lowercase = "abcdefghijklmnopqrstuvwxyz";
let number = "1234567890";
let symbol = "!@#$%^&*()/?/=+.";

const getanswer = function (dataset) {
  return dataset[Math.floor(Math.random() * dataset.length)];
};

const button = function (password = "") {
  if (upper_case.checked) {
    password += getanswer(uppercase);
  }
  if (lower_char.checked) {
    password += getanswer(lowercase);
  }
  if (num.checked) {
    password += getanswer(number);
  }
  if (special.checked) {
    password += getanswer(symbol);
  }
  if (password.length < total_char.value) {
    return button(password);
  }
  pass.innerText = truncateString(password, total_char.value);
};

document.getElementById("submit").addEventListener("click", function () {
  button();
  console.log(total_char.value);
});

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num);
  } else {
    return str;
  }
}
