const btn = document.getElementById("dark-toggle");

if (localStorage.getItem("dark") === "1") {
  document.body.classList.add("dark");
  btn.textContent = "Modo claro";
} else {
  btn.textContent = "Modo oscuro";
}

// click
btn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark", "1");
    btn.textContent = "Modo claro";
  } else {
    localStorage.setItem("dark", "0");
    btn.textContent = "Modo oscuro";
  }
});