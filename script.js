let imagesList = [
    {
        src: "../assets/0.png",
        alt: "image axa",
        href: "../Project-page/Project-AXA1.html"
    },
    {
        src: "../assets/1.png",
        alt: "image maximum",
        href: "../Project-page/Project-Maximum.html"
    },
    {
        src: "../assets/2.png",
        alt: "image fjord",
        href: "../Project-page/Project-Fjord.html"
    },
    {
        src: "../assets/3.png",
        alt: "image wedeo",
        href: "../Project-page/Project-Wedeo.html"
    },
    {
        src: "../assets/4.png",
        alt: "image nuori",
        href: "../Project-page/Project-NUORI.html"
    },
    {
        src: "../assets/5.png",
        alt: "image loreal",
        href: "../Project-page/Project-loreal.html"
    },
    {
        src: "../assets/6.png",
        alt: "image japan",
        href: "../Project-page/Project-Japan.html"
    },
    {
        src: "../assets/7.png",
        alt: "image siena",
        href: "../Project-page/Project-Sienne.html"
    },
    {
        src: "../assets/8.png",
        alt: "image the camp",
        href: "../Project-page/Project-TheCamp.html"
    },
    {
        src: "../assets/9.png",
        alt: "image Monster family",
        href: "../Project-page/Project-Monster.html"
    }
]

function selectImages(images) {
    let selectedImages = {}

    while (Object.keys(selectedImages).length < 3) {
        let selectionIndex = Math.floor(Math.random() * images.length);

        if (selectedImages.hasOwnProperty(selectionIndex)) {
            continue;
        }

        selectedImages[selectionIndex] = images[selectionIndex];
    }

    return selectedImages;
}

function setRandomImages(images) {
    let nodes = document.querySelectorAll('.random-images-wrapper a')
    let selection = selectImages(images);

    Object.keys(selection).map((key, index) => {
        const img = nodes[index].querySelector('img');

        nodes[index].href = selection[key].href;

        img.src = selection[key].src;
        img.alt = selection[key].alt;
    })
}

setRandomImages(imagesList);