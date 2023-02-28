const submit = document.getElementById("submit-box");
submit.addEventListener("click", submitClick, false);

function submitClick(event) {
  document.getElementById("tasks").innerHTML += "<li>" +  document.querySelector('input').value + "</li>";
  event.preventDefault()
}