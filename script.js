const nav = document.querySelector(".primary-navigation");
const header = document.querySelector('.primary-header')
const main = document.querySelector('main')

const empty = document.getElementById("empty");
const full = document.getElementById("full");
const del = document.querySelector("delete");
const quant = document.getElementById("quantity2");
const check = document.getElementById("check");

// BarNav
header.addEventListener("click", (event) => {
  const navToggle = event.target.closest(".mobile-nav-toggle")
  if(navToggle) {
      nav.classList.add('active')
  }
 
 })
 
 header.addEventListener("click", (event) => {
  const closeNav = event.target.closest(".close-mobile-nav")
     if(closeNav) {
         nav.classList.remove('active')
     }
 })

// Popup cart
function show(){
    let show = document.getElementById("show");
  if (show.style.display === "none") {
    show.style.display = "block";
  }
   else {
    show.style.display = "none";
    console.log("show cliqué");
  }
}
// // Counter
function productCount(product){
    const inputBtn = document.getElementById('input').value;
    const newInputBtn = parseInt(inputBtn);
    let total = newInputBtn;
    if(product == true){
     total = newInputBtn + 1;
     empty.style.display ="none";
     full.style.display = "block";
     check.style.display = "block"
    }
    if(product == false && newInputBtn > 0){
      empty.style.display = "none";
     total = newInputBtn - 1;
    }
    // Show full cart
    if(total === 0){
        empty.style.display = "block";
        full.style.display = "none";
        check.style.display = "none";
    }
    if(total > 0){
        empty.style.display = "none";
;    }
    document.getElementById('quantity').innerText = document.getElementById('input').value = total;
    document.getElementById('quantity2').innerText = document.getElementById('input').value = total;
    
 }

//  Delete
function remove()
{
  empty.style.display = "block";
  full.style.display = "none";
  quant.style.display = "none";
  check.style.display = "none";
  console.log("Delete cliqué");
}

// function remove() {
//   full.parentNode.removeChild(full);
//   return false;
// }

//  Total + Add to cart
        const buyBtn = document.getElementById('buy');
        buyBtn.addEventListener('click', function(){
           const inputBtn =   document.getElementById('quantity').innerText =  document.getElementById('input').value;
           const newInputBtn = parseInt(inputBtn);

           const total = newInputBtn * 125;
           document.getElementById('total-price').innerText = total;
           quant.style.display = "block";
           empty.style.display ="none";
           console.log("Bouton add to cart cliqué");
        })
        
// Slider

const imgs = document.querySelectorAll('.slide');
const suivant = document.querySelector('.arrow-modal-right');
const precedent = document.querySelector('.arrow-modal-left');
const suivantMobile = document.querySelector('.arrow-right');
const precedentMobile = document.querySelector('.arrow-left');
const slides = Array.from(document.querySelectorAll('.desktopSlide'));
const slidesModal = Array.from(document.querySelectorAll('.desktopSlideModal'));
let index = 0;

slides.forEach(sliderContentsDesktop =>{
    sliderContentsDesktop.addEventListener('click', function(){
        for(let i = 0; i < slides.length; i++){
            slides[i].classList.remove('active-slide');
        }
        this.classList.add('active-slide');
        imgs[index].classList.remove('active');
        index = this.getAttribute('data-clic') -1;
        imgs[index].classList.add('active');
    })
})

// Carousel Mobile

suivantMobile.addEventListener('click', slideSuivanteMobile);

function slideSuivanteMobile(){
    if(index < 3){
      imgs[index].classList.remove('active');
      index++;
      imgs[index].classList.add('active');
    }else if(index === 3){ 
      imgs[index].classList.remove('active');
      index = 0;
      imgs[index].classList.add('active');
    }
}

precedentMobile.addEventListener('click', slidePrecedenteMobile);

function slidePrecedenteMobile(){
    if(index > 0){
      imgs[index].classList.remove('active');
      index--;
      imgs[index].classList.add('active');
    }else if(index === 0){
      imgs[index].classList.remove('active');
      index = 3;
      imgs[index].classList.add('active');
    }
}

// MODAL

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var modalImage = document.getElementById("imageModal");

// When the user clicks the button, open the modal 
slides.forEach(slide => {
    slide.addEventListener('click', () => {
        modal.style.display = "block";
        var img = document.createElement('img');
        img.src = imgs[index].src;
        modalImage.appendChild(img);
    })
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  modalImage = "";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modalImage = "";
  }
}


suivant.addEventListener('click', slideSuivante);

function slideSuivante(){
    if(index < 3){
      clearcontent('imageModal');
        index++;
        var img = document.createElement('img');
        img.src = imgs[index].src;
        modalImage.appendChild(img);
    }else if(index === 3){ 
      clearcontent('imageModal');
        index = 0;
        var img = document.createElement('img');
        img.src = imgs[index].src;
        modalImage.appendChild(img);
    }
    for(let i = 0; i < slidesModal.length;i++){
      if(slidesModal[i].getAttribute('data-clic') - 1 === index){
        slidesModal[i].classList.add('active-slide');
      }else{
        slidesModal[i].classList.remove('active-slide');
      }
  }
}

precedent.addEventListener('click', slidePrecedente);

function slidePrecedente(){
    if(index > 0){
        clearcontent('imageModal');
        index--;
        var img = document.createElement('img');
        img.src = imgs[index].src;
        modalImage.appendChild(img);
    }else if(index === 0){
      clearcontent('imageModal');
        index = 3;
        var img = document.createElement('img');
        img.src = imgs[index].src;
        modalImage.appendChild(img);
    }

    for(let i = 0; i < slidesModal.length;i++){
      if(slidesModal[i].getAttribute('data-clic') - 1 === index){
        slidesModal[i].classList.add('active-slide');
      }else{
        slidesModal[i].classList.remove('active-slide');
      }
  }
}

function clearcontent(elementID) {
  document.getElementById(elementID).innerHTML = "";
}
