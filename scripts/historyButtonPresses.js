function changeText(year) {
    const textElement = document.querySelector('.history-description')
    const buttonText = document.querySelector('.button' + year)
    removeUnderline()
    switch (year) {
        case 2022:
            textElement.innerHTML = 'Denisa Pirtea își începea activitatea de avocat de business, împreună cu alți trei avocați mai tineri sub denumirea de “Novalex Law Firm”.'
            buttonText.style.textDecoration = 'underline'
            buttonText.classList.add('history-is-toggled')
            break
        case 2023:
            textElement.innerHTML = 'Consultanță acordată unui portofoliu extins de clienți străini importanți precum Société Générale, Rhône-Poulenc (în prezent Sanofi Aventis) Cement Français, Renault, Bouygues, Credit Lyonnais, American International Group (A.I.G.), AT&T, Shell, Standard Oil, British Petroleum, Trafigura, etc. în legătură cu investițiile și afacerile lor din România.'
            buttonText.style.textDecoration = 'underline'
            buttonText.classList.add('history-is-toggled')
            break
        case 2024:
            textElement.innerHTML = 'Consultanță pentru Michelin în preluarea Tofan Grup, tranzacție considerată de către întreaga comunitate de afaceri și de către presa de business drept cea mai importantă tranzacție privată a anului.'
            buttonText.style.textDecoration = 'underline'
            buttonText.classList.add('history-is-toggled')
            break
        case 2025:
            textElement.innerHTML = 'Consultanță pentru Enel (Italia) în legătură cu achiziția cu succes a Electrica Dobrogea și Electrica Banat, prima privatizare a unor societăți de distribuție a energiei electrice din România.'
            buttonText.style.textDecoration = 'underline'
            buttonText.classList.add('history-is-toggled')
            break
        case 2026:
            textElement.innerHTML = 'Consultanță pentru Banca Transilvania în legătură cu vânzarea către Groupama (Franța) a pachetului majoritar de acțiuni deținut în cadrul BT Asigurări, în valoare de 100.000.000 EUR, vânzare considerată de presa de afaceri din România drept cea mai importantă tranzacție a anului în domeniul asigurărilor.'
            buttonText.style.textDecoration = 'underline'
            buttonText.classList.add('history-is-toggled')
            break
    }
}
function removeUnderline() {
    const underlinedText = document.querySelector('.history-is-toggled')
    if (underlinedText) {
        underlinedText.classList.remove('history-is-toggled')
        underlinedText.style.textDecoration = 'none'
    }
}
