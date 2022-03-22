var btn = document.getElementById("submit")
var jatek = false
var jatekAllapottok = []
var jatekallapot = document.getElementById("jatekAllapot")

btn.addEventListener('click', function() {
    var player1 = document.getElementById("player1").value
    var player2 = document.getElementById("player2").value
    console.log(player1)
    if (player1 != "" && player2 != "") {
        jatek = true
        jatekAllapot.innerHTML = "Játék kezdése! <br>"
    }
})


currPlayer = player1
var box = document.getElementsByClassName("box")
var lepes = 1
var jatekBox = ["-", "-", "-", "-", "-", "-", "-", "-", "-"]
for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('click', function() {
        var jatekos = currPlayer.value
        if(currPlayer == player1 && jatek && box[i].getAttribute("play") == "") {
            box[i].innerText = "X"
            currPlayer = player2
            box[i].setAttribute('play', 'X')
            jatekBox[i] = "X"
            // jatekAllapotok.push(lepes+". lépés: "+jatekos+"<br>")
            // jatekAllapot.innerHTML = jatekAllapotok
            // lepes++
            jatekAllapot.innerHTML = ellenorzes()
        } else if (currPlayer == player2 && jatek && box[i].getAttribute("play") == "") {
            box[i].innerText = "O"
            currPlayer = player1
            box[i].setAttribute('play', 'O')
            jatekBox[i] = "O"
            // jatekAllapotok.push(lepes+". lépés: "+jatekos+"<br>")
            // if(ellenorzes() == "O")
            //     jatekAllapotok.push("O nyert!")
            // jatekAllapot.innerHTML = jatekAllapotok
            // lepes++
            jatekAllapot.innerHTML = ellenorzes()
        }
    })
}
var jatekViz = ""
var jatekFug = ""
var jatekAtl = ""
function ellenorzes() {
    jatekAtl = jatekBox[0]+""+jatekBox[4]+""+jatekBox[8]+"#"+jatekBox[2]+""+jatekBox[4]+""+jatekBox[6]
    var jatek = vizEllenorzes() + fugEllenorzes() + jatekAtl
    var winner = ""
    if (jatek.indexOf("XXX") >= 0)
        winner = "X"
    if (jatek.indexOf("OOO") >= 0)
        winner = "O"

    return winner
}

function vizEllenorzes() {
    var txt = ""
    for (let i = 0; i < jatekBox.length; i++) {
        if (i % 3 == 0)
            txt += "#"
        txt += jatekBox[i]
    }
    return txt
}

function fugEllenorzes() {
    var txt = ""
    for (let index = 0; index < 3; index++) {
        for (let i = index; i < jatekBox.length; i = i+3) {
            txt += jatekBox[i]
        }
        txt += "#"
    }
    return txt
}