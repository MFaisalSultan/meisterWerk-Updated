document.addEventListener("DOMContentLoaded", function () {
  var customSelects = document.querySelectorAll(".custom-select");

  customSelects.forEach(function (select) {
    var selected = select.querySelector(".select-selected");
    var items = select.querySelector(".select-items");

    selected.addEventListener("click", function () {
      closeAllSelects();
      items.classList.toggle("select-hide");
      selected.classList.toggle("select-arrow-active");
    });

    items.querySelectorAll("a").forEach(function (item) {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        selected.innerHTML = this.innerHTML;
        selected.dataset.value = this.dataset.value;
        items.classList.add("select-hide");
        selected.classList.remove("select-arrow-active");
      });
    });
  });

  document.addEventListener("click", function (e) {
    customSelects.forEach(function (select) {
      var selected = select.querySelector(".select-selected");
      var items = select.querySelector(".select-items");

      if (!select.contains(e.target)) {
        items.classList.add("select-hide");
        selected.classList.remove("select-arrow-active");
      }
    });
  });

  function closeAllSelects() {
    customSelects.forEach(function (select) {
      var selected = select.querySelector(".select-selected");
      var items = select.querySelector(".select-items");

      items.classList.add("select-hide");
      selected.classList.remove("select-arrow-active");
    });
  }
});
