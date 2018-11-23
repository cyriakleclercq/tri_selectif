

// tableaux

var tableau_vert = ["bouteille de vin","bouteille de jus de fruit","bouteille de soupe","pot de confiture","petit pot de bébé","bouteille d'huile","bocal de conserve","papiers gras"];

var tableau_jaune = ["bouteille de plastique","bouteille de lait","flacon plastique","bidon plastique","canettes","bidon de sirop","désodorisant","mousse à raser"];

var tableau_bleu = ["Playboys","Quotidien","La dépeche","la voix du nord","l'observateur","Lui","GQ","le figaro"];

var tableau_marron = ["pots de yaourt","couche bébé","restes de repas","film plastique","papier sale","seringues","polystyrene","emballages sales"];

var tableau_general = ["bouteille de vin","bouteille de jus de fruit","bouteille de soupe","pot de confiture","petit pot de bébé","bouteille d'huile","bocal de conserve","papiers gras","bouteille de plastique","bouteille de lait","flacon plastique","bidon plastique","canettes","bidon de sirop","désodorisant","mousse à raser","Playboys","Quotidien","La dépeche","la voix du nord","l'observateur","Lui","GQ","le figaro","pots de yaourt","couche bébé","restes de repas","film plastique","papier sale","seringues","polystyrene","emballages sales"];

var tableau_vrai = [];

var tableau_faux = [];

var ordi = 0;

var iteration = 10;

var a = 0;



// fonction aleatoire

function alea() {

    var calc_ordi = Math.floor(Math.random() * tableau_general.length);
    ordi = tableau_general[calc_ordi];
    document.getElementById("proposition").innerHTML = ordi;
    iteration --;
    console.log(iteration);

    if (iteration < 0) {

        as();
    }
};

alea();


// poubelle verte

document.getElementById("pbver").addEventListener("click", function () {


    tableau_faux.push(ordi);
    console.log(tableau_faux);

a++;
    for (i = 0; i< tableau_vert.length; i++) {



        if (ordi == tableau_vert[i]) {
            document.getElementById("bonne_rep").innerHTML += ordi + "<br>";
            tableau_faux.pop();
            tableau_vrai.push(ordi);

        }

    }
    alea();
    reset();
    console.log(tableau_vrai);
});



// poubelle plastique

document.getElementById("pbpla").addEventListener("click", function () {

    tableau_faux.push(ordi);
    console.log(tableau_faux);


a++;
    for (i = 0; i< tableau_jaune.length; i++) {


        if (ordi == tableau_jaune[i]) {
            document.getElementById("bonne_rep").innerHTML += ordi + "<br>";
            tableau_vrai.push(ordi);
            tableau_faux.pop();
        }
        console.log(tableau_vrai);
    }
    alea();
    reset();
});



// poubelle papier

document.getElementById("pbpap").addEventListener("click", function () {

    tableau_faux.push(ordi);
    console.log(tableau_faux);

a++;
    for (i = 0; i< tableau_bleu.length; i++) {


        if (ordi == tableau_bleu[i]) {
            document.getElementById("bonne_rep").innerHTML += ordi + "<br>";
            tableau_vrai.push(ordi);
            tableau_faux.pop();
        }
        console.log(tableau_vrai);
    }
    alea();
    reset();
});



// poubelle non recyclable

document.getElementById("pborg").addEventListener("click", function () {


    tableau_faux.push(ordi);
    console.log(tableau_faux);
a++;

    for (i = 0; i< tableau_marron.length; i++) {


        if (ordi == tableau_marron[i]) {
            document.getElementById("bonne_rep").innerHTML += ordi + "<br>";
            tableau_vrai.push(ordi);
            tableau_faux.pop();
        }
    }
    alea();
    reset();
});




// fin du game

function as () {

    iteration = 9;
    document.getElementById("mauvaise_rep").innerHTML = tableau_faux.length;

    while (tableau_faux.length > 0) {
        tableau_faux.pop()
    }

    while (tableau_vrai.length > 0) {
        tableau_vrai.pop();
    }
}


function reset() {

    if (a == 10) {
        document.getElementById("apprent").innerHTML = "FIN DU GAME";
        document.getElementById("apprent").style.color = "red";

    }
    if (a > 10) {
        document.getElementById("bonne_rep").innerHTML = "";
        document.getElementById("apprent").innerHTML = "";
        a = 0;

    }
}



console.log(tableau_vrai);

