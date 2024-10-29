const form = document.getElementById("formulaire-mail");
const sendSucess = document.getElementsByClassName("send-sucess")[0];

sendSucess.querySelector("button").addEventListener("click", () => {
    sendSucess.classList.add("hidden");
    form.classList.remove("hidden");
});

const mailNotValid = () => {
    form.querySelector(".error").classList.remove("hidden");
    form.querySelector("#mail").classList.remove("border-opacity-50");
    form.querySelector("#mail").classList.add("border-rouge", "bg-rouge/20", "text-rouge");

}
const mailIsValid = () => {
    sendSucess.classList.remove("hidden");
    form.classList.add("hidden");
    form.querySelector(".error").classList.add("hidden");
    form.querySelector("#mail").classList.add("border-opacity-50");
    form.querySelector("#mail").classList.remove("border-rouge", "bg-rouge/20", "text-rouge");
    form.querySelector("#mail").value = ''
}

form.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault();
    const email = form.querySelector("#mail").value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
        mailNotValid()
        return;
    }

    mailIsValid()
});

