function setRandomBgColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let random_color = 'rgb(' + r + ',' + b + ',' + g + ')';
    document.getElementById('color-box').style.backgroundColor = random_color;
}