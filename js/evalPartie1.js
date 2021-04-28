// JS pour le fomulaire de changement de mot de passe
// Comportement : Au clic sur le bouton "Valider", vous devrez vérifier dans cet ordre :
// - Si le premier champ est vide, le message d'erreur sera "Vous devez renseigner un mot de passe".
// - Si le premier champ contient moins de 6 caractères, le message d'erreur sera "Votre mot de passe doit contenir au minimum 6 caractères".
// - Si les 2 champs ne contiennent pas le même mot de passe, le message d'erreur sera "Votre mot de passe et sa confirmation doivent être identiques".
// Ce message d'erreur s'affiche dans un élément p que vous devez créer et ajouter en dernier élément de l'élément form lorsque l'utilisateur clique sur le bouton "Valider". 
// Attention, il ne peut y avoir qu'un seul message d'erreur d'affiché !

// Recuperer les variables nécessaires au bon fonctionnement
let newPassword = document.getElementById("newPassword");
let confirmPassword = document.getElementById("confirmPassword");
let p = document.createElement("p");
let form = document.querySelector("form");


// On crée un addEventListener sur le form
form.addEventListener('submit', function(evt){
    // On test si le premier champ est vide, on affiche un alert
    if (newPassword.value === '') {
        p.textContent = "Vous devez renseigner un mot de passe";
        evt.preventDefault(); // Erreur, on stoppe l'envoi du formulaire
    }
    // On test si le premier champ est supérieur à 6 caractères, on affiche un alert
    else if (newPassword.value.length < 6) {
        p.textContent = "Votre mot de passe doit contenir au minimum 6 caractères.";
        evt.preventDefault(); // Erreur, on stoppe l'envoi du formulaire
    }
    // On test si les deux champs sont identiques ou pas, sinon on affiche un alert
    else if (newPassword.value != confirmPassword.value) {
        p.textContent = "Votre mot de passe et sa confirmation doivent être identiques.";
        evt.preventDefault(); // Erreur, on stoppe l'envoi du formulaire
    }
    // On affiche l'erreur
    form.append(p);
});