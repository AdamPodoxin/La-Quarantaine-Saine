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
}

function nextPage() {
    if (pageIndex < pageNames.length - 1) {
        pageIndex++;
        loadPage(pageIndex);
    }
}

function prevPage() {
    if (pageIndex > 0) {
        pageIndex--;
        loadPage(pageIndex);
    }
}

document.onLoad = onLoad();