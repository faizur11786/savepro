// ch_browser();
// ch_cook_enable();

window.onload = function ch_browser() {
    if (navigator.userAgent.indexOf("MSIE") = !-1) {
        var page = document.querySelector(".main__page");
        page.style.display = "none";
        alert("Please Open in Chrome");
    }
}


window.onload =function ch_cook_enable() {
    if (navigator.cookieEnabled == false) {
        // var page = document.querySelector(".main__page");
        // page.style.display = "none";
        alert("Please Enable Cookie");
    }
}

