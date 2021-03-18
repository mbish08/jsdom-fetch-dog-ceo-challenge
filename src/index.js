console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function () {
    fetchImages()
    fetchBreeds()
})

function fetchImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(result => eachImage(result))
}

function eachImage(image) {
    image.message.forEach(image => displayImage(image))
    // console.log(image)
}

function displayImage (dogPic) {
    const container = document.getElementById('dog-image-container')
    let newDogPic = document.createElement('img')
    newDogPic.src = dogPic
    container.appendChild(newDogPic)
}

function fetchBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(result => eachBreed(result.message))
    // console.log(result)
}

function eachBreed (breeds) {
    // console.log(breeds)
    const breedId = document.getElementById('dog-breeds')
    removeChildren(breedId)
    
}

