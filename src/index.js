import "./styles.css";
import homePage from "./home-page";
import aboutPage from "./about-page";

const content = document.querySelector(".content");
const aboutButton = document.querySelector(".about");
const homeButton = document.querySelector(".home");

homePage(content);

homeButton.addEventListener("click", () => {
    content.innerHTML = "";
    homePage(content);
})

aboutButton.addEventListener("click", () => {
    content.innerHTML = "";
    aboutPage(content);
})

