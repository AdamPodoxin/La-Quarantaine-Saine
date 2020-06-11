const pageNames = [
    "Introduction",
    "Occupez-vous",
    "Faire un horaire",
    "Couchez-vous au même temps chaque jour",
    "Mangez les alimentations différents et saines",
    "Allez au dehors et faire de l’exercice"
];

let pageIndex = 0;

const headerText = document.getElementById("header-text");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

function onLoad() {
    loadPage(pageIndex);
}

function loadPage(index) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `pages/${index}.html`, true);
    xhr.onreadystatechange = function () {
        if (this.readyState !== 4)
            return;

        document.getElementById('content').innerHTML = this.responseText;
    };

    xhr.send();

    headerText.innerHTML = `${index} - ${pageNames[index]}`;

    if (isPrevAvaliable()) {
        prevButton.style.color = "var(--footer-button-on)";
    } else {
        prevButton.style.color = "var(--footer-button-off)";
    }

    if (isNextAvaliable()) {
        nextButton.style.color = "var(--footer-button-on)";
    } else {
        nextButton.style.color = "var(--footer-button-off)";
    }
}

function nextPage() {
    if (isNextAvaliable()) {
        pageIndex++;
        loadPage(pageIndex);
    }
}

function prevPage() {
    if (isPrevAvaliable()) {
        pageIndex--;
        loadPage(pageIndex);
    }
}

function isPrevAvaliable() {
    return pageIndex > 0;
}

function isNextAvaliable() {
    return pageIndex < pageNames.length - 1;
}

document.onLoad = onLoad();