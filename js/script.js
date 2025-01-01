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
const toggle = document.querySelector(".navbar-extra .searchBar");
const fromWrapper = document.querySelector(".navbar-extra");
toggle.addEventListener("click", function() {
    const icon = this.querySelector(".fas");
    this.classList.toggle("active");
    fromWrapper.classList.toggle("active");

    if (this.classList.contains("active")) {
        icon.classList.replace("fa-search", "fa-times");
    } else {
        icon.classList.replace("fa-search", "fa-times");
    }
});