function afficherMessage() {
  let texte = document.getElementById("champTexte").value;
  if (texte === "") {
    document.getElementById("resultat").innerHTML = "⚠️ Écris quelque chose d'abord !";
  } else {
    document.getElementById("resultat").innerHTML = "✅ Tu as écrit : <strong>" + texte + "</strong>";
  }
}