export const captchGeneration = () => {
  let que1 = document.querySelector(".que1");
  let que2 = document.querySelector(".que2");

  que1.innerText = Math.floor(Math.random() * 20);
  que2.innerText = Math.floor(Math.random() * 20);
};
export const captchValidation = () => {
  let que1 = document.querySelector(".que1");
  let que2 = document.querySelector(".que2");
  let ans = document.querySelector(".ans");
  if (
    ans.value !== null &&
    parseInt(que1.innerText) + parseInt(que2.innerText) === parseInt(ans.value)
  ) {
    return true;
  } else {
    return false;
  }
};
