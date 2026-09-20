// ===== MENU MOBILE =====
// Seleciona o botão usado para abrir/fechar o menu
const menuButton = document.querySelector(".menu-toggle");
// Seleciona o menu de navegação
const nav = document.querySelector(".nav");

// Quando o botão é clicado, abre ou fecha o menu
menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen);
});

// Fecha o menu depois que um link é escolhido
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});
