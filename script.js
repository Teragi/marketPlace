const empty = document.getElementById("empty");
const full = document.getElementById("full");

// Popup cart

function show(){
    let show = document.getElementById("show");
  if (show.style.display === "none") {
    show.style.display = "block";
    empty.style.display = "block";
  }
  else if(full.style.display === "block"){
      empty.style.display = "none";
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
     full.style.display = "block";
    }
    if(product == false && newInputBtn > 0){
     total = newInputBtn - 1;
    }
    document.getElementById('quantity').innerText = document.getElementById('input').value = total;
    document.getElementById('quantity2').innerText = document.getElementById('input').value = total;
    
 }

//  Total + Add to cart

        // show.addEventListener('click', function(){
        //    const inputBtn =   document.getElementById('quantity').innerText =  document.getElementById('input').value;
        //    const newInputBtn = parseInt(inputBtn);

        //    const total = newInputBtn * 125;
        //    document.getElementById('total-price').innerText = total;
        //    console.log("125$")
        // })

        const buyBtn = document.getElementById('buy');
        buyBtn.addEventListener('click', function(){
           const inputBtn =   document.getElementById('quantity').innerText =  document.getElementById('input').value;
           const newInputBtn = parseInt(inputBtn);

           const total = newInputBtn * 125;
           document.getElementById('total-price').innerText = total;
           console.log("Bouton add to cart cliqué");
        })
        
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

// MODAL

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var image = document.getElementsByClassName("active");
var div = document.getElementById("imageModal");

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  div.appendChild(image);
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// imgs.addEventListener(click, function() {
//   for(let i = 0; i < imgs.length; i++){

//   }
// })

// const sliderContents = document.querySelectorAll('slider-contents');

// imgs.forEach(sliderContents =>{
//   sliderContents.addEventListener('click', function(){
      
//     document.div.innerHTML = imgs;
//       this.classList.add('active-slide');
//       imgs[index].classList.remove('active');
//       index = this.getAttribute('data-clic') -1;
//       imgs[index].classList.add('active');
//   })
// })
