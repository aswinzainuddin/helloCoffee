// toggle class active
const navbar = document.querySelector(".navbar");

// when menu is clicked
document. querySelector("#menu").onclick = () => {
    navbar.classList.toggle("active");
}

// removing side bar menu
const menu = document.querySelector("#menu");
document.addEventListener("click", function(e) { 
    if (!menu.contains(e.target) && !navbar.contains(e.target)) {
        navbar.classList.remove("active");
    }
})

// search bar active
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#searchBox");

document.querySelector("#searchButton").onclick = (e) => {
    searchForm.classList.toggle("active");
    searchBox.focus();
    e.preventDefault();
}

