const bloc2 = document.querySelector('.bloc2');
const devinezUnNombre = document.querySelector('.devinezUnNombre');
const form = document.getElementById('form');
const bloc2a = document.querySelector('.bloc2a');
const bloc2b = document.querySelector('.bloc2b');
const label = document.getElementById('label');
const label2 = document.getElementById('label2');
const bloc2c = document.querySelector('.bloc2c');
const bloc2d = document.querySelector('.bloc2d');
const boutonValider = document.querySelector('.boutonValider');
const poursuivreJeu = document.querySelector('.poursuivreJeu');
const boutonCommencer = document.getElementById('boutonCommencer');
const bandeau = document.querySelector('.bandeau');
const pisteAudio = document.querySelector('.pisteAudio');
const center = document.querySelector('.center');

const tentatives = document.querySelector('.tentatives');
const principal = document.querySelector('.principal');
const retourValeurNombre = document.querySelector('.retourValeurNombre');

const nombreTropPetit = document.getElementById('nombreTropPetit');
const nombreTropGrand = document.getElementById('nombreTropGrand');
const nombreEgalite = document.getElementById('nombreEgalite');
const lettreTropPetite = document.getElementById('lettreTropPetite');
const lettreTropGrande = document.getElementById('lettreTropGrande');
const lettreEgalite = document.getElementById('lettreEgalite');


let nombreAleatoire = Math.floor(Math.random() * 100);
console.log('nombreAleatoire vaut : ' + nombreAleatoire);
let indiceLettreAleatoire = Math.floor(Math.random() * 26);



var tableauNombre = new Array();
for(i = 0; i <= 100; i++){
	tableauNombre[i] = i;
}


var tableauAlphabet = new Array(26);

tableauAlphabet[0]="a";
tableauAlphabet[1]="b";
tableauAlphabet[2]="c";
tableauAlphabet[3]="d";
tableauAlphabet[4]="e";
tableauAlphabet[5]="f";
tableauAlphabet[6]="g";
tableauAlphabet[7]="h";
tableauAlphabet[8]="i";
tableauAlphabet[9]="j";
tableauAlphabet[10]="k";
tableauAlphabet[11]="l";
tableauAlphabet[12]="m";
tableauAlphabet[13]="n";
tableauAlphabet[14]="o";
tableauAlphabet[15]="p";
tableauAlphabet[16]="q";
tableauAlphabet[17]="r";
tableauAlphabet[18]="s";
tableauAlphabet[19]="t";
tableauAlphabet[20]="u";
tableauAlphabet[21]="v";
tableauAlphabet[22]="w"
tableauAlphabet[23]="x";
tableauAlphabet[24]="y";
tableauAlphabet[25]="z";


let lettreAleatoire = tableauAlphabet[indiceLettreAleatoire];
console.log('lettreAleatoire vaut : ' + lettreAleatoire);


let indiceLettreJoueur;
let indiceNombreJoueur;

document.querySelector('.poursuivreJeu').style.display = 'none';

