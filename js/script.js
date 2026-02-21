
function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}

/* Auto close when clicking link (optional but recommended) */
document.querySelectorAll("#nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav-links").classList.remove("show");
  });
});