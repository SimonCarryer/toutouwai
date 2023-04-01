
function buildCard(bird) {
    let div = document.createElement("div");
    div.className = "birdCard";
    div.id = bird.band;
    div.appendChild(buildSlider(bird));
    div.appendChild(buildInfo(bird));
    div.innerHTML += `<a href="#" onclick="closeCard(this)" class="close">`
    return div
}

function closeCard(elem) {
    elem.parentNode.className = elem.parentNode.className.replace(" active", "");
}

function buildInfo(bird) {
    let info = document.createElement("div");
    info.className = "birdInfo";
    info.innerHTML = `<h1>${bird.band}</h1><p>Banded: ${bird.banded}</p><p>Sex: ${bird.sex}</p><p>Territory: ${bird.territory.text}</p><p>${bird.description}</p>`;
    return info
}


function buildSlider(bird) {
    let slider = document.createElement("div");
    slider.className = "slider";
    let slides = document.createElement("div");
    slides.className = "slides"
    bird.images.forEach((image, index) => {
        let slide = document.createElement("div");
        slide.id = `img-${bird.band}-${index}`;
        slide.innerHTML = `<img class="bgImg" src="https://res.cloudinary.com/dylnxsc8y/image/upload/v1678768678/toutouwai/${image[0]}"><img title="Photo credit ${image[1]}" src="https://res.cloudinary.com/dylnxsc8y/image/upload/v1678768678/toutouwai/${image[0]}">`;
        slides.appendChild(slide)
    })
    slider.appendChild(slides);
    return slider
}

function buildCards() {
    let container = document.getElementsByClassName("birdCards")[0]
    data.forEach(bird => {
        let div = buildCard(bird)
        container.appendChild(div)
    });
}

buildCards()