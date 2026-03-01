const reviews = [`” Serviciile juridice au fost furnizate la un nivel înalt de profesionalism, cu o abordare strategică și orientată spre rezultate. Comunicarea a fost clară, iar gestionarea speței s-a realizat eficient și responsabil”`, '„Echipa a demonstrat competență juridică solidă, rigurozitate în analiză și o bună capacitate de gestionare a aspectelor procedurale. Colaborarea s-a desfășurat în condiții de transparență și promptitudine”', '„Am apreciat standardele profesionale ridicate, respectarea termenelor și calitatea consultanței oferite. Abordarea a fost structurată, iar soluțiile propuse au fost bine fundamentate juridic”', '„Servicii juridice caracterizate prin profesionalism, rigoare și eficiență operațională. Colaborare predictibilă și orientată spre soluții durabile.”']
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
