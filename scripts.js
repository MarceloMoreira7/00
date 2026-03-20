function mostrarOrcamento() {
  document.getElementById("home").style.display = "none";
  document.getElementById("orcamento").style.display = "flex";
  document.getElementById("sobre").style.display = "none";
}

function mostrarSobre() {
  document.getElementById("home").style.display = "none";
  document.getElementById("orcamento").style.display = "none";
  document.getElementById("sobre").style.display = "flex";
}

function voltar() {
  document.getElementById("home").style.display = "block";
  document.getElementById("orcamento").style.display = "none";
  document.getElementById("sobre").style.display = "none";
}