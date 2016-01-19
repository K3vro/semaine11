$proposition = document.getElementById("proposition");
$bouton = document.getElementById("bouton");
$resultat = document.getElementById("resultat");
reponse = Math.ceil(Math.random() * 100)

function verifier() {
    if ($proposition.value < reponse) {
        $resultat.innerHTML = "Nop +";
    }
    if ($proposition.value == reponse) {
        $resultat.innerHTML = "GG !";
    }
    if ($proposition.value > reponse) {
        $resultat.innerHTML = "Nop -";
    }
}

$bouton.onclick = verifier;