basic.forever(function () {
    for (let טור = 0; טור <= 4; טור++) {
        for (let שורה = 0; שורה <= 4; שורה++) {
            led.toggle(שורה, טור)
            basic.pause(200)
        }
    }
})
