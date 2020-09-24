let celcius = 0
basic.forever(function () {
    celcius = input.temperature()
    if (celcius == 10) {
        basic.showNumber(celcius)
        basic.showString("Ski time!")
    } else if (celcius == 20) {
        basic.showNumber(celcius)
        basic.showString("Picnic time!")
    } else if (celcius == 30) {
        basic.showNumber(celcius)
        basic.showString("Beach time!")
    } else if (celcius == 40) {
        basic.showNumber(celcius)
        basic.showString("It is better to stay at home")
    } else {
        basic.showNumber(celcius)
    }
})
