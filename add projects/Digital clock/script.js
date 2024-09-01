setInterval(() => {
    var currentTime = new Date();
    hrs.innerText = currentTime.getHours();
    min.innerText = currentTime.getMinutes();
    sec.innerText = currentTime.getSeconds();
},1000)