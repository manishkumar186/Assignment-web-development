function myfun() {
    var x = document.getElementById("check1");
    var y = document.getElementById("check2");
    var z = document.getElementById("check3");

    if (x.checked == true && y.checked == true && z.checked == true) {
        return document.getElementById("check_value").value = "Java" + "," + "HTML" + "," + "CSS";
    }
    else if (x.checked == true && y.checked == true) {
        return document.getElementById("check_value").value = "Java" + "," + "HTML";
    }
    else if (x.checked == true && z.checked == true) {
        return document.getElementById("check_value").value = "Java" + "," + "CSS";
    }
    else if (y.checked == true && z.checked == true) {
        return document.getElementById("check_value").value = "HTML" + "," + "CSS";
    }
    else if (x.checked == true) {
        return document.getElementById("check_value").value = "Java";
    }
    else if (y.checked == true) {
        return document.getElementById("check_value").value = "HTML";
    }
    else if (z.checked == true) {
        return document.getElementById("check_value").value = "CSS";
    }
}

function reset() {
    document.getElementById("reset").reset()
}
