function diceRoll1(){
    let max = document.getElementById("dieFaces").value
    const min = 1 

    if (max === " " || max === "undefined"){
        document.getElementById("finalResult").innerHTML = "Please enter a number greater than 1"
    } else {
        let rollResult = Math.floor(Math.random() * (max-min + 1) + min);
        document.getElementById("finalResult").innerHTML = rollResult
    }
}
