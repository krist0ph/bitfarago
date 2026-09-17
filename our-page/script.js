clock = document.getElementById('clockId')

function time() {
    const today = new Date()
    let hour = today.getHours()
    let minute = today.getMinutes()
    minute = checkTime(minute)
    clock.innerHTML = hour + ":" + minute
    setTimeout(time, 1000)
}

function checkTime(x) {
    if (x < 10) {x = "0" + x}
    return x
}

time()

// What ya loookin at over here?