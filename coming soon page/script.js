function validate () {
    var email = document.getElementById("email").value
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var icon = document.getElementById("wrap")
    var form = document.getElementById("form")

    if (email.match(pattern)) {

    } else {
        icon.classList.add("error-icon-wrap2")
        form.classList.add("error-form")
        document.getElementById("alert").innerHTML = "Please provide a valid email"
    }
}