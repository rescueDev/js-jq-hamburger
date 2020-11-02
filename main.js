// Hamburger menu:
// mostrare / nascondere il menu principale
// (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).

//variabili
var menuOpen = $(".fas.fa-bars");
var menuClose = $(".fas.fa-times");
var submenu = $(".hamburger-menu");

//toggle show and hide menu
menuOpen.click(clickShow);
menuClose.click(clickHide);

//FUNZIONI
function clickShow() {
  submenu.addClass("active");
}

function clickHide() {
  submenu.removeClass("active");
}
