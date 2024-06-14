import "./styles.css"

function test () {
    const element = document.createElement("div");
    element.textContent = "Hello, World!";

    element.classList.add("test")

    return element
}

// document.body.appendChild(test());