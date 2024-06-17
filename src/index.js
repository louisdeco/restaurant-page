import "./styles.css";
import homePage from "./home-page";
import aboutPage from "./about-page";
import menuPage from "./menu-page";

const content = document.querySelector(".content");
const aboutButton = document.querySelector(".about");
const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");

homePage(content);

homeButton.addEventListener("click", () => {
    content.innerHTML = "";
    homePage(content);
})

aboutButton.addEventListener("click", () => {
    content.innerHTML = "";
    aboutPage(content);
})

menuButton.addEventListener("click", () => {
    content.innerHTML = "";
    menuPage(content);
})

