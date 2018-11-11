const reponseQ1 = document.getElementById('reponseQ1');
const reponseQ2 = document.getElementById('reponseQ2');
const reponseQ3 = document.getElementById('reponseQ3');
const reponseQ4 = document.getElementById('reponseQ4');
const solutionQ1 = document.querySelector('.solutionQ1');
const solutionQ2 = document.querySelector('.solutionQ2');
const solutionQ3 = document.querySelector('.solutionQ3');
const solutionQ4 = document.querySelector('.solutionQ4');
const form = document.getElementById('form');



let resultatQ1 = document.createElement('div'); //Création élément dans solutionQ1 pour afficher si la reponse correcte
solutionQ1.appendChild(resultatQ1);
let resultatQ2 = document.createElement('div'); //Création élément dans solutionQ2 pour afficher si la reponse correcte
solutionQ2.appendChild(resultatQ2);
let resultatQ3 = document.createElement('div'); //Création élément dans solutionQ3 pour afficher si la reponse correcte
solutionQ3.appendChild(resultatQ3);
let resultatQ4 = document.createElement('div'); //Création élément dans solutionQ4 pour afficher si la reponse correcte
solutionQ4.appendChild(resultatQ4);

let affichePoint = document.createElement('div');
affichePoints.appendChild(affichePoint);// création d'un div affichePoint dans le div affichepoints


form.addEventListener('submit', function(event){ //creer une fonction qui corrige le questionnaire
	event.stopPropagation();
	event.preventDefault();

	
	let reponse1Joueur = reponseQ1.value;
	let reponse2Joueur = reponseQ2.value;
	let reponse3Joueur = reponseQ3.value;
	let reponse4Joueur = reponseQ4.value;
	var point = 0;

	if (reponse1Joueur == 3){
		resultatQ1.innerHTML = "Bonne réponse !";
		point +=1;
	}else{ resultatQ1.innerHTML =" La bonne réponse est 3( voir avec l' évaluation de la promo 2 Udev!"};



	if (reponse2Joueur === 'd'){
		resultatQ2.innerHTML= "Bonne réponse !";
		point +=1;
	}else{resultatQ2.innerHTML =" La bonne réponse est la d) DELETE TABLE CLIENT n'existe pas."};




	if (reponse3Joueur === 'd'){
		resultatQ3.innerHTML = "Bonne réponse !";
		point +=1;
	}else{ resultatQ3.innerHTML  =" La bonne réponse est la d) La jointure FULL OUTER JOIN permet de combiner les résultats des 2 tables."};



	if (reponse4Joueur === 'a'){
		resultatQ4.innerHTML= "Bonne réponse !";
		point +=1;
	}else{ resultatQ4.innerHTML=" La bonne réponse est la a) SQL fut normalisé par l'ANSI en 1986."};

affichePoint.innerHTML=" Vous avez :" + point + "points";

});

