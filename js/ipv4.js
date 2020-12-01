$("#ip").on("input", function () {
    let orig = document.getElementById("ip").value
    let last = orig.split(".")
    let selected = last[last.length - 1]
    is_ip_valid(orig, selected)
})

// Pokud je poslední číslo větší než 255 smaže se
function is_ip_valid(orig, selected) {
    if (Number(selected) > 255) {
        document.getElementById("ip").value = orig.slice(0, -1)
    }
}