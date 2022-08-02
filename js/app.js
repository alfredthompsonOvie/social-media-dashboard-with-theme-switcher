"use strict";
const checkbox = document.querySelector("#checkbox");
const topBg = document.querySelector("#topBg");
const cards = document.querySelectorAll(".card");
const text = document.querySelectorAll(".text");
const header = document.querySelector(".overview");
const themeText = document.querySelector(".text--theme-text");

checkbox.addEventListener("change", () => {
    document.body.classList.toggle("light");

    if (header.classList.contains("overview")) {
        header.classList.toggle("newText");
        themeText.classList.toggle("newText");
    }
    if (topBg.classList.contains("top__bg")) {
        topBg.classList.toggle("top-bgLight");
    }
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
});