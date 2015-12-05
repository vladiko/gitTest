window.addEventListener('load', start);

function start() {
    document.getElementById('button').addEventListener('click', click);
    setTimeout(showPicture, 3000);
}

function showPicture() {
    var picDiv = document.getElementById('picture');
    picDiv.style.backgroundImage = "url('images/IMG_1168.JPG')";
    picDiv.style.width = '100%';
    picDiv.style.height = '500px';
    picDiv.style.backgroundSize = "contain";
    picDiv.style.backgroundRepeat = 'no-repeat';
    picDiv.style.backgroundPosition = 'center';


}

function click() {
    var picDiv = document.getElementById('picture');
    picDiv.style.height = (parseInt(picDiv.style.height) + 20) + 'px';
}