const BTNrouge = document.querySelector(".Rouge"); // valeur 1
const BTNbleu = document.querySelector(".Bleu"); // valeur 2
const  BTNviolet = document.querySelector(".Violet"); // valeur 3
const BTNjaune = document.querySelector(".Jaune"); // valeur 4
const BTNvert = document.querySelector(".Vert"); // valeur 5
const BTNorange = document.querySelector(".Orange"); // valeur 6
const BTNgris = document.querySelector(".Gris"); // valeur 7
const BTNCyan = document.querySelector(".Cyan"); // valeur 8
const BTNvalidation = document.querySelector(".BTNvalidation");
// const BTNdelete = document.querySelector(".BTNdelete");
const BTNdemarer = document.querySelector(".Demarer");
const BTNsupprimer = document.querySelector(".Supprimer");
const BTNeasy = document.querySelector(".easy");
const BTNnormal = document.querySelector(".normal");
const BTNdur = document.querySelector(".Difficil");
var INCREMENTPOSITION = 0;
var INCREMENTCOULEUR = 0;
var IncrementBouton = 2;
var clickbtn = false;
var Classediv = [];
var BoutonClique;
var ClassRond = [];
var tampon = 0;
var incrementligne = 0;
var incrementLigne = 0;
var difficulte = 1;
var couleur1, couleur2, couleur3, couleur4;
var  a = 2;
const Main = document.querySelector(".Main");
// Rentre dans un tableau les classes identifiants les cercles
for (i=0;i<97;i++){
    ClassRond[i] = "a10";
}
for (i=1; i<=12; i++){
    for (j=0; j<= 7;j++){
        if (i == 1 && j ==0){
            tampon = 0;
        }else if(i ==1) {
            tamponA = (String(i - 1) + String(j));
            // permet de transformer le string en entier
            tampon = tamponA * 1;

        }else {
                tamponA = (String(i -1) + String(j));
                tampon = tamponA;
         }

        ClassRond[tampon] = "a" + i  + j;


    }
}
// Gere les difficultés
BTNeasy.addEventListener("click", function (event) {
   BTNeasy.classList.add("Hidden");
   BTNnormal.classList.add("Hidden");
   BTNdur.classList.add("Hidden");
   BTNdemarer.classList.remove("Hidden");
   difficulte = 1;

});
BTNnormal.addEventListener("click", function (event) {
   BTNeasy.classList.add("Hidden");
   BTNnormal.classList.add("Hidden");
   BTNdur.classList.add("Hidden");
   BTNdemarer.classList.remove("Hidden");
   difficulte = 2;

})
;BTNdur.addEventListener("click", function (event) {
   BTNeasy.classList.add("Hidden");
   BTNnormal.classList.add("Hidden");
   BTNdur.classList.add("Hidden");
   BTNdemarer.classList.remove("Hidden");
   difficulte = 3;

});

// Permet de connaitre le code couleur d'un cercle
function checkcouleur(casechoisie){
    var image = document.getElementsByClassName(casechoisie).item(0);
    var colouring = image.getAttribute("src");

    switch (colouring) {
        case "image/circlerouge.svg":
            return 1;
        case "image/circlebleu.svg":
            return 2;
        case "image/circleviolet.svg":
            return 3;
        case "image/circlejaune.svg":
            return 4;
        case "image/circlevert.svg":
            return 5;
        case "image/circleorange.svg":
            return 6;
        case "image/circlegris.svg":
            return 7;
        case "image/circlecyan.svg":
            return 8;
        default:
            return 9;

    }

}
function changeImage(casechoix,couleur)
{

    var x = document.getElementsByClassName(casechoix).item(0);
    // var v = x.getAttribute("src");
    var v = couleur;
    x.setAttribute("src", v);
}
function getRandomInt(max) {
    var randomval = Math.floor(Math.random() * Math.floor(max));
    if (randomval == 0){
        randomval = 8;
    }
    return randomval;
}
function changea(valeur) {

// Permet de changer l'indice des cercles pour la coloration
    val = valeur;
    if (valeur<10){

        if(val ==  5) {
            if (clickbtn){
                valeur  = valeur + 7;
                incrementligne = incrementligne + 1;
                clickbtn = false;
                // couleure =
                // console.log(couleure);
            } else {
                valeur = 2;
            }
        } else {
            valeur = valeur + 1;
        }
    } else {
        var val = valeur % 10;
        if(val ==  5) {
            if (clickbtn){
                valeur  = valeur + 7;
                incrementligne = incrementligne + 1;
                clickbtn = false;
            } else {
                valeur = valeur - 3;
                console.log("coucou");
            }
        }else {
            var valeur = valeur + 1;
        }

    }
    return valeur;
}
BTNrouge.addEventListener("click", function (event) {
    BoutonClique = 1;
    remplissage(ClassRond[a],BoutonClique);
    a = changea(a);

});

