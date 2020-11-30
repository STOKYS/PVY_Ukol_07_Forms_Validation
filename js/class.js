$("input[name='obor']").on("input", function () {
    let suf = this.id.slice(-2)
    if (suf[0] == "-") {
        console.log("It's U")
        suf = "u"
    }
    classes(suf)
})

function classes(suf){
    for (i=1; i<5; i++){
        document.getElementById(`class${i}`).innerText = `${suf.toUpperCase()}${i}`
    }
}