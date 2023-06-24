import { renderAlbum } from './render.js'

export const filterByRange = (array) => {
    const inputRange = document.querySelector('.price-filter__range')

    // Função para aplicar o estilo do input range
    const applyRangeStyle = () => {
        inputRange.style.setProperty('--range-value', inputRange.value / inputRange.max)
    }
    
    document.addEventListener('DOMContentLoaded', applyRangeStyle);

    inputRange.addEventListener('input', () => {
        const priceItem = document.querySelector('.price__filter')
        const sessionCategory = Number(sessionStorage.getItem('idCategory'))

        priceItem.innerText = inputRange.value

        if (sessionCategory != 0) {
            const arrayFilter = array.filter((character) => {
                const filteredPrice = character.price <= parseFloat(inputRange.value)
                const filteredCategory = Number(character.category) === sessionCategory

                return filteredPrice && filteredCategory
            })

            renderAlbum(arrayFilter)
        } else {
            const arrayFilterAll = array.filter((character) => {
                return character.price <= parseFloat(inputRange.value)
            })

            renderAlbum(arrayFilterAll)
        }
        applyRangeStyle()
    })
}

export const filterByType = (array) => {
    const buttons = document.querySelectorAll('.input-gender__filter')

    buttons.forEach(button => {
        button.addEventListener('change', (event) => {
            const buttonclientId = Number(event.target.dataset.clientId)

            if (buttonclientId != 0) {
                sessionStorage.setItem('idCategory', buttonclientId)

                const filtered = array.filter(character => {
                    return character.category === buttonclientId
                })

                renderAlbum(filtered)
            } else {
                sessionStorage.setItem('idCategory', buttonclientId)
                renderAlbum(array)
            }
        })
    })
}