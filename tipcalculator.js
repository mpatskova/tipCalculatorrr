let calculate = document.getElementById("calculate");
let eachPerson = document.getElementById("each");
let totalTip = document.getElementById("totalTip");
let tip = document.getElementById("tip");

const calculateTip = () => {
    let billAmt = document.getElementById("billAmount").value;
    let serviceQual = document.getElementById("qualityOfService").value;
    let numOfPeople = document.getElementById("amountOfPeople").value;

    if (billAmt === "" || serviceQual === 0) {
        alert("Proszę wpisac kwotę");
        return;
    }

    if (numOfPeople === "" || numOfPeople <= 1) {
        numOfPeople = 1;
        eachPerson.style.display = "none";
    } else {
        eachPerson.style.display = "block";
    }

    let total = (billAmt * serviceQual) / numOfPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    totalTip.style.display = "block";
    tip.innerHTML = total;

};

    totalTip.style.display = "none";
    eachPerson.style.display = "none";

    calculate.onclick = () => {
    calculateTip();
};
