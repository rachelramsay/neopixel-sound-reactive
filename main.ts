let Sound = 0
let strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
strip.clear()
strip.show()
basic.forever(function () {
    Sound = pins.map(
    input.soundLevel(),
    0,
    100,
    0,
    12
    )
    Sound = Math.round(Sound)
    if (Sound > 0) {
        for (let index = 0; index <= Sound; index++) {
            strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Blue))
            strip.show()
            basic.pause(30)
        }
        strip.clear()
        strip.show()
    }
})
