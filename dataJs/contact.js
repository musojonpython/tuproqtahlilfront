import { baseUrl } from "./baseUrl.js";
const form = document.getElementById("registerForm");
form.addEventListener("submit", Application);

function Application(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const text = document.getElementById("text").value;
  axios
    .post(`${baseUrl}/api/v1/main/contact/`, {
      full_name: name,
      email: email,
      text: text,
      phone_number: phone,
    })
    .then(() => {
      form.reset();
    })
    .catch((err) => {
      console.log(err.response);
    });
}
