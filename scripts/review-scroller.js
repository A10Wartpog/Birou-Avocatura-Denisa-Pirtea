const reviews = [`Oferim consultanță juridică strategică și reprezentare fermă pentru
                            persoane și companii. Analizăm fiecare caz cu rigoare, construim soluții
                            pragmatice și acționăm prompt pentru a proteja interesele clienților
                            noștri. Profesionalism, confidențialitate și rezultate — acestea sunt
                            standardele noastre. PLACEHOLDER!!!!!!!!!!`, 'rev2', 'rev3', 'rev4']
const n = reviews.length
let index = 0

showReview(0)

function showReview(index) {
    const reviewText = document.querySelector('.review-grid-text')
    reviewText.textContent = reviews[index]
}

function showNext() {
    if (index+1 <= n - 1) {
        index++
        showReview(index)

    } else {
        index = 0
        showReview(index)
    }
}

function showPrev() {
    if (index-1 >=0) {
        index--
        showReview(index)
    } else {
        index = n-1
        showReview(index)
    }

}
