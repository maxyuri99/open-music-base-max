export const renderButton = (arrayItens) => {
    const controllerButtons = document.querySelector('.gender-list__controller')

    controllerButtons.innerHTML = ''


    arrayItens.forEach(itenSelected => {
        const indexArray = arrayItens.findIndex(index => index === itenSelected)

        const henderButton = createCardButton(itenSelected, indexArray)


        controllerButtons.appendChild(henderButton)
    });
}

export const renderAlbum = (arrayItens) => {
    const controllerAlbuns = document.querySelector('.album-list__controller')

    controllerAlbuns.innerHTML = ''

    arrayItens.forEach(itenSelected => {
        const henderAlbum = createCardAlbum(itenSelected)

        controllerAlbuns.appendChild(henderAlbum)
    });

}

const createCardButton = (buttonItens, indexIten) => {
    const listValue = document.createElement('li')
    const inputItem = document.createElement('input')
    const labelItem = document.createElement('label')

    listValue.classList.add('list__button')
    inputItem.classList.add('input-gender__filter')
    labelItem.classList.add('button-gender__filter')

    inputItem.dataset.clientId = indexIten
    inputItem.hidden = true
    inputItem.type = 'radio'
    inputItem.name = 'resumeTypeID'

    inputItem.id = buttonItens.toLowerCase()
    labelItem.htmlFor = buttonItens.toLowerCase()
    labelItem.innerText = buttonItens

    listValue.append(inputItem, labelItem)

    return listValue
}

const createCardAlbum = (albumItens) => {
    const { title, category, price, img, band, year, id } = albumItens

    const listValue = document.createElement('li')
    const zoomContainer = document.createElement('div')
    const imgItem = document.createElement('img')
    const allContainer = document.createElement('div')
    const divDescItem = document.createElement('div')
    const nameBandItem = document.createElement('p')
    const yearAlbumItem = document.createElement('p')
    const nameAlbumItem = document.createElement('h3')
    const divBuyItem = document.createElement('div')
    const priceItem = document.createElement('p')
    const priceSpan = document.createElement('span')
    const buttonItem = document.createElement('button')

    listValue.classList.add('album-li__container')
    zoomContainer.classList.add('zoom-container')
    imgItem.classList.add('image__album')
    allContainer.classList.add('all-intens-album__container')
    divDescItem.classList.add('description-album__container')
    nameBandItem.classList.add('name-band-data__album')
    yearAlbumItem.classList.add('year-album__album')
    nameAlbumItem.classList.add('name__album')
    divBuyItem.classList.add('buy-album__container')
    priceItem.classList.add('price__album')
    buttonItem.classList.add('button__buy-album')

    listValue.dataset.clientId = category
    imgItem.dataset.clientId = id
    buttonItem.dataset.clientId = id

    imgItem.src = img
    imgItem.alt = title
    nameBandItem.innerText = band
    yearAlbumItem.innerText = year
    nameAlbumItem.innerText = title
    priceItem.innerText = 'R$ '
    priceSpan.innerText = price + '.00'
    buttonItem.innerText = 'Comprar'

    listValue.append(zoomContainer, allContainer)
    zoomContainer.append(imgItem)
    allContainer.append(divDescItem, nameAlbumItem, divBuyItem)
    divDescItem.append(nameBandItem, yearAlbumItem)

    divBuyItem.append(priceItem, buttonItem)
    priceItem.appendChild(priceSpan)

    return listValue
}




