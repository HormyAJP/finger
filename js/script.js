function log(text) {
    document.getElementById("log").innerHTML += text + "<br>"
}

sum = Math.acos(0.5) +
    Math.acosh(1) +
    Math.asin(0.5) +
    Math.asinh(1) +
    Math.atan(1) +
    Math.atanh(0.5) +
    Math.cbrt(2) +
    Math.cos(1) +
    Math.cosh(1) +
    Math.exp(1.5) +
    Math.log(10) +
    Math.log10(Math.E) +
    Math.pow(Math.E, Math.PI) +
    Math.sin(1) +
    Math.sinh(1) +
    Math.tan(1) +
    Math.tanh(1);

log(sum)
