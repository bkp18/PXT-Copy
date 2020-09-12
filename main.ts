basic.forever(function () {
    Firefly.setServo(Firefly.ServoPinValues.servo4, 102)
    basic.pause(1000)
    Firefly.setServo(Firefly.ServoPinValues.servo4, 21)
    basic.pause(1000)
})
