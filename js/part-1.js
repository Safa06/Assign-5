// white heart clicked, then red heart number will be increased

let whiteHearts = document.getElementsByClassName('white-heart-number');
for (let whiteHeart of whiteHearts) {
    whiteHeart.addEventListener('click', function () {
        const redHeartNum = Number(document.getElementById('red-heart-number').innerText);

        const newRedHeartCount = redHeartNum + 1;
        document.getElementById('red-heart-number').innerText = newRedHeartCount;
    })
}


