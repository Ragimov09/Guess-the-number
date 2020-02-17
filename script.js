
let randomOne = Math.floor(Math.random() * 20) + 1;
let randomTwo = Math.floor(Math.random() * 10) + 1;
let inputNumber = document.getElementById("inputNumber");
let data = "";

document.getElementById("inputNumber").style.display = "none";

function play() {
    if (document.getElementById("easy").checked == true) {
        document.getElementById("inputNumber").style.display = "";
        document.getElementById("numbers").innerHTML = "Write a number from 1 to 10";
        console.log(randomTwo);
        data = 3;
    }
    else if (document.getElementById("hard").checked == true) {
        document.getElementById("inputNumber").style.display = "";
        document.getElementById("numbers").innerHTML = "Write a number from 1 to 25";
        console.log(randomOne);
        data = 5;
    }
    else {
        alert("ERROR");
    }
}

function check() {
    let x = inputNumber.value;
    let answer = "";

    if (x == randomOne || x == randomTwo) {
        alert("You are win");
        document.getElementById("gaming").style.display = "none";

    }
    else if (data == 0) {
        alert("lose");
        document.getElementById("gaming").style.display = "none";
    }
    else if (x > randomOne || x > randomTwo) {
        document.getElementById("live").innerHTML = "attempts left:" + (data - 1);
        data--;
    }
    else if (x < randomOne || x < randomTwo) {
        document.getElementById("live").innerHTML = "attempts left:" + (data - 1);
        data--;
    }
    else {
        document.getElementById("live").innerHTML = "attempts left:" + (data - 1);
        data--;
    }
}

function refresh() {
    window.location.reload();
}

