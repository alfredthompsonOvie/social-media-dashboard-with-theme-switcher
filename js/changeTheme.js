const checkbox = document.querySelector("#checkbox");
const topBg = document.querySelector("#topBg");
const cards = document.querySelectorAll(".card");
const text = document.querySelectorAll(".text");
const header = document.querySelector(".overview");
const themeText = document.querySelector(".text--theme-text");

const body = document.querySelector("body");

function changeTheme() {
  checkbox.addEventListener("change", () => {
    
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].classList.contains("card")) {
        cards[i].classList.toggle("cardLight");
      }
    }
    for (let i = 0; i < text.length; i++) {
      if (text[i].classList.contains("text")) {
        text[i].classList.toggle("newText");
      }
    }
  
    if (body.classList.contains("light")) {
      body.classList.remove("light");
      header.classList.remove("newText");
      themeText.classList.remove("newText");
      themeText.textContent = "Light Mode";
      topBg.classList.remove("top-bgLight");
      return;
    }
    body.classList.add("light");
    header.classList.add("newText");
    themeText.classList.add("newText");
    themeText.textContent = "Dark Mode";
    topBg.classList.add("top-bgLight");
  })
}
export { changeTheme };
