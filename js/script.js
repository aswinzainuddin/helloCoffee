// toggle class active
const navbar = document.querySelector(".navbar");

// when menu is clicked
document.querySelector("#menu").onclick = () => {
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
const searchButton = document.querySelector("#searchButton");

document.querySelector("#searchButton").onclick = (e) => {
    searchForm.classList.toggle("active");
    searchBox.focus();
    e.preventDefault();
}
// removing search bar active
document.addEventListener("click", function(e) { 
    if(!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove("active");
    }
});

// shopping cart active 
const shoppingCart = document.querySelector(".shopping-cart");
// when it is clicked 
document.querySelector("#shopping-cart-button").onclick = (e) => {
    shoppingCart.classList.toggle("active");
    e.preventDefault();
}
// removing shopping cart toggle
const sc = document.querySelector("#shopping-cart-button");
document.addEventListener("click", function(e) { 
    if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove("active");
    }
});

// modal item
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailModal.style.display = "flex";
        e.preventDefault();
    };
});

itemDetailButtons.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
};

// removing by clicking close icon
document.querySelector(".modal .close-icon").onclick = (e) => {
    itemDetailModal.style.display = "none";
    e.preventDefault();
}
// clicking modal window
window.onclick = (e) => {
    if (e.target === itemDetailModal) {
        itemDetailModal.style.display = "none";
    }
}

