const val1 = document.getElementById('valeur1');
const val2 = document.getElementById('valeur2');
const val3 = document.getElementById('valeur3');
const val4 = document.getElementById('valeur4');
const val5 = document.getElementById('valeur5');
const val6 = document.getElementById('valeur6');
const val7 = document.getElementById('valeur7');
const val8 = document.getElementById('valeur8');
const val9 = document.getElementById('valeur9');
//Selection de tout les input du carré
const form = document.getElementById('carreM');
//Séléction du formulaire du carré
const reponse = document.querySelector('.reponse');
const reset = document.querySelector('.reset');
//Sélection du bouton reset
const pTemp = document.getElementById('pTemp');
//Sélécion du p où sera afficher le compteur de temps

let tab = new Array(3);
let nbErreur = 0;
let  seconde = 0;
let minute = 0;

/*Evenement du bouton submit qui permet de mettre les valeurs
de chaque input dans un tableau.
Ensuite appel les variables de vérifications
Et enfin affiche le résultat
*/
form.addEventListener('submit', function(event) {
    event.preventDefault();
    event.stopPropagation();

    tab = [[val1.value,val2.value,val3.value],
        [val4.value,val5.value,val6.value],
        [val7.value,val8.value,val9.value]];
    if (verifLigneColonne() && verifChiffres()) {
        affichageRes(true);
    } else {
        affichageRes(false);
    }

});
//Evenement lort du clic sur le bouton reset
//Qui permet de vider chaque case du carré

reset.addEventListener('click', function() {
    reponse.innerHTML = "";
    val1.value ="";
    val2.value ="";
    val3.value ="";
    val4.value ="";
    val5.value ="";
    val6.value ="";
    val7.value ="";
    val8.value ="";
    val9.value ="";

});

setInterval(function() {
    afficheTmp(seconde, minute);
    seconde++;
    if (seconde > 59) {
        minute++;
        seconde = 0;
    }
}, 1000);

/* Fonction qui permet de vérifier chaque ligne/colonne/diagonale
du carré pour qu'elles soient bien toute égale à 15
 */

function verifLigneColonne() {
    let justeLC = false;
    for (let i = 0;i < 3; i++){
        if (verif(tab[i][0], tab[i][1], tab[i][2])){
            justeLC = true;
        } else {
            justeLC = false;
            break;
        }
    }
    if (justeLC = true) {
        for (let j = 0; j < 3; j++){
            if(verif(tab[0][j], tab[1][j], tab[2][j])) {
                justeLC = true;
            } else {
                justeLC = false;
                break;
            }
        }
        if(justeLC === true) {
            if (verif(tab[0][0], tab[1][1], tab[2][2]) && verif(tab[0][2], tab[1][1], tab[2][0])){
                justeLC = true;
            }
            else {
                justeLC = false;
            }
        }
    }
    return justeLC;

}
//Fonction qui permet de vérifier si chaque chiffre est utilisé qu'une seul fois
function verifChiffres() {
    let juste = false;
    let cas;
    for (let val = 1; val <= 9; val++) {
        cas = 0;
        for (let ligne = 0; ligne < 3; ligne++) {
            for (let colonne = 0; colonne < 3; colonne++) {
                if (tab[ligne][colonne] == val) {
                    cas++;
                }
            }
        }
        if(cas == 1) {
            juste = true;
        } else {
            juste = false;
            break;
        }
    }
    return juste;

}
//Fonction qui permet de vérifier si la somme de trois valeurs vallent bien 15
function verif(valeur1, valeur2, valeur3) {
    if (parseInt(valeur1) + parseInt(valeur2) + parseInt(valeur3) ===  15) {
        juste = true;
    } else {
        juste = false;
    }
    return juste;

}

//Fonction qui permet d'afficher si le carré est juste ou faux
function affichageRes(res) {
    let point = "";
    let textReponse = document.createElement('p');
    reponse.appendChild(textReponse);
    if (res == true) {
        point = calculPoints(minute, nbErreur);

        textReponse.innerHTML = "Bravo vous avez reussi !" + " Vous avez " + point + " points.";
    } else {
        textReponse.innerHTML = "Il y a une erreur !";
        nbErreur++;
    }

}

//Fonction qui permet d'afficher le compteur de temps
function afficheTmp(seconde, minute) {
    pTemp.innerHTML = minute + " min " + seconde + " s";
}

//Fonction qui effectue le calcul de point en fonction du
//nombre de temps passé à résoudre le carré et du nombre
//de fois où l'utilisateur c'est tromper
function calculPoints(minute, nbErreur) {
    return point = 10 - minute - nbErreur;;
}