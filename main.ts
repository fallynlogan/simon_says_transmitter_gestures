/**
 * THIS CODE IS FOR SIMON
 */
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(7)
    basic.showString("A")
    basic.pause(500)
    basic.clearScreen()
})
input.onGesture(Gesture.FreeFall, function () {
    radio.setGroup(6)
    basic.showString("F")
    basic.pause(500)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(3)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    basic.pause(500)
    basic.clearScreen()
})
input.onGesture(Gesture.ScreenDown, function () {
    radio.sendNumber(5)
    basic.showString("D")
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(9)
    basic.showString("A+B")
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(8)
    basic.showString("B")
    basic.pause(500)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(1)
    basic.showIcon(IconNames.Chessboard)
    basic.pause(500)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(4)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    basic.pause(500)
    basic.clearScreen()
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendNumber(2)
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    basic.pause(500)
    basic.clearScreen()
})
basic.showString("SIMON SAYS")
radio.setGroup(1)
