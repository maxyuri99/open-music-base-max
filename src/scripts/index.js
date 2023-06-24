/* Desenvolva sua lógica aqui ... */
import { products, categories } from './productsData.js'
import { renderButton, renderAlbum } from './render.js'
import { filterByRange, filterByType } from './filter.js'
import { renderDarkMode } from './theme.js'

const createCards = (itemArray, type) => {
    if (type === 'buttons_filter') {
        renderButton(itemArray)
    } else if (type === 'album_itens') {
        renderAlbum(itemArray)
    }
}

const buttonSelected = () => {
    const buttonAll = document.getElementById('todos')

    buttonAll.checked = true
}

renderDarkMode()
createCards(products, 'album_itens')
createCards(categories, 'buttons_filter')
filterByRange(products)
filterByType(products)
 buttonSelected()