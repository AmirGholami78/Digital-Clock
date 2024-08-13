
let hourDiv = document.querySelector("#hour")
let minDiv = document.querySelector("#minute")
let secDiv = document.querySelector("#seconds")

setInterval (
    function(){
        
        let newdate = new Date()
        let newhour = newdate.getHours()
        let newMin = newdate.getMinutes()
        let newSec = newdate.getSeconds()

        if (newhour < 10) {
            newhour = '0' + newhour
        }
        if (newMin < 10) {
            newMin = '0' + newMin
        }
        if (newSec < 10) {
            newSec = '0' + newSec
        }

        hourDiv.innerHTML = newhour
        minDiv.innerHTML = newMin
        secDiv.innerHTML = newSec
    }
, 1000)