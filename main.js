
// Dark Mode
let butt = document.getElementById("Butt")

butt.onclick = function () {
    document.body.classList.toggle("dark-mode")
}

// Nav Active

let Lis = document.querySelectorAll(".nav-ul li")
let Liscolor = document.querySelectorAll(".colors li")
Lis.forEach((li) => {
    li.addEventListener("click", (e) => {
        Lis.forEach((li) => {
            li.classList.remove("active")
        });
        e.currentTarget.classList.add("active")
    });
});

Liscolor.forEach((li) => {
    li.addEventListener("click", (e) => {
        Liscolor.forEach((li) => {
            li.classList.remove("activet")
        });
        e.currentTarget.classList.add("activet")
    })
})

// Nav aside Color

let pop = document.getElementById("PopBut");

function openpoppen() {
    pop.style.display = "flex"
    pop.style.opacity="1"
    // document.body.style.opacity = "0.1"
}


function ClosePop() {
    pop.style.display="none"
}


// Display colors

let color = document.getElementById("color")

function openColors() {
    color.style.display = "flex"
}

function Close() {
    color.style.display = "none"
}

let red = document.getElementById("red")
red.onclick = function () {
    document.body.style.backgroundColor="red"
}

// Form Validation

let Form = document.getElementById("FormV")

Form.onsubmit = function () {
    let Email = document.getElementById("EmailVal").value;
    let EmailValidation = /\w+@gmail.(com | net)/
    let ValidationResult = EmailValidation.test(Email);

    if (ValidationResult === false) {
        return false;
    }
}