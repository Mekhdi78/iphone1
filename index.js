let colornavItems = document.querySelectorAll('li')
let colorElement = document.querySelector('.color')
let imageElement = document.querySelector('.img1')

let colors = [
    {
        name: ' Purple',
        imgPath: './img/purple.jfif'
    },
    {
        name: ' Gold',
        imgPath: './img/gold.jfif'
    },
    {
        name: ' White',
        imgPath: './img/white.jfif'
    },
    {
        name: ' Black',
        imgPath: './img/black.jfif'
    }
];

let defaultSelected = colors[0]

colornavItems.forEach(item => {
    let text = item.getAttribute('data-text')
    let iphone = colors[text]

    item.onmouseenter = () => {
        colorElement.innerHTML = `Color - ${iphone.name}`
    }

    item.onmouseleave = () => {
        colorElement.innerHTML = `Color - ${defaultSelected.name}`
    }

    colornavItems.forEach((color, index) => {
        color.onclick = () => {
            let link = colors[index]
            imageElement.src = link.imgPath
            colorElement.innerText = `Color - ${link.name}`
            defaultSelected = iphone
        }
    })
})
