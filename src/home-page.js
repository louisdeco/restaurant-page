function homePage (content) {
    const leftBackground = document.createElement("div");
    leftBackground.classList.add("left-background");

    const rightBackground = document.createElement("div");
    rightBackground.classList.add("right-background");

    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper-home")

    const title = document.createElement("p");
    title.textContent = "Authentic pasta since 1989";
    title.classList.add("title");
    const text = document.createElement("p");
    text.textContent = "Experience our seasonal menu in beautiful country surroundings. Eat the freshest products from the comfort of our farmhouse.";
    text.classList.add("text");
    const button = document.createElement("button");
    button.textContent = "BOOK A TABLE";
    button.classList.add("book")

    wrapper.append(title, text, button)

    content.append(leftBackground, rightBackground, wrapper)
}

export default homePage