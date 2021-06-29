const showPassword = () => {
  const checkbox = document.querySelector(".checkbox");
  const pwd = document.querySelector("#new_password");
  checkbox.addEventListener("click", () => {
    if (pwd.type === "password") {
      pwd.type = "text";
    } else {
      pwd.type = "password";
    }
  });
};
showPassword();


function checkmail() {
    alert("Kindly Check your mail, We have sent a recover password link to your mail. Please follow the instructions on how to reset your password");
} ;