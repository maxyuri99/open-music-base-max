/* Desenvolva sua lógica aqui ... */

export const renderDarkMode = () => {
    const darkModeButton = document.querySelector('.button-black-color__header')
    const html = document.querySelector('html')
    const theme = JSON.parse(localStorage.getItem('darkMode'))

    if (theme) {
        darkModeButton.innerHTML = '<i class="fas fa-sun icon__header"></i>'
        html.classList.add('dark__mode')
    } else {
        darkModeButton.innerHTML = '<i class="fa fa-moon icon__header"></i>'
        html.classList.remove('dark__mode')
    }

    darkModeButton.addEventListener('click', () => {
        html.classList.toggle('dark__mode')

        if (html.classList.contains('dark__mode')) {
            darkModeButton.innerHTML = '<i class="fas fa-sun icon__header"></i>'
            localStorage.setItem('darkMode', true)
        } else {
            darkModeButton.innerHTML = '<i class="fa fa-moon icon__header"></i>'
            localStorage.setItem('darkMode', false)
        }
    })
}