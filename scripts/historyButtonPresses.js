function changeText(year) {
    const textElement = document.querySelector('.history-description')
    const buttonText = document.querySelector('.button' + year)
    const allButtons = document.querySelectorAll('.year-button')
    console.log(toString(allButtons))
    allButtons.forEach((button) => {
        button.style.textDecoration = 'none'
    })

    switch (year) {
        case 2022:
            textElement.innerHTML = 'text 2022'
            buttonText.style.textDecoration = 'underline'
            break
        case 2023:
            textElement.innerHTML = 'text 2023'
            buttonText.style.textDecoration = 'underline'
            break
        case 2024:
            textElement.innerHTML = 'text 2024'
            buttonText.style.textDecoration = 'underline'
            break
        case 2025:
            textElement.innerHTML = 'text 2025'
            buttonText.style.textDecoration = 'underline'
            break
        case 2026:
            textElement.innerHTML = 'text 2026'
            buttonText.style.textDecoration = 'underline'
            break
    }
}
