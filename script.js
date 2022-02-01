const nav = document.querySelector(".primary-navigation");
const arrowPrevious = document.querySelector(".arrow-left");
const arrowNext = document.querySelector(".arrow-right");
const slider = document.querySelector(".slider")
const addToCartButton = document.querySelectorAll(".add-to-cart");
const remove = document.querySelector('.delete');
// const popup = document.querySelectorAll(".basket");

// TEST

// Popup button
for(let i = 0; popup.length; i++){
    popup[i].addEventListener('click', () => {
        console.log("Bouton popup cliqué");
    })
}
function popup(){
    let show = document.getElementById("show");
  if (show.style.display === "none") {
    show.style.display = "block";
  } else {
    show.style.display = "none";
  }
}
// Add to cart button
for(let i = 0; addToCartButton.length; i++){
    addToCartButton[i].addEventListener('click', () => {
        console.log("Bouton Add to cart cliqué");
    })
}