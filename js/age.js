$("#narozeni").on("input", function(){
    let val = this.value.split("-")
    console.log(val)
    if (val.length == 3){
        is_date_valid(val[0])
    }
})

function is_date_valid(val){
    date = new Date().getFullYear()
    if(val > date || val < (date - 120)){
        console.log("Date is invalid")
    }
}