BTNbleu.addEventListener("click", function (event) {
    BoutonClique = 2;
    remplissage(ClassRond[a],BoutonClique);
    a = changea(a);
});
BTNviolet.addEventListener("click", function (event) {
    BoutonClique = 3;
    remplissage(ClassRond[a],BoutonClique);
    a = changea(a);
});
BTNjaune.addEventListener("click", function (event) {
    BoutonClique = 4;
    remplissage(ClassRond[a],BoutonClique);
    a = changea(a);
});
BTNvert.addEventListener("click", function (event) {
    BoutonClique = 5;
    remplissage(ClassRond[a],BoutonClique);
    a = changea(a);
});
BTNorange.addEventListener("click", function (event) {
    BoutonClique = 6;
    remplissage(ClassRond[a],BoutonClique);
    a = changea(a);
});
BTNgris.addEventListener("click", function (event) {
    BoutonClique = 7;
    remplissage(ClassRond[a],BoutonClique);
    a = changea(a);
});
BTNCyan.addEventListener("click", function (event) {
    BoutonClique = 8;
    remplissage(ClassRond[a],BoutonClique);
    a = changea(a);
});
function remplissage(casechoisie,couleur){

// Remplie les cercles d'une couleur celon l'indice et le code couleur
    switch (couleur) {
        case 1:
            console.log("cou",casechoisie,couleur);
            couleurbtn = "image/circlerouge.svg";
            changeImage(casechoisie,couleurbtn);
            break;
        case 2:
            console.log("cou",casechoisie,couleur);
            couleurbtn = "image/circlebleu.svg";
            changeImage(casechoisie,couleurbtn);
            break;
        case 3:
            console.log("cou",casechoisie,couleur);
            couleurbtn = "image/circleviolet.svg";
            changeImage(casechoisie,couleurbtn);
            break;
        case 4:
            console.log("cou",casechoisie,couleur);
            couleurbtn = "image/circlejaune.svg";
            changeImage(casechoisie,couleurbtn);
            break;
        case 5:
            console.log("cou",casechoisie,couleur);
            couleurbtn = "image/circlevert.svg";
            changeImage(casechoisie,couleurbtn);
            break;
        case 6:
            console.log("cou",casechoisie,couleur);
            couleurbtn = "image/circleorange.svg";
            changeImage(casechoisie,couleurbtn);
            break;
        case 7:
            console.log("cou",casechoisie,couleur);
            couleurbtn = "image/circlegris.svg";
            changeImage(casechoisie,couleurbtn);
            break;
        case 8:
            console.log("cou",casechoisie,couleur);
            couleurbtn = "image/circlecyan.svg";
            changeImage(casechoisie,couleurbtn);
            break;
        case 9:
            couleurbtn = "image/circleblanc.svg";
            changeImage(casechoisie,couleurbtn);
            break;
        case 10:
            couleurbtn= "image/circlenoir.svg";
            changeImage(casechoisie,couleurbtn);
            break;
        default:
            break;


    }

}
// Donne une classe unique à chaque div créée



