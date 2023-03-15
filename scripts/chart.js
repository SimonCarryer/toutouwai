
const startDate = new Date(2023, 0, 1)

function toDate(dateString) {
    dateArray = dateString.split("-")
    return new Date(dateArray[2], dateArray[1]-1, dateArray[0])
}

function daysBetween(date1, date2) {
    const ONE_DAY = 1000 * 60 * 60 * 24;
    const differenceMs = Math.abs(date1 - date2);
    return Math.round(differenceMs / ONE_DAY);
}

function buildBars() {
    var chartBars = document.getElementById("chartBars");
    data.forEach(bird => {
        bar = buildBar(bird);
        chartBars.appendChild(bar);
    });
}

function preBarWidth(bird) {
    var width
    if (toDate(bird.banded) < startDate) {
        width = 0
    }
    else {
        width = (daysBetween(toDate(bird.banded), startDate) / 365) * 100
    }
    return width
}

function currentBarWidth(bird) {
    var width
    var endDate = new Date()
    if (bird.confirmed_missing != "") {
        endDate = toDate(bird.confirmed_missing)
    }
    if (toDate(bird.banded) < startDate) {
        width = (daysBetween(endDate, startDate) / 365) * 100
    }
    else {
        width = (daysBetween(endDate, toDate(bird.banded)) / 365) * 100
    }
    return width
}

function buildBar(bird) {
    var barContainer = document.createElement("div");
    barContainer.className = "barContainer";
    barContainer.onclick = function() {
        changeBird(bird.band);
    };
    var barPre = document.createElement("div");
    barPre.className = "bar pre";
    barPre.style = `width: ${preBarWidth(bird)}%;`;
    barContainer.appendChild(barPre);
    var barCurrent = document.createElement("div");
    barCurrent.className = "bar current";
    if (bird.confirmed_missing != "") {
        barCurrent.className += " missing"
    }
    barCurrent.style = `width: ${currentBarWidth(bird)}%;`;
    barCurrent.innerHTML = `${bird.band}`;
    barContainer.appendChild(barCurrent);
    return barContainer
}


   
buildBars()