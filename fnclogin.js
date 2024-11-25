const formOpenBtn = document.querySelector("#form-open");
home = document.querySelector(".home");
formContainer = document.querySelector(".form_container");
formClose = document.querySelector(".form_close");
singupBtn = document.querySelector("#signup");
loginBtn = document.querySelector("#login")

formOpenBtn.addEventListener("click", () => home.classList.add("show"))
formClose.addEventListener("click", () => home.classList.remove("show"))

singupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
});

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
});