for (i=0; i<= 12; i++){
    Classediv[i]="Ligne" + i;
}

BTNsupprimer.addEventListener("click", function (event) {
    event.stopPropagation();
    event.preventDefault();
    BTNeasy.classList.remove("Hidden");
    BTNnormal.classList.remove("Hidden");
    BTNdur.classList.remove("Hidden");

    BTNsupprimer.classList.add("Hidden");
    // BTNdemarer.classList.remove("Hidden");
    main.remove();
    var incrementligne = 0;
    IncrementBouton = 2;

    a = 2;




});


BTNdemarer.addEventListener("click", function (event){
    event.stopPropagation();
    event.preventDefault();

    main = document.createElement("div");
    main.classList.add("endiv");
    BTNdemarer.classList.add("Hidden");
    BTNsupprimer.classList.remove("Hidden");
    couleur1 = getRandomInt(8);
    couleur2 = getRandomInt(8);
    couleur3 = getRandomInt(8);
    couleur4 = getRandomInt(8);
    console.log(couleur1,couleur2,couleur3,couleur4);



    for (i = 1; i < 13; i++ ) {
        bloccercle = document.createElement("div");
        for (j=0; j < 8; j++) {
            bloccercle.classList.add(Classediv[i]);

            listepointT = document.createElement("span");
            imageT = document.createElement("img");
            let classe = "a" + i + j;
            imageT.classList.add(classe);
            if (j<2 || j>5){
            imageT.classList.add("Rondtest");}
            else{
                imageT.classList.add("Rondcolor")
            }
            imageT.src = "image/circle.svg";
            bloccercle.appendChild(listepointT);
            listepointT.appendChild(imageT);
            if (j==1){
            imageT.classList.add("espacedroit");
            }
            if (j==6) {
                imageT.classList.add("espacegauche");
            }}


            main.appendChild(bloccercle);
            Main.appendChild(main);



    }
}
);


BTNvalidation.addEventListener("click", function () {
    console.log(couleur1,couleur2,couleur3,couleur4);
    var dicouleur = [couleur1,couleur2,couleur3,couleur4];
    let decalee = 0;
    let decalee1 = 0;
    let decalee2 = 0;
    if (difficulte == 1){

        // PROGRAMME FACIL
        for (i = 0;i < 4;i++){
            switch (i) {
                case 0:
                    var couleurcheck = couleur1;
                    break;
                case 1:
                    var couleurcheck = couleur2;
                    break;
                case 2:
                    var couleurcheck = couleur3;
                    break;
                case 3:
                    var couleurcheck = couleur4;
                    break;

            }
            if (checkcouleur(ClassRond[IncrementBouton]) == dicouleur[0] || checkcouleur(ClassRond[IncrementBouton]) == dicouleur[1] || checkcouleur(ClassRond[IncrementBouton]) == dicouleur[2] || checkcouleur(ClassRond[IncrementBouton]) == dicouleur[3]){
                if (i<2){
                    let decalage = IncrementBouton - 2;
                    remplissage(ClassRond[decalage],9);
                } else{
                    let decalage = IncrementBouton +2;
                    remplissage(ClassRond[decalage],9);

                }


            }
            if (checkcouleur(ClassRond[IncrementBouton]) == couleurcheck){
                if (i<2){
                    let decalage = IncrementBouton - 2;
                    remplissage(ClassRond[decalage],10);
                } else{
                    let decalage = IncrementBouton +2;
                    remplissage(ClassRond[decalage],10);

                }


            }
            IncrementBouton = IncrementBouton + 1;
        }
        // IncrementBouton = IncrementBouton + 6;
        incrementLigne = incrementLigne + 1;
    } else if (difficulte == 2){
        // PROGRAMME NORMAL
        for (i = 0;i < 4;i++){
            if (checkcouleur(ClassRond[IncrementBouton]) == dicouleur[i]) {
                INCREMENTPOSITION = INCREMENTPOSITION + 1;

            }
            if (checkcouleur(ClassRond[IncrementBouton]) == dicouleur[0] || checkcouleur(ClassRond[IncrementBouton]) == dicouleur[1] || checkcouleur(ClassRond[IncrementBouton]) == dicouleur[2] || checkcouleur(ClassRond[IncrementBouton]) == dicouleur[3]){
                // PROGRAMME NORMAL
                INCREMENTCOULEUR = INCREMENTCOULEUR + 1;
            }
            IncrementBouton = IncrementBouton +1;
        }
        switch (INCREMENTPOSITION) {
            case 4:
                remplissage(ClassRond[IncrementBouton + 1], 10);
            case 3:
                remplissage(ClassRond[IncrementBouton], 10);
            case 2:
                remplissage(ClassRond[IncrementBouton - 5], 10);
            case 1:
                remplissage(ClassRond[IncrementBouton - 6], 10);

        }
        if (INCREMENTPOSITION == 3){
            decalee1 = 3;
        } else if (INCREMENTPOSITION == 2){
            decalee = 5;
            decalee1 = 3
        } else if (INCREMENTPOSITION == 1){
            decalee = 5;
            decalee1 = -1;
            decalee2 = 0;
        } else if (INCREMENTPOSITION == 0){
            decalee1 = -1;
        }


        switch (INCREMENTCOULEUR - INCREMENTPOSITION) {
            case 4:
                remplissage(ClassRond[IncrementBouton + 1 + INCREMENTPOSITION], 9);
            case 3:
                remplissage(ClassRond[IncrementBouton + INCREMENTPOSITION + decalee2], 9);
            case 2:
                remplissage(ClassRond[IncrementBouton  - 6 + INCREMENTPOSITION + decalee], 9);
            case 1:
                remplissage(ClassRond[IncrementBouton  - 5 + INCREMENTPOSITION + decalee1], 9);
        }
        } else if (difficulte == 3){
        for (i = 0;i < 4;i++){
            if (checkcouleur(ClassRond[IncrementBouton]) == dicouleur[0] || checkcouleur(ClassRond[IncrementBouton]) == dicouleur[1] || checkcouleur(ClassRond[IncrementBouton]) == dicouleur[2] || checkcouleur(ClassRond[IncrementBouton]) == dicouleur[3]){
                // PROGRAMME NORMAL
                INCREMENTCOULEUR = INCREMENTCOULEUR + 1;
            }
            IncrementBouton = IncrementBouton +1;
        }
        switch (INCREMENTCOULEUR) {
            case 4:
                remplissage(ClassRond[IncrementBouton +1],9);
            case 3:
                remplissage(ClassRond[IncrementBouton],9);
            case 2:
                remplissage(ClassRond[IncrementBouton-5],9);
            case 1:
                remplissage(ClassRond[IncrementBouton -6],9);

        }

    }


    // trouver les 4 case noires de la ligne


    clickbtn = true;
    var ecart = 10 - a%10;
    if (a != 6 ){
        a = a + ecart+2;
        clickbtn = false;
    }else{
        a = a +5;
        clickbtn = false;
    }
    if (checkcouleur(ClassRond[IncrementBouton - 4]) == dicouleur[0] && checkcouleur(ClassRond[IncrementBouton - 3]) == dicouleur[1] && checkcouleur(ClassRond[IncrementBouton - 2]) == dicouleur[2] && checkcouleur(ClassRond[IncrementBouton - 1]) == dicouleur[3]){
        alert("YOU WIN!!! BEuravo!!!");
    }
    IncrementBouton = IncrementBouton + 6;

    INCREMENTCOULEUR = 0;
    INCREMENTPOSITION = 0;
});
