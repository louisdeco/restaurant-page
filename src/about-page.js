function aboutPage (content) {
    const background = document.createElement("div");
    background.classList.add("background")

    const picture = document.createElement("div");
    picture.classList.add("picture");

    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper-about");

    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = "Nestled in the heart of the countryside,";

    const firstParagraph = document.createElement("p");
    firstParagraph.classList.add("text");
    firstParagraph.textContent = "our restaurant has been serving authentic, handmade pasta since 1989. We believe in the simplicity of fresh ingredients, traditional recipes, and a passion for Italian cuisine. Our commitment to quality and love for food is reflected in every dish we create.";
    
    const secondParagraph = document.createElement("p");
    secondParagraph.classList.add("text");
    secondParagraph.textContent = "At our restaurant, we take pride in using locally sourced, seasonal ingredients to craft our menus. From our signature pasta dishes to our delectable desserts, every bite is a celebration of flavor and tradition. Our cozy, farmhouse setting offers a warm and inviting atmosphere where you can enjoy a delightful dining experience.";
    
    const thirdParagraph = document.createElement("p");
    thirdParagraph.classList.add("text");
    thirdParagraph.textContent = "Whether you're joining us for a casual lunch, a family dinner, or a special celebration, we look forward to welcoming you with open arms and delicious food.";

    wrapper.append(title, firstParagraph, secondParagraph, thirdParagraph)

    content.append(background, picture, wrapper)
}   

export default aboutPage