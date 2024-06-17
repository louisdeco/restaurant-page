function menuPage (content) {
    const background = document.createElement("div");
    background.classList.add("background");

    const grid = document.createElement("div");
    grid.classList.add("menu-grid");

    const menuItems = [
        {
            name: "Spaghetti alla carbonara",
            description: "Spaghetti tossed with crispy guanciale, creamy egg yolk, Parmesan cheese, and a touch of black pepper.",
            price: 15
        },
        {
            name:"Fettuccine alfredo",
            description: "Rich and creamy Alfredo sauce served over perfectly cooked fettuccine, garnished with fresh parsley.",
            price: 13
        },
        {
            name: "Penne alla vodka",
            description: "Penne pasta in a smooth and flavorful vodka tomato cream sauce, topped with basil and Parmesan.",
            price: 12
        },
        {
            name: "Linguine alle vongole",
            description: "Linguine pasta with fresh clams, garlic, white wine, and a hint of chili flakes, finished with parsley.",
            price: 18
        },
        {
            name: "Pappardelle al ragù",
            description: "Wide pappardelle noodles coated in a hearty and savory Bolognese sauce made with beef, pork, and tomatoes.",
            price: 16
        },
        {
            name: "Ravioli ai Funghi Porcini",
            description: "Handmade ravioli stuffed with ricotta cheese and spinach, served with a sage butter sauce and Parmesan.",
            price: 19
        }
    ]

    menuItems.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("plate-card");

        const name = document.createElement("p");
        name.classList.add("name");
        name.textContent = item.name;

        const description = document.createElement("p");
        description.classList.add("description");
        description.textContent = item.description;

        const price = document.createElement("p");
        price.classList.add("price");
        price.textContent = item.price;

        card.append(name, description, price);
        grid.appendChild(card);
    })

    content.append(background, grid)
}

export default menuPage