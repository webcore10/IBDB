/* Когда пользователь нажимает на кнопку,
переключение между скрытием и отображением раскрывающегося содержимого */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, p, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  p = div.getElementsByTagName("p");
  for (i = 0; i < p.length; i++) {
    txtValue = p[i].textContent || p[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      p[i].style.display = "";
    } else {
      p[i].style.display = "none";
    }
  }
}