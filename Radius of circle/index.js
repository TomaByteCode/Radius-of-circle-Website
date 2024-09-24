const PI = 3.14159
let radius
let circumference

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value
    radius = Number(radius)
    circumference = 2 * PI * radius
    document.getElementById("myH3").textContent = circumference + "cm"
}

let a
let circumference_square

document.getElementById("mySubmit2").onclick = function(){
    a = document.getElementById("myText2").value
    a = Number(a)
    circumference_square = a * 4 
    document.getElementById("myH32").textContent = circumference_square + "cm"}

document.getElementById("mySubmit3").onclick = function(){
    a = document.getElementById("myText3").value
    a = Number(a)
    content = a * a 
    document.getElementById("myH33").textContent = content + "cm2"
}

