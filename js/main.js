function appear() {
    var window = document.getElementById("window");
    window.style.opacity = "1";
    window.style.pointerEvents="all";
}
function disappear() {
    var diswindow = document.getElementById("window");
    diswindow.style.opacity = "0";
    diswindow.style.pointerEvents = "none";
}