function calculateTip() {

    var count = document.getElementById("count").value;
    var rating = document.getElementById("rating").value;
    var numbersofpeople = document.getElementById("numbersofpeople").value;


    if (count === "" || rating == 0) {
        alert("Įveskite duomenis");
        return;
    }
    if (numbersofpeople === "" || numbersofpeople <= 1) {
        numbersofpeople = 1;

        document.getElementById("each").style.display = "none";
    } else {

        document.getElementById("each").style.display = "block";
    }

    var total = (count * rating) / numbersofpeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;


}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("calculate").onclick = function () {
    calculateTip();
   
};











