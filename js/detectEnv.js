
var className;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    className = "col-sm-4 portfolio-item";
}
else {
    className = "col-sm-4 portfolio-item-last";
}

// document.getElementById("env-1").className = className;
// document.getElementById("env-2").className = className;
// document.getElementById("env-9").className = className;
document.getElementById("env-10").className = className;
document.getElementById("env-11").className = className;
document.getElementById("env-12").className = className;
document.getElementById("env-13").className = className;