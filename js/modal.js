var modal = document.getElementById("myModal");

var orderForm = document.getElementById("orderForm");

var span = document.getElementsByClassName("close")[0];

var modalBtns = document.querySelectorAll('.modal-btn');

var defaultOptionSelect = document.getElementById("defaultOptionSelect");

modalBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    modal.style.display = "block";
    var defaultValue = btn.getAttribute('data-default-value');
    defaultOptionSelect.value = defaultValue;

    selectGroup.style.display = "block";
    textareaGroup.style.display = "none";

    selectButton.classList.add("active");
    ownProgramButton.classList.remove("active");
  });
});

function clearForm() {
    orderForm.reset();
}

document.getElementById("orderForm").addEventListener("submit", function(event) {
  event.preventDefault();
  clearForm();
});

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var selectButton = document.getElementById("modal-program");
var ownProgramButton = document.getElementById("modal-own-program");
var selectGroup = document.getElementById("select-group");
var textareaGroup = document.getElementById("textarea-group");

selectButton.addEventListener("click", function() {
    selectGroup.style.display = "block";
    textareaGroup.style.display = "none";

    selectButton.classList.add("active");
    ownProgramButton.classList.remove("active");
});

ownProgramButton.addEventListener("click", function() {
    selectGroup.style.display = "none";
    textareaGroup.style.display = "block";

    ownProgramButton.classList.add("active");
    selectButton.classList.remove("active");
});

var modalSuccess = document.getElementById("myModalSuccess");

orderForm.addEventListener("submit", function(event) {
    event.preventDefault();
    modalSuccess.style.display = "block";
});

var closeSuccessBtn = document.getElementsByClassName("close-success")[0];

closeSuccessBtn.addEventListener("click", function() {
  modalSuccess.style.display = "none";
  modal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == modalSuccess) {
    modalSuccess.style.display = "none";
    modal.style.display = "none";
  }
});