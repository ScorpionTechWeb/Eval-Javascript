// JS pour la somme
// - Contexte : Vous devrez afficher le résultat de la somme de plusieurs nombres.
// - Comportement : Un champ de type number est à disposition de l'utilisateur. 
// Une fois qu'il a rentré un nombre, il clique sur le bouton "Ajouter" pour le sauvegarder. 
// Il peut ajouter autant de nombre qu'il le souhaite. 
// Au fur et à mesure que l'utilisateur entre des nombres, 
// vous devrez afficher l'addition ainsi que le résultat de la somme 
// (par exemple : 2 + 24 + 36 = 62) dans le paragraphe qui a pour identifiant "result". 
// Attention, vous ne pouvez afficher le résultat de la somme que si l'utilisateur a entré au moins 2 nombres.
//- Bonus : si vous avez du temps, vous pouvez mettre en place les boutons :
//	- Supprimer le dernier : qui supprime le dernier nombre entré par l'utilisateur.
//	- Supprimer le premier : qui supprime le premier nombre entré par l'utilisateur.
//	- Reset : qui supprime tous les nombres entré par l'utilisateur.
// Attention de bien remettre à jour l'affichage de l'addition et le résultat de la somme.
let tab = [];
let add = document.getElementById("add");
let removeLast = document.getElementById("removeLast");
let removeFirst = document.getElementById("removeFirst");
let reset = document.getElementById("reset");
let input = document.querySelector("input");
let sum = 0;

// Mise en place des disabled dans les boutons
add.disabled = true;
removeLast.disabled = true;
removeFirst.disabled = true;
reset.disabled = true;

// Taper entrée pour stockage
input.addEventListener("keyup", e => {
    if (e.key === "Enter") {
        add.click();
    }
});

// focus par defaut
input.focus();

// On enleve le disabled des bouttons
input.addEventListener("input", function() {
    if (tab < 2) {
        add.disabled = (this.value === '');
        reset.disabled = (this.value === '');
        removeLast.disabled = (this.value === '');
        removeFirst.disabled = (this.value === '');
    }
});

// addEventListener d'ajouter un nombre au tableau calcul
add.addEventListener("click", () => {
    document.getElementById("result").hidden = false;
    let val = document.querySelector("input").value;
    tab.push(val);
    sum = 0;
    if (tab.length > 1) {
        for (i = 0; i < tab.length; i++) {
            sum += Number.parseInt(tab[i]);
        }
        console.log(sum);
        document.getElementById("result").innerHTML = "Bravo, le résultat de " + tab.join(" + ") + " = " + sum;
    } else {
        document.getElementById("result").innerHTML = "Vous avez ajouté : " + tab.join() + "<br>Veuillez ajouter un autre numéro afin d'effectuer leur addition.";
    }
    document.querySelector('input').value = '';
    input.focus();
});


// BONUS
// addEventListener supprimer dernier nombre tableau calcul
removeLast.addEventListener("click", () => {
    if (tab.length >= 2) {
        document.getElementById("result").innerHTML = "";
        let lastnumer = tab.pop();
        sum = sum - lastnumer;
        document.getElementById("result").innerHTML = "Vous avez supprimé " + lastnumer + " ! " + "<br>Le calcul à était mis à jour : " + tab.join(" + ") + " = " + sum;
    }
});

// addEventListener supprimer premier nombre tableau calcul
removeFirst.addEventListener("click", () => {
    if (tab.length >= 2) {
        document.getElementById("result").innerHTML = "";
        let Firstnumer = tab.shift();
        sum = sum - Firstnumer;
        document.getElementById("result").innerHTML = "Vous avez supprimé " + Firstnumer + " ! " + "<br>Le calcul à était mis à jour : " + tab.join(" + ") + " = " + sum;
    }
});

// addEventListener supprimer premier nombre tableau calcul
reset.addEventListener("click", () => {
    document.getElementById("result").innerHTML = "";
    tab = [];
    add.disabled = true;
    removeLast.disabled = true;
    removeFirst.disabled = true;
    reset.disabled = true;
    document.querySelector('input').value = '';
    input.focus();
    document.getElementById("result").innerHTML = "Le calcul à était réinitialiser avec succès";
    setTimeout(function () {
        document.getElementById("result").hidden = true;
    }, 2000);
});
