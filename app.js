//selectors
const ratings = document.querySelectorAll('.rating-btn');
const submit = document.querySelector('.submit-btn');
const thanks = document.querySelector('.thank-wrapper');
const wrapper = document.querySelector('.wrapper');
const number = document.querySelector('.number-selection')
const error = document.querySelector('.error');

//functions
let selection = 0
    function getRating(ratings) {
    selection = this.dataset.value;
    number.innerText = selection;
    return selection;
};

function submitRating(e) {
    if (selection !== 0) {
       thanks.classList.add('active');
       wrapper.style.display = 'none';
    } else {
        e.preventDefault;
    error.style.display = 'flex';
}};

//event listeners
ratings.forEach(rating => rating.addEventListener('click', getRating));
submit.addEventListener('click', submitRating);