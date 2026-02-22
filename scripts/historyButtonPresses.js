function changeText(year) {
    const textElement = document.querySelector('.history-description')
    const buttonText = document.querySelector('.button' + year)
    removeUnderline()
    switch (year) {
        case 2022:
            textElement.innerHTML = 'text 2022'
            buttonText.style.textDecoration = 'underline'
            buttonText.classList.add('is-toggled')
            break
        case 2023:
            textElement.innerHTML = 'text 2023'
            buttonText.style.textDecoration = 'underline'
            buttonText.classList.add('is-toggled')
            break
        case 2024:
            textElement.innerHTML = 'text 2024'
            buttonText.style.textDecoration = 'underline'
            buttonText.classList.add('is-toggled')
            break
        case 2025:
            textElement.innerHTML = 'text 2025'
            buttonText.style.textDecoration = 'underline'
            buttonText.classList.add('is-toggled')
            break
        case 2026:
            textElement.innerHTML = 'text 2026'
            buttonText.style.textDecoration = 'underline'
            buttonText.classList.add('is-toggled')
            break
    }
}
function removeUnderline() {
    const underlinedText = document.querySelector('.is-toggled')
    if (underlinedText) {
        underlinedText.classList.remove('is-toggled')
        underlinedText.style.textDecoration = 'none'
    }
}
