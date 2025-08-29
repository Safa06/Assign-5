// white heart clicked, then red heart number will be increased

let whiteHearts = document.getElementsByClassName('white-heart-number');
for (let whiteHeart of whiteHearts) {
    whiteHeart.addEventListener('click', function () {
        const redHeartNum = Number(document.getElementById('red-heart-number').innerText);

        const newRedHeartCount = redHeartNum + 1;
        document.getElementById('red-heart-number').innerText = newRedHeartCount;
    })
}


// 1. take all call buttons, when it is clicked, service name and number will be alerted
// 2. Along with the coins number will be decreased and show alert when it is 0 zero for calling

let copyBtns = document.getElementsByClassName('copy-btn');
let serviceNames = document.getElementsByClassName('service-name');
let serviceNumbers = document.getElementsByClassName('service-num');

for (let i = 0; i < copyBtns.length; i++) {
    copyBtns[i].addEventListener('click', function () {
        //console.log(copyBtns[i]);
        // let serviceName = serviceNames[i].innerText;
        // let serviceNum = serviceNumbers[i].innerText;
        // alert('📞 Calling' + ' ' + serviceName + ' ' + serviceNum + '...');
        //console.log(serviceName, serviceNum);

        const coinNumber = Number(document.getElementById('coin-number').innerText);

        if (coinNumber > 0) {
            const newCoinNumber = coinNumber - 20;
            document.getElementById('coin-number').innerText = newCoinNumber;
            let serviceName = serviceNames[i].innerText;
            let serviceNum = serviceNumbers[i].innerText;
            alert('📞 Calling' + ' ' + serviceName + ' ' + serviceNum + '...');
        }


        if (coinNumber === 0) {
            alert('❌ You have insufficient coin for calling !!' + ' ' + 'You need to have atleast 20 coins for calling');
        }

    })

}