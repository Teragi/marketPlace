const nav = document.querySelector(".primary-navigation");
const arrowPrevious = document.querySelector(".arrow-left");
const arrowNext = document.querySelector(".arrow-right");
const slider = document.querySelector(".slider")
const addToCartButton = document.querySelectorAll(".add-to-cart");
const remove = document.querySelector('.delete');
const popup = document.querySelectorAll(".basket");
const show = document.getElementById("show");

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

// function show(){
//     let show = document.getElementById("show");
//   if (show.style.display === "none") {
//     show.style.display = "block";
//   } else {
//     show.style.display = "none";
//   }
// }

// Counter
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

// Add to cart button
for(let i = 0; addToCartButton.length; i++){
    addToCartButton[i].addEventListener('click', () => {
        console.log("Bouton Add to cart cliqué");
    })
}



// Slider

const imgs = document.querySelectorAll('.slider-contents img');
const slides = document.querySelectorAll('.desktop-slide');

let index = 0;
suivant.addEventListener('click', slideSuivante);

function slideSuivante(){
    if(index < 3){
        imgs[index].classList.remove('active');
        //cercles[index].classList.remove('active-cercle');
        index++;
        imgs[index].classList.add('active');
        //cercles[index].classList.add('active-cercle');
    }else if(index === 2){ 
        imgs[index].classList.remove('active');
        //cercles[index].classList.remove('active-cercle');
        index = 0;
        imgs[index].classList.add('active');
        //cercles[index].classList.add('active-cercle');  
    }

    for(let i = 0; i < slides.length;i++){
        if(slides[i].getAttribute('data-clic') - 1 === index){
            slides[i].classList.add('active-slide');
        }else{
            slides[i].classList.remove('active-slide');
        }
    }
}

precedent.addEventListener('click', slidePrecedente);

function slidePrecedente(){
    if(index > 0){
        imgs[index].classList.remove('active');
        //cercles[index].classList.remove('active-cercle');
        index--;
        imgs[index].classList.add('active');
        //cercles[index].classList.add('active-cercle');
    }else if(index === 0){
        imgs[index].classList.remove('active');
        //cercles[index].classList.remove('active-cercle');
        index = 2;
        imgs[index].classList.add('active');
        //cercles[index].classList.add('active-cercle');
    }

    for(let i = 0; i < cercles.length;i++){
        if(slides[i].getAttribute('data-clic') - 1 === index){
            slides[i].classList.add('active-slide');
        }else{
            slides[i].classList.remove('active-slide');
        }
    }
}




// document.addEventListener('keydown', keyPressed);

// function keyPressed(e){
//     //e = l'objet de l'evenement
//     if(e.keyCode === 37){
//         slidePrecedente();
//     }else if(e.keyCode === 39){
//         slideSuivante();
//     }
// }

// slides.forEach(slide =>{
//     cercle.addEventListener('click', function(){
//         for(let i = 0; i < slides.length; i++){
//             slides[i].classList.remove('active-cercle');
//         }
//         this.classList.add('active-cercle');
//         imgs[index].classList.remove('active');
//         index = this.getAttribute('data-clic') -1;
//         imgs[index].classList.add('active');
//     })
// })