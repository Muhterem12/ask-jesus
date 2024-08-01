const checkButton = document.querySelector("#check-btn");
const text = document.getElementById("text-input");
const result = document.querySelector("#result");
const span = document.querySelector(".word");

// TODO check whitespace
const isWhiteSpaceString = (str) => !/\S/.test(str);

// TODO check if it is palindrome
const checkPalindrome = function (str) {
  const regex = /[^a-zA-Z1-9]/g;
  const normalize = (sent) => sent.replace(regex, "").toLowerCase();
  const main = normalize(str);
  const reversed = [...main].reverse().join("");

  // console.log(main);
  // console.log(reversed);
  return main === reversed;
};

// console.log(checkPalindrome('1 eye for 1 eye.'));
// console.log(checkPalindrome('0_0 (: /- :) 0-0'));
// console.log(checkPalindrome('A man, a plan, a canal. Panama'));

// console.clear();
// TODO attach event handler and manipulate DOM
checkButton.addEventListener("click", function (e) {
  const noSpace = text.value.trim();

  if (noSpace === "") {
    console.log(text.value);
    alert("Please input a value");
  } else if (checkPalindrome(text.value)) {
    result.innerText = `${text.value} is a palindrome`;
  } else {
    result.innerText = `${text.value} is not a palindrome`;
  }
});