form.addEventListener('submit', function maFonction(event){
	event.stopPropagation();
	event.preventDefault();


	valeurNombre = label.value; //Joueur entre un nombre
	valeurLettre = label2.value; //Joueur entre une lettre

console.log('valeurNombre vaut : ' + valeurNombre);

if (valeurNombre != nombreAleatoire){
	if (valeurNombre < nombreAleatoire) {	
		document.getElementById('nombreTropPetit').style.display = 'block';
		document.getElementById('nombreTropGrand').style.display = 'none';
		document.getElementById('nombreEgalite').style.display = 'none';
	} 
	else if (valeurNombre > nombreAleatoire){
		document.getElementById('nombreTropGrand').style.display = 'block';
		document.getElementById('nombreTropPetit').style.display = 'none';
		document.getElementById('nombreEgalite').style.display = 'none';
	}	
}
if (valeurNombre == nombreAleatoire){
	document.getElementById('nombreEgalite').style.display = 'block';
	document.getElementById('nombreTropGrand').style.display = 'none';
	document.getElementById('nombreTropPetit').style.display = 'none';
}


indiceLettreJoueur = (tableauAlphabet.indexOf(valeurLettre));
console.log('///indiceLettreJoueur : ' + indiceLettreJoueur + ' vaut : ' + valeurLettre);
console.log("indiceLettreAleatoire : " + indiceLettreAleatoire + ' vaut : ' + lettreAleatoire);
if (valeurLettre != lettreAleatoire){ 
	if(indiceLettreJoueur < indiceLettreAleatoire){
		document.getElementById('lettreTropPetite').style.display = 'block';
		document.getElementById('lettreTropGrande').style.display = 'none';
		document.getElementById('lettreEgalite').style.display = 'none';
	}

	else if( indiceLettreJoueur > indiceLettreAleatoire){	
		document.getElementById('lettreTropGrande').style.display = 'block';
		document.getElementById('lettreTropPetite').style.display = 'none';
		document.getElementById('lettreEgalite').style.display = 'none';
	}
}
if (indiceLettreJoueur == indiceLettreAleatoire){
	document.getElementById('lettreEgalite').style.display = 'block';
	document.getElementById('lettreTropGrande').style.display = 'none';
	document.getElementById('lettreTropPetite').style.display = 'none';
}
								
// retourValeurLettre.innerHTML = retourValeurL;

if (valeurNombre != nombreAleatoire){
	document.getElementById('label').value = '';
}
if (valeurLettre != lettreAleatoire){
	document.getElementById('label2').value = '';
}

if((valeurNombre == nombreAleatoire)&&(valeurLettre == lettreAleatoire)){
	chronoStop();
}



document.querySelector('.bloc2').style.display = 'none';
document.querySelector('.poursuivreJeu').style.display = 'block';
			
});

function poursuivre(){
	document.getElementById('nombreTropPetit').style.display = 'none';
	document.getElementById('nombreTropGrand').style.display = 'none';
	document.getElementById('nombreEgalite').style.display = 'none';
	document.getElementById('lettreTropPetite').style.display = 'none';
	document.getElementById('lettreTropGrande').style.display = 'none';
	document.getElementById('lettreEgalite').style.display = 'none';
	document.querySelector('.bloc2').style.display = 'block';
	document.querySelector('.poursuivreJeu').style.display = 'none';
}

lecteurAudio();
function lecteurAudio(){
	console.log("creerPlayerAudio");

	var oAudio = document.createElement("AUDIO");
	oAudio.volume = 0.1;

	if(oAudio.canPlayType("audio/mp3"))
		oAudio.setAttribute("src", "musique4.mp3");
		else
			return;
		console.log("audio créée");

		oAudio.setAttribute("width", "640");
		oAudio.setAttribute("height", "360");
		oAudio.setAttribute("controls", "controls");

		pisteAudio.appendChild(oAudio);
}



var startTime = 0
var start = 0
var end = 0
var diff = 0
var timerID = 0
window.onload = chronoReset;
function chrono(){
	end = new Date()
	diff = end - start
	diff = new Date(diff)
	var msec = diff.getMilliseconds()
	var sec = diff.getSeconds()
	var min = diff.getMinutes()
	var hr = diff.getHours()-1
	if (min < 10){
		min = "0" + min
	}
	if (sec < 10){
		sec = "0" + sec
	}
	if(msec < 10){
		msec = "00" +msec
	}
	else if(msec < 100){
		msec = "0" +msec
	}
	document.getElementById("chronotime").value = min + ":" + sec + ":" + msec
	timerID = setTimeout("chrono()", 10)
}
function chronoStart(){
	document.chronoForm.startstop.value = "stop!"
	document.chronoForm.startstop.onclick = chronoStop
	document.chronoForm.reset.onclick = chronoReset
	start = new Date()
	chrono()
	document.getElementById('boutonCommencer').style.display = 'none';
	document.querySelector('.bloc2').style.display = 'block';
}
function chronoContinue(){
	document.chronoForm.startstop.value = "stop!"
	document.chronoForm.startstop.onclick = chronoStop
	document.chronoForm.reset.onclick = chronoReset
	start = new Date()-diff
	start = new Date(start)
	chrono()
}
function chronoReset(){
	document.getElementById("chronotime").value = "00:00:000"
	start = new Date()
}
function chronoStopReset(){
	document.getElementById("chronotime").value = "00:00:000"
	document.chronoForm.startstop.onclick = chronoStart
}
function chronoStop(){
	document.chronoForm.startstop.value = "start!"
	document.chronoForm.startstop.onclick = chronoContinue
	document.chronoForm.reset.onclick = chronoStopReset
	clearTimeout(timerID)
}
