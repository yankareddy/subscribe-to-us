let subscribeFormEl = document.getElementById("subscribeForm");
let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let nameErrMsgEl = document.getElementById("nameErrMsg");
let emailErrMsgEl = document.getElementById("emailErrMsg");

nameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Requierd*"
    } else {
        nameErrMsgEl.textContent = ""
    }
});

emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Requierd*"
    } else {
        emailErrMsgEl.textContent = ""
    }
})

subscribeFormEl.addEventListener("submit", function(event) {
    event.preventDefault()
})