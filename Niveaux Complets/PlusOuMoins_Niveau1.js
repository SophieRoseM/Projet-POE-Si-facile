const label = document.getElementById('label');
const form = document.getElementById('form');
const boutonValider = document.querySelector('.boutonValider');
const vousAvezSaisi = document.querySelector('.vousAvezSaisi');
const messageReponse = document.getElementById('messageReponse');
const tentatives = document.querySelector('.tentatives');
const provocation = document.querySelector('.provocation');
const gagne = document.querySelector('.gagne');
const bandeau = document.querySelector('.bandeau');
const pisteAudio = document.querySelector('.pisteAudio');
const foo = document.getElementById('foo');
const boutonAide = document.getElementById('boutonAide');
const reponse = document.querySelector('.reponse');
const rappelJeu = document.getElementById('rappelJeu');
const aide = document.getElementById('aide');
const bloc2a = document.getElementById('bloc2a');
const bloc2b = document.getElementById('bloc2b');
const bloc2c = document.getElementById('bloc2c');
const continuerPartieOuPas = document.querySelector('.continuerPartieOuPas');


let valeurVousAvezSaisi = document.createElement('div'); //Création élément p dans variable valeurVousAvezSaisi
vousAvezSaisi.appendChild(valeurVousAvezSaisi); //valeurVousAvezSaisi se retrouve enfant du bloc concerné
let valeurReponse = document.createElement('div'); //Création élément p dans variable valeurReponse
messageReponse.appendChild(valeurReponse); //valeurReponse se retrouve enfant du bloc concerné
let valeurTentatives = document.createElement('div'); //Création élément p dans variable valeurTentatives
tentatives.appendChild(valeurTentatives); //valeurTentatives se retrouve enfant du bloc concerné
let valeurMessageProvocation = document.createElement('div');
provocation.appendChild(valeurMessageProvocation);

reponse.appendChild(boutonAide);

	let nombreAleatoire = Math.floor(Math.random() * 100) + 1;
	console.log(nombreAleatoire);
	let nbTentatives = 1;
	let compteurFaux = 0;
	let compteurAide = 0;

form.addEventListener('submit', function maFonction(event){
	event.stopPropagation();
	event.preventDefault();



	let nombreJoueur = label.value;
	console.log('type of nombreJoueur sans parseInt : ' + typeof(nombreJoueur));

	let testChiffres = "";
	let messageProvocation = "";
	let estUnEntier = new Boolean(true);
	let continuerPartie = new Boolean(false);
	
	
if (isNaN(nombreJoueur)){
	valeurMessageProvocation.setAttribute("width", "640");
	valeurMessageProvocation.setAttribute("height", "360");
	valeurMessageProvocation.innerHTML = "Votre saisie n'est pas valide";
	nombreJoueur = label.value;
	estUnEntier = false;
	compteurFaux++;
	console.log('valeur compteurFaux : ' + compteurFaux);

	if (document.getElementById('boutonAide').style.display == 'block') {
        document.getElementById('boutonAide').style.display = 'none';
    }

	if(compteurFaux == 2){
		console.log('Passage dans if compteurFaux : ' + compteurFaux);
		document.getElementById('boutonAide').style.display = 'block';
		document.getElementById('messageReponse').style.display = 'none';
	}
		document.getElementById("label").value="";
	
}

	while((nombreJoueur != nombreAleatoire ) && (nbTentatives < 6) && estUnEntier == true){
		if (nombreJoueur < nombreAleatoire){
			testChiffres = "C'est plus!";
			console.log('valeur de label value : ' + label.value);
		}
			else if (nombreJoueur > nombreAleatoire){
				testChiffres = "C'est moins!";
				console.log(label.value);
			}
				if(nbTentatives == 2){
					messageProvocation = 'Concentrez-vous';
				} else if(nbTentatives == 3){
					messageProvocation = "Ca a l'air mal barré";
				} else if(nbTentatives == 5){
					messageProvocation = "Et c'est gaaaggnn...Ah ben nan...";
				}
						
			valeurVousAvezSaisi.innerHTML = label.value;
			valeurReponse.innerHTML = testChiffres;
			valeurTentatives.innerHTML = nbTentatives;		
			valeurMessageProvocation.innerHTML = messageProvocation; 
			
			nbTentatives++;
			label.value = '';

			maFonction();

	}
		// let masquageTexte = document.getElementById(messageGagné).style.display;
		// if (nombreJoueur == nombreAleatoire){
		// 	document.getElementById(messageGagné).style.display = 'none';
		//}
	
		if((nombreJoueur == nombreAleatoire) && (estUnEntier == true)){
			valeurVousAvezSaisi.innerHTML = label.value;       //Je remets la valeur insérée dans nombre du joueur et tentatives car si nombre est juste
			valeurTentatives.innerHTML = nbTentatives; //il sort de la boucle et n'affiche pas le dernier nombre joueur ainsi que nombre de tentatives.
			valeurReponse.innerHTML = '';
			valeurMessageProvocation.innerHTML = messageProvocation = 'Gagné!!';
			document.querySelector('.continuerPartieOuPas').style.display = 'block';
			document.getElementById('bloc2a').style.display = 'none';
			document.getElementById('bloc2b').style.display = 'none';
			document.getElementById('bloc2c').style.display = 'none';
			document.getElementById('messageReponse').style.display = 'none';
			document.querySelector('.tentatives').style.display = 'none';
			document.querySelector('.vousAvezSaisi').style.display = 'none';
			continuerPartie = true;	
		} else if ((nombreJoueur != nombreAleatoire) && (estUnEntier == true)){
			valeurVousAvezSaisi.innerHTML = label.value;
			valeurTentatives.innerHTML = nbTentatives;
			valeurReponse.innerHTML = '';
			valeurMessageProvocation.innerHTML = messageProvocation = 'Perdu!!';
			document.querySelector('.continuerPartieOuPas').style.display = 'block';
			document.getElementById('bloc2a').style.display = 'none';
			document.getElementById('bloc2b').style.display = 'none';
			document.getElementById('bloc2c').style.display = 'none';
			document.getElementById('messageReponse').style.display = 'none';
			document.querySelector('.tentatives').style.display = 'none';
			document.querySelector('.vousAvezSaisi').style.display = 'none';
			continuerPartie = true;
		}
		
			
});

// if(continuerPartie == true){

// }





lecteurAudio();
function lecteurAudio(){
	console.log("creerPlayerAudio");

	var oAudio = document.createElement("AUDIO");
	oAudio.volume = 0.3;

	if(oAudio.canPlayType("audio/mp3"))
		oAudio.setAttribute("src", "musique1.mp3");
		else
			return;
		console.log("audio créée");

		oAudio.setAttribute("width", "640");
		oAudio.setAttribute("height", "360");
		oAudio.setAttribute("controls", "controls");

		pisteAudio.appendChild(oAudio);
}

function rappelDesRegles(){
	var description = document.getElementById('aide');
	if (compteurAide < 1) {
		if(document.getElementById('rappelJeu').style.display = 'none'){
			document.getElementById('bloc2a').style.display = 'none';
			document.getElementById('bloc2b').style.display = 'none';
			document.getElementById('bloc2c').style.display = 'none';
			document.getElementById('messageReponse').style.display = 'none';
			document.getElementById('rappelJeu').style.display = 'block';
			description.textContent = 'Cliquez ici pour continuer';
		} else {
			document.getElementById('rappelJeu').style.display = 'none';
		}
		
	}
	if(compteurAide == 1){
			document.getElementById('rappelJeu').style.display = 'none';
			document.getElementById('bloc2a').style.display = 'block';
			document.getElementById('bloc2b').style.display = 'block';
			document.getElementById('bloc2c').style.display = 'block';
			document.getElementById('messageReponse').style.display = 'block';
			document.getElementById('boutonAide').style.display = 'none';
	}
	compteurAide++;
}
//Pour masquer la division : document.getElementById(messageGagné).style.display = none;

///Pour afficher la division : document.getElementById(messageGagné).style.display = block;


// function afficherCacher(boutonAide) // c'est l'id du div
// {

//   if (document.getElementById(boutonAide).style.display == 'none') {
//        document.getElementById(boutonAide).style.display = 'block';
//   }
//   else {
//        document.getElementById(boutonAide).style.display = 'none';
//   }
// }

// function toggle_div(bouton, id) {
 
//   var div = document.getElementById(id);
 
//   if(div.style.display=="none") {
 
//     div.style.display = "block";
 
//   } else {
 
//     div.style.display = "none";
 
//   }
 
// }
/** Fonction basculant la visibilité d'un élément dom
* @parameter anId string l'identificateur de la cible à montrer, cacher
*/
// function toggle(boutonAide)
// {
// 	node = document.getElementById(boutonAide);
// 	if (node.style.visibility=="hidden")
// 	{
// 		// Contenu caché, le montrer
// 		node.style.visibility = "visible";
// 		node.style.height = "auto";			// Optionnel rétablir la hauteur
// 	}
// 	else
// 	{
// 		// Contenu visible, le cacher
// 		node.style.visibility = "hidden";
// 		node.style.height = "0";			// Optionnel libérer l'espace
// 	}
// }