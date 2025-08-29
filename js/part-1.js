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

let callBtns = document.getElementsByClassName('call-btn');
let serviceNames = document.getElementsByClassName('service-name');
let serviceNumbers = document.getElementsByClassName('service-num');

for (let i = 0; i < callBtns.length; i++) {
    callBtns[i].addEventListener('click', function () {
        const coinNumber = Number(document.getElementById('coin-number').innerText);

        if (coinNumber > 0) {

            let serviceName = serviceNames[i].innerText;
            let serviceNum = serviceNumbers[i].innerText;
            alert('📞 Calling' + ' ' + serviceName + ' ' + serviceNum + '...');

            const newCoinNumber = coinNumber - 20;
            document.getElementById('coin-number').innerText = newCoinNumber;

            //take title and number for call history
            const title = callBtns[i].parentNode.parentElement.parentElement.children[0].innerText;
            const number = callBtns[i].parentNode.parentElement.parentElement.children[2].innerText;

            // console.log(title);
            // console.log(number);

            let time = new Date();
            let currentTime = time.toLocaleTimeString();
            console.log(currentTime);

            // add topics to call history
            const asideContainer = document.getElementById('aside-container');
            const newDiv = document.createElement('div');
            newDiv.innerHTML = `
            <div class="flex justify-between items-center gap-4 mt-8">
                    <div class="">
                        <p class="font-bold text-lg">${title}</p>
                        <p class="text-gray-500 text-md">${number}</p>
                    </div>
                    <div>
                        <p>${currentTime}</p>
                    </div>

                </div>
                `;
            asideContainer.appendChild(newDiv);

            const clearBtn = document.getElementById('clear-btn');
            clearBtn.addEventListener('click', function () {
                newDiv.innerHTML = '';
            })

        }


        if (coinNumber === 0) {
            alert('❌ You have insufficient coin for calling !!' + ' ' + 'You need to have atleast 20 coins for calling');
        }

    })

}


// while click on the copy btns , main copy button innerText will be increased and innerText will be copied to the clipboard

let copyBtns = document.getElementsByClassName('copy-btn');
for (let j = 0; j < copyBtns.length; j++) {
    copyBtns[j].addEventListener('click', function () {
        //console.log(serviceNumbers[j]);
        let serviceNum = serviceNumbers[j].innerText;
        alert('Copying the card!' + ' ' + serviceNum);

        const mainCopyNumber = Number(document.getElementById('main-copy-number').innerText);

        //copy to the clipboard
        navigator.clipboard.writeText(serviceNum).then(() => {
            
        })
        const newCopyNumber = mainCopyNumber + 1;
        document.getElementById('main-copy-number').innerText = newCopyNumber;
    })

}


