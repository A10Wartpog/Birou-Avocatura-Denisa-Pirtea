const texte = ['1', '2', '3', '4', '5', '6', '7', '8', '9']



function removeTag() {
    pressedButton = document.querySelector('.arie-selected')
    if (pressedButton) {
        pressedButton.classList.remove('arie-selected')
    }
}

function schimbareArie(numar) {
    removeTag()
    butonApasat = document.querySelector('.btn-' + numar)
    butonApasat.classList.add('arie-selected')
    text = document.querySelector('.arie-text')
    text.classList.add('margin-add')
    text.innerHTML = texte[numar-1]
}