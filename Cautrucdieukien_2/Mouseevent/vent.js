let plane = null;
plane = document.getElementById('myimage');
function init() {
    plane = document.getElementById('myimage');
    plane.style.position = 'relative';
    plane.style.left = "0px";
}
function moveRight() {
    plane.style.left =parseInt( plane.style.left) + 10 + "px";

}
window.onload = init;