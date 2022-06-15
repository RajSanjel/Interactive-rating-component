const submitBtn = document.querySelector('.btn-submit')
const ratingNumbers = document.querySelectorAll('.rating-number')
let rated;
let hasRated=false;

ratingNumbers.forEach(rating => {
    rating.addEventListener('click', () => {
        if (hasRated){
        document.querySelector('.rated').classList.remove('rated')
    } else {
        hasRated=true;
    }
        rating.classList.add('rated')
        rated = document.querySelector('.rated').innerText

    })
});

submitBtn.addEventListener('click', () => {
    if (rated=== undefined){
        rated=0;
    }
document.querySelector('.rating').innerText = rated;
document.querySelector('.ask-section').classList.add('hidden')
document.querySelector('.thank-you').classList.remove('hidden')
})