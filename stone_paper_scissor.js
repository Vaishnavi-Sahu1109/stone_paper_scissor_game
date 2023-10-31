let random = Math.ceil(Math.random() * 3);
let stone = 1
let paper = 2
let scissor = 3

let useroutput = ""

let userinput = 2

if (userinput == 1) {

    if (random == 1) {
        useroutput = "DRAW"
    }

    else if (random == 2) {
        useroutput = "LOSE"


    }
    else {
        useroutput = "WON"

    }


}

else if (userinput == 2) {
    if (random == 1) {
        useroutput = "WON"
    }

    else if (random == 2) {
        useroutput = "DRAW"


    }
    else {
        useroutput = "LOSE"

    }

}

else {
    if (random == 1) {
        useroutput = "WON"
    }

    else if (random == 2) {
        useroutput = "LOSE"


    }
    else {
        useroutput = "DRAW"

    }

}

console.log(useroutput)

