const name = document.getElementById('fullname');
const email = document.getElementById('email');
const message = document.getElementById('message')
const form = document.getElementById('form');
const btn = document.getElementById('btn');

btn.addEventListener('click', (e) => {
 e.preventDefault();
 email.value = "";
 name.value = "";
 message.value = "";
 alert("Successfully Submitted")
})