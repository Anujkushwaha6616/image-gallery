const filterButtons = document.querySelectorAll(".filter_button button");
const filterButtons = document.querySelectorAll(".filter_cards .card");

const filterCards = e =>{
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
   // console.log(e);
   filterableCards.forEach(card => {
    card.classList.add("hide");
    if(card.data.name === e.target.dataset.name||e.target.dataset.name === "all"){
        card.classList.add("hide");
    }
   });
};

//console.log(filterButtons,filterableCards);
filterButtons.forEach(button=> button.addEventListener("click", filterCards));
