var input = document.querySelectorAll("input");
var form = document.querySelector("form");
var err1 = document.querySelector(".err1");
var err2 = document.querySelector(".err2");
var err3 = document.querySelector(".err3");
var err4 = document.querySelector(".err4");
var small = document.querySelectorAll("small");


form.addEventListener("submit", function (event){
    event.preventDefault()

    if (input.length < 0) {

    } else {
        err1.innerHTML = "first name cannot be empty!";
        err2.innerHTML = "last name cannot be empty!";
        err3.innerHTML = "looks like this is not an email!";
        err4.innerHTML = "password can not be empty!";
        small[0].innerHTML = '<img src="./images/icon-error.svg"></img>';
        small[1].innerHTML = '<img src="./images/icon-error.svg"></img>';
        small[2].innerHTML = '<img src="./images/icon-error.svg"></img>';
        small[3].innerHTML = '<img src="./images/icon-error.svg"></img>';
        input[0].classList.add("field");
        input[1].classList.add("field");
        input[2].classList.add("field");
        input[3].classList.add("field");
    }
});