const id = document.getElementById("advice-id");
const txt = document.getElementById("advice-text");
const generateBtn = document.getElementById("generate-btn");
const apiUrl = "https://api.adviceslip.com/advice";

const fetchAdvice = async () => {
  const data = await (await fetch(apiUrl)).json();
  id.innerText = data.slip.id;
  txt.innerText = data.slip.advice;
};

generateBtn.addEventListener("click", fetchAdvice);

fetchAdvice();
