const arrowPrevious = document.querySelector(".arrow-left");
const arrowNext = document.querySelector(".arrow-right");
const slider = document.querySelector(".slider");
const popup = document.querySelector(".basket")

// TEST

// Popup button
for(let i = 0; popup.length; i++){
    popup[i].addEventListener('click', () => {
        if (show.style.display === "none") {
            show.style.display = "block";
          } else {
            show.style.display = "none";
          }
        console.log("Bouton popup cliqué");
    })
}

function show(){
    let show = document.getElementById("show");
  if (show.style.display === "none") {
    show.style.display = "block";
  } else {
    show.style.display = "none";
  }
}

// Counter
// main.addEventListener('click', (event) => {
//     const minusButton = event.target.closest(".minus");
//     const plusButton = event.target.closest(".plus");
//     const display = document.querySelectorAll(".current-value");
//     if(minusButton) {
//         if(display.textContent === "0") return
//             display.textContent--;
//     }
//     if(plusButton) {
//         if(display.textContent === "50") return
//             display.textContent++;
//     }
// })
function productCount(product){
    const inputBtn = document.getElementById('input').value;
    const newInputBtn = parseInt(inputBtn);
    let total = newInputBtn;
    if(product == true){
     total = newInputBtn + 1;
    }
    if(product == false && newInputBtn > 0){
     total = newInputBtn - 1;
    }
    document.getElementById('quantity').innerText = document.getElementById('input').value = total;
    
 }

//  Total

        show.addEventListener('click', function(){
           const inputBtn =   document.getElementById('quantity').innerText =  document.getElementById('input').value;
           const newInputBtn = parseInt(inputBtn);

           const total = newInputBtn * 125;
           document.getElementById('total-price').innerText = total;
           console.log("125$")
        })

        // const calculatePrice = () => {
        //     const amountOfPairs = document.querySelector(".current-value");
        //     const value = parseInt(amountOfPairs.textContent);
        //     const sneakersPrice = document.querySelector(".sneaker-price");
        //     const xTimes = document.querySelector(".x-times");
        //     const finalPrice = document.querySelector(".stronger");
        //     const currentPrice = sneakersPrice.textContent;
        //     const removeDolar = currentPrice.substring(1, 7);
        //     const priceToNum = parseInt(removeDolar);
        //     xTimes.textContent = "x" + value ;
        //     finalPrice.textContent = "$" + value * priceToNum ; 
        //  }
        //  calculatePrice();
// Add to cart button
// for(let i = 0; addToCartButton.length; i++){
//     addToCartButton[i].addEventListener('click', () => {
//         console.log("Bouton Add to cart cliqué");
//     })
// // }
// addToCartButton.addEventListener('click', () => {
//     const amountOfPairs = document.querySelector(".current-value");
//     const basketItems = document.querySelector(".number-of-items");
//     const value = parseInt(amountOfPairs.innerHTML)
//     if(value > 0) {
//         basketItems.textContent = value;
//         calculatePrice();
//     }    
// })


// Slider

const imgs = document.querySelectorAll('.slider-contents img');
const slides = document.querySelectorAll('.desktopSlide');
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