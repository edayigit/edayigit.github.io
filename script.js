// Scroll yaparken üst menü küçülme efekti
window.onscroll = function() {
    let header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.padding = "10px";
    } else {
        header.style.padding = "20px";
    }
};
