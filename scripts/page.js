function switchPage(activePage) {
    var pages = document.getElementsByClassName("page");
    for (let page of pages) {
        page.classList.add("offscreen");
    }
    var active = document.getElementById(activePage);
    active.classList.remove("offscreen")
}