const RANDOM_CAT = "https://cataas.com/cat"
const RANDOM_CUT_CAT = "https://cataas.com/cat/cute"
const RANDOM_GIT_CAT = "https://cataas.com/cat/gif"
const RANDOM_CAT_SAYING_HELLO = "https://cataas.com/cat/says/hello"
const RANDOM_CUT_CAT_SAYING_HELLO = "https://cataas.com/cat/cute/says/hello"

function getRandomCat() {
    getCatImage(RANDOM_CAT, "randomCat");
}

function getRandomCuteCat() {
    getCatImage(RANDOM_CUT_CAT, "randomCuteCat");
}

function getRandomGifCat() {
    getCatImage(RANDOM_GIT_CAT, "randomGifCat");
}

function getRandomCatSayingHello() {
    getCatImage(RANDOM_CAT_SAYING_HELLO, "randomCatSayingHello");
}

function getRandomCuteCatSayingHello() {
    getCatImage(RANDOM_CUT_CAT_SAYING_HELLO, "retRandomCuteCatSayingHello");
}

async function getAllImages() {
    await Promise.all([getRandomCat(), getRandomCuteCat(), getRandomGifCat(), getRandomCatSayingHello(), getRandomCuteCatSayingHello()]);
}

const getCatImage = async (url, idElement) => {
    const catImage = document.getElementById(idElement);
    try {
        const response = await fetch(url);
        if (response.ok) {
            catImage.src = url;
        } else {
            throw new Error("No se pudo cargar la imagen.");
        }
    } catch (error) {
        console.error(error);
    }
}