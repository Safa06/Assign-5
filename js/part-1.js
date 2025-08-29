// white heart clicked, then red heart number will be increased

let whiteHearts = document.getElementsByClassName('white-heart-number');
for (let whiteHeart of whiteHearts) {
    whiteHeart.addEventListener('click', function () {
        const redHeartNum = Number(document.getElementById('red-heart-number').innerText);

        const newRedHeartCount = redHeartNum + 1;
        document.getElementById('red-heart-number').innerText = newRedHeartCount;
    })
}


//take all call buttons, when it is clicked, service name and number will be alerted

let copyBtns = document.getElementsByClassName('copy-btn');
let serviceNames = document.getElementsByClassName('service-name');
let serviceNumbers = document.getElementsByClassName('service-num');
//console.log(serviceNames);
//console.log(copyBtns.length)
for (let i = 0; i < copyBtns.length; i++) {
    copyBtns[i].addEventListener('click', function () {
        //console.log(copyBtns[i]);
        let serviceName = serviceNames[i].innerText;
        let serviceNum = serviceNumbers[i].innerText;
        alert('📞 Calling' + ' ' + serviceName + ' ' + serviceNum + '...');
        console.log(serviceName, serviceNum);
    })

}