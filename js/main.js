// log de hello JS
console.log("Hello JS!");

/* apprenons à coder 
en JavaScript
*/

// instructions (ordre direct)

// instruction1;
// instruction2;

//blocs (structure = applique une logique)

/*
nomBloc(parametrage) {
    //instructions et/ou bloc
}
*/

// variables 

/* 
camelCase
pas d'accent, d'espace ou de _ , ni
autre symbole spécial
! chiffres OK mais pas en début de nom
*/

// variable
let animal = "dog"; // déclaration et initialisation de la variable
animal = "cat"; // modification de sa valeur

// constante
const deux = 2; //valeur ne peut ê modifiée
// deux = 3; // provoque une erreur
console.log(deux);


// types

// number : nombre, entier ou décimal
const trois = 3;
const prix = 1.15;

//string
const surnom = "Jean";
let repas = "pizza";

//booléen
let isAdult = true;
let hasBeenToTokyo = false;



// portée

/* 
portée = zone de code dans laquelle variable est 
définie + utilisable
*/

// opérateurs

//opérateur d'affectation simple : =
// permet attribuer valeur à variable
let price = 1.17;
const chien = "dog";

//oprateur arithmétiques

/* 
doivent ê entourés de valeurs type number

+ , -, *, /

% modulo : a % b ê le reste de la division
entière de a par b

*/


//opérateurs d'affectation spéciaux : //

/* 

+= addition puis affectation

++ incrémentation de 1 puis affectation

-= soustration puis affectation

-- décrémentation puis affectation 

*= multipliation puis affectation

/= division puis affectation

%= modulo puis affectation
*/

let numberToGuess = 2;
numberToGuess += 3;
numberToGuess -= 2;
numberToGuess++;
numberToGuess *= 10;
numberToGuess /= 2 ;
numberToGuess %= 7;
numberToGuess--;

console.log(numberToGuess);

// opérateur de concaténation //

/*
sert à fusionner
 + si suivi de type string 
 += fonctionne pour concaténation
*/

const prenom = "John";
const nom = "Smith";
const nomComplet = prenom + " " + nom;
console.log("Je m'appelle " + nomComplet);

// interpolation //

/*
sert à incruster
 string entre `` 
 valeurs entre ${}
 += fonctionne pour concaténation
*/

console.log(`Je m'appelle ${prenom} ${nom}, 
soyez bienvenu`);


//opérateurs d'égalité et d'inégalité : //

/* 

== même valeur

=== même valeur et même type

!= valeur differente

!= valeur ou type different-e

renvoient un booléen

*/

console.log("1 :" + (2 == "2")); //même valeur
// => true
console.log("2 :" + (2 === "2")); //même valeur
//mais type différent
// => false
console.log("3 :" + (2 != "2")); // valeur non
// différente
// => false
console.log("4 :" + (2 !== "2")); // valeur non
// différente mais type différente
// => true



//opérateurs de comparaison : //

/* 

< inférieur strictement

<= inférieur ou égal

> supérieur strictement

>= supérieur ou égal

renvoient un booléen

*/

console.log("3 < 7 is " + (3 < 7));
console.log("8 <= 1 is " + (8 <= 1));
console.log("7 >= 7 is " + (7 >= 7));
console.log("7 > 7 is " + (7 > 7));


//opérateurs de logiques : //

/* 

sert à lier plusieurs conditions
pour savoir si l'ensemble est true ou false

&& : et logique; si les 2 conditions sont vraies

|| : ou logique : si au moins 1 est vraie

! : non logique : inverse une condition

*/

// cas simples : 2 conditions liées //

console.log("true && true = " + (2 > 1 && 3 <= 3));
// true : tout est vrai
console.log("true && false = " + (2 > 1 && 3 < 3));
// false : tout n'est pas vrai
console.log("true || true = " + (2 > 1 || 3 < 3));
// true : au moins 1 ets vrai
console.log("false || false = " + (2 <= 1 && 3 < 3));
// false : pas 1 seul ets vrai

// cas simples : inversion de condition
console.log("!true = " + !(2 > 1)); // false
console.log("!false = " + !(2 <= 1)); // true


// cas avec des parenthèses importantes :
// 3 conditions liées

console.log("true || (true && false) = " + (true || (true && false))); // true
// étapes : true || (true && false) === true || false ===true
console.log("true || true) && false = " + ((true || true) && false)); // false
// étapes : (true || true) && false === true && fals === false


// //  opérateur ternaire // // 

/* 
s'cérit en 3 parties : composé de 2 symboles qui les séparent :
? et :

teste une condition et retourne qqch si condition est vraie
ou autre chose si condition est fausse

condition ? siVrai : siFaux
*/

const ageJohn = 20;
console.log(" John est " + (ageJohn >= 18 ? "majeur" : "mineur") +
" en France"); // concaténation

console.log(`John est ${ageJohn >= 21 ? "majeur" : "mineur"} aux Etats-Unis`);
// interpolation


// // blocs de condition // //
let age = 55;

// if ou if / elseif / else

// le bloc est simple, la codnition est vraie
if(age >=18) {
    console.log("La personne est majeure.")
}
// si condition est true, le programme entre dans bloc,
// et execute le contenu
// si la condition est false, le programme n'entre pas dans le 
//bloc et ne l'execute pas



// variante if/else (si la condition est vraie, sinon)
if(age >=18) {
    console.log("La personne est majeure.");
} else {
    console.log("La personne est mineure.");
}

// si condition du if est true, le programme entre dans bloc du if,
// et execute le contenu
// sinon, donc si la condition du if est false, le programme entre dans le bloc du else
// le else n'a pas de condition


// if/elseif (si qqch, sinon autre chose, sinon si)

if(age >= 100) {
    console.log("La personne est centenaire");
} else if(age >= 80) {
    console.log("La personne est au moins octogénaire");
} else if(age >= 60) {
    console.log("La personne est au moins sexagénaire");
} else if(age >= 40) {
    console.log("La personne est au moins quadragénaire");
}


/*
si condition du if est vrai, le programme entre ds bloc du if

sinon si la condition du 1er elseif est true : le programme entre 
dans son bloc à la place

sinon si condition du 2e elseif est true, le programme entre ds son bloc

!! l'ordre des conditions est important

!! le programme n'exécute pas plusieurs bloc, mais **uniquement**
le 1er dont la condition est true  : il est possible que 
aucun bloc ne soit exécuté si les conditions du if ne couvrent pas ts les cas

*/


// le if/elseif/else (si qqch, sinon si autre chose... sinon)


if(age >= 100) {
    console.log("La personne est centenaire");
} else if(age >= 80) {
    console.log("La personne est au moins octogénaire");
} else if(age >= 60) {
    console.log("La personne est au moins sexagénaire");
} else if(age >= 40) {
    console.log("La personne est au moins quadragénaire");
} else {
    console.log("La personne n'est pas encore quadragénaire");
}


/*

puisquil y a un else, le programme exécute au moins 1 et 1 seul bloc:

soit le 1er boc if ou elseif qui a sa condition true

soit par défaut le bloc else qui couve le reste des possibilités
!! si ce bloc est exécuté : signifie que ttes les conditions du if
et des elseif sont false

*/


/*  !!résumé des blocs if/elseif/else!!
 le blof if est tjrs 1er

 le bloc else est tjrs dernier

 le bloc else est le seul qui n'a pas de condition : sinon de ttes
 les uatres possibilités

 si 1 partie du code a besoin d'ê exécuté si condition vraie: if suffit

 si bloc par défaut à éxécuter : bloc else

 si elseif : faire attention à 'ordre

*/



// le switch/case //

/* 
le bloc switch prend 1 argu en paramètre et va tester si égalité ê true
entre ce paramètre et chaque case (cas) !! attention ordre écriture

dés que égalité : programme entre dans bloc case associé

si programme rencontre bloc default : aucun case était égal au 
paramètre du switch : programme entre ds bloc default

si break est lu/exécuté : le programme saure bloc entier et continue
la lecture apres le } final du bloc switch case

quand entre dans bloc : programme exécute code depuis le : associé
au case (ou default) => rencontrer 1 break
*/

// cas standard : chaq blo case se termine par 1 break + bloc default

let action = "virement";

switch(action) {
    case "retrait":
        // instructions de retrait
        break;

    case "virement" :
        // instructions de virement
        break;

    case "cloturerCompte" :
        //instructions de cloture de compte
        break;

    default:
        // instructions par défaut
        break;
}

// cas sans break systémaique : certaines instructions pvt ê exécutées
// par différents case

let numberToGuess2 = 7;
let operation = "foisDeuxPLusTrois";

switch(operation) {
    case "PLusUn":
        numberToGuess2++;
        break;

    case "foisDeuxPlusTrois" :
        numberToGuess2 *= 2;

    case "plusTrois" :
        numberToGuess2 += 3;
        break;

    case "foisZero" :
    default:
        numberToGuess2 = 0;
        break;
}


// // les boucles // //

/*
prmettent executer plusieurs fois le code contenu dans leur corps

chaque passage d'1 boucle est 1 itération

*/


// boucle for //

/*
généralemen utilisée (avce ses variantes) quand le programme sait
combien d'itérations il devra effectuer


for (initialisation; condition pr continuer, incrémentation) {}
*/


// for "de a à b inclus"
// pour i allant de 1 à 10 inclus, écrivant la table de 3 progressivemt
for (let i = 1; i <= 10; i++) {
    console.log(`3 x ${i} = ${3 * i}`);
}


// for "nfois"
// ici : 3 fois ; pour i allant  de 0 à 3 exclu (donc =>2 inclus)
//ecrivan 3 fois au total
for (let i = 0; i < 3; i++) {
    console.log("Je serai un bon développeur");
}

// for de a à b inclus avec un pas différent de 1 :
// ici pour i démarrant à 3, incrémenté de 3 à chaque itération, tant que
// i <= 10
for (let i = 3;  i <= 10; i += 3) {
    console.log(`${i} est inférieur ou égal à 10 et est divisible
    par 3`);
}

// for inversé : on décrémente au lieu d'incrémenter 
// ici pour i démarrant à 5, décrémenté de 1 à chaq itération, => 0 exclus
// donc 1 inclus

for (let i = 5; i > 0; i--) {
    console.log(`${i}...`)
}
console.log("Bonne année !");

// la boucle while //

/*
généralement utilisée quand le programme ne sait pas cmb
d'itération il devra exécuter

while(condition pour continuer){}


!! risque de boucle infinie : si rien ds la condition ne renverra faux au
bout d'un moment
*/

// while classqiue

let kAge = 12;
while (kAge < 18) {
    console.log(`J'ai maintenant ${kAge} ans...`);
    kAge++;
}
console.log(`J'ai finalement ${kAge} ans.`);




// // les fonctions // //


/*

utiles afin de ne pas répéter le code, lsq m^me logiq doit
ê utilisée à plsurs endroits

lsq function ê déclarée, on peut l'appeler autant de X que nécessR
(lordre des argus doit ê respecT lors de l'appL de la fct)

les argus sont des variables locales  et pvt ê utilisés à intérieur fct

//déclaration de la fontion
nomDeLaFonction(arg1, arg2, arg3) {
    //logique implémentée
    const result = arg1 * arg2 + arg3;

    //renvoi d'un resultat
    return result;
}

// appel à la fct déclarée plus haut
const valeurRenvoyee = nomDeLaFonction(1, 2, 3);

*/

// ex fct simple

// déclaration de la fct getNombreFoisTrois qui prend en argument
// un nbre et qui renvoie le triple de ce nombre
function getNombreFoisTrois(nombre) {
    // nombre est un argument et une variable locale
    return nombre * 3; // la fct retourne le résultat du calcul
}

// appel à la fct getNombreFoisTrois en lui passant 5 en argu
// et affectation du résultat reçu dans la constante cinqFoisTrois
const cinqFoisTrois = getNombreFoisTrois(5); // cinqFoisTrois = 15

// log de cinqFoisTrois dans la console
console.log("cinqFoisTrois = " + cinqFoisTrois);

// ex fct sans résultat retourné :
// ici log de la phrase fournie en argu à laqL on ajoute un espace + !

function logPhraseAvecPointExclamation(phrase) {
    console.log(`${phrase} !`);
}

logPhraseAvecPointExclamation("Je serai un bon développeur");


// function qui appelle d'autres fonctions //

// function qui retourne le résultat de l'addition de 2 nbres
function getResultatAddition2Nombres(nombre1, nombre2) {
    return nombre1 + nombre2;
}

// function qui retourne le résultat de la multiplication de 2 nbres
function getResultatMultiplication2Nombres(nombre1, nombre2) {
    return nombre1 * nombre2;
}

// function qui appelle d'autres fct en fct de l'opération demandée
// et retourne le résultat recçu de la fct appelée
// note : l'instruction return met fin à l'exécution de la fct
function getResultatCalculEntre2Nombres(nombre1, operation, nombre2) {
    // en fct de opération demandée
    switch(operation) {
        // addition et soustraction (a-b = a+ -b)
        case "addition" :
            return getResultatAddition2Nombres(nombre1, nombre2);
        case  "soustraction" :
            return getResultatAddition2Nombres(nombre1, -nombre2);

        // multiplication et division (a/b = a * 1/b)
        case "multiplication" :
            return getResultatMultiplication2Nombres(nombre1, nombre2);
        case "division" :
            return getResultatMultiplication2Nombres(nombre1, 1 / nombre2);
        
        // opérations non gérées par la fonction
        default:
            console.log(`Opération "${operation}" non gérée`);
            return null;
    }
}


console.log(`7 + 2 = ${getResultatCalculEntre2Nombres(7, "addition"
, 2)}`);
console.log(`6 - 1 = ${getResultatCalculEntre2Nombres(6, "soustraction"
, 1)}`);
console.log(`3 * 4 = ${getResultatCalculEntre2Nombres(3, "multiplication"
, 4)}`);
console.log(`10 / 2 = ${getResultatCalculEntre2Nombres(10, "division"
, 2)}`);
console.log(`2 ** 3 = ${getResultatCalculEntre2Nombres(2, "puissance"
, 3)}`);


// // les tableaux : array // //

/*
permettent de stocker des données, de nimporte quL type, de façon 
grouP

pratiq qd les données ont un lien entre elles
*/

// tableaux indexés //

/*
regroupe des éléments = liste ordonnée (ordre est conserV)
chq élément à pour emplacement 1 index

la longueur (length) est le nbr d'éléments qu'il contient 

!! le premier élément a index 0
le dernier a index n-1

permet de rgrP des éléments et de boucler sur le tableau (boucle for svt)
et appliquer logique commune

extensible : peut contenr de 0 à n éléments
pratqi qd on ne sait pas à l'avance sr cmb d'léments 
on devra appliquer une logique

chaque élément ptê de n'importe quel type (nombres, des tableaux, 
des fonctions, etc...)

*/


// initialiser 1 tableau vide et l'affecter à une variable
const tableauVide = [];

// initialiser un tableau qui contient des valeurs fournies
const tabNums = [11, 22, 33, 44, 55, 66, 77];

// ajouter un élément à la fin du tableau (en dernier position)
tableauVide.push(2);
tableauVide.push(3);
tableauVide.push(7);

console.log("tableauVide = ", tableauVide);

// récupérer un élément par son index , son emplacement, qi commce par 0
console.log("tableauVide[1] = ", tableauVide[1]);

// modifier la valeur d'un élément à un certain index
tableauVide[2] = "abc";
console.log("tableauVide = ", tableauVide);

// boucler sur un tableau (de 0 à length-1)
for (let i = 0; i < tableauVide.length; i++) {
    // récupération de l'élément à index i
    const elementTableauVide = tableauVide[i];
    // log de cet élément
    console.log("tableauVide[" + i + "] = ", elementTableauVide);
}


// méthodes utiles pour la classe Array

/*
une méthode est une fct qui appartient à une classe
les tableaux sont de la classe Array

syntaxe : pour appler une méthode "uneMethode" sur un tableau indexé
"unTableau", on écrit :

unTableau.uneMethode()
*/

// ajouter un élément à un tableau
// .push(newElement)
tableauVide.push(20);

// transformer un tableau en string, en concaténant ts les éléments
// dans ordre et ajoutant le séparateur entre chaque élément
// .join(separateur)
// tabNums transformé en string avec "_|_" entre chq élément
console.log(`tabNums.join("_|_") = ${tabNums.join("_|_")}`);

// renvoyer true ou false si élément est présent ou non
// dans le tableau 
// .inludes(elementRecherche)
console.log(
    `L'élément ${77} ${tabNums.includes(77) ? "est" : "n'est pas"}
    présent dans le tableau [${tabNums.join(",")}]`
);
console.log(
    `L'élément ${42} ${tabNums.includes(42) ? "est" : "n'est pas"}
    présent dans le tableau [${tabNums.join(",")}]`
);

// renvoyer l'index de l'élément recherché
// entre 0 et length-1 si trouvé, -1 sinon 
// .indexOf(elementRecherche)
const indexOf77 = tabNums.indexOf(77);
if (indexOf77 != -1) {
    console.log(`L'élément ${77} est à l'index ${indexOf77} dans le
    tableau [${tabNums.join(",")}]`);
} else {
    console.log(`L'élément ${77} n'est pas présent dans le tableau
    [${tabNums.join(",")}]`);
}

// renvoyer une copie d'un morceau du tableau
// index du début est inclus mais index de fin est exclus
// .slice(indexDebutEltInclus, indexFinEltExclu)
const morceau = tabNums.slice(2, 4);
console.log(`morceau (tabNums.slice(2,4)) = [${morceau.join(",")}]`);


// tableaux associatifs //

/*
symbole est {}
!! varie selon langages

regroupe des éléments sous la forme de paire clé/valeur

comparaison dico : clés sont mots / valeurs sont définitions

prmet de regrouper des données de façon structurée, dans le but de 
"construire un objet" qu'on peut manipuler

chq valeur pê de n'importequL type (nbrs,tableaux, fontions)

*/

// initialisation d'un tableau associatif vide
let tabAssocVide = {};

// ajout paire clé/valeur
tabAssocVide.prenom = "Bryan";
tabAssocVide.age = 27;

console.log("tabAssocVide = ", tabAssocVide);

// accéder à une valeur
console.log(`Je m'appelle ${tabAssocVide.prenom}`);

// modification d'une valeur
tabAssocVide.age = 28;
console.log("tabAssocVide = ", tabAssocVide);

// initialisation d'un tableau associatif plus fourni
// affectation à la variable pikachu, stockant ses infos et ses attaques
let pikachu = {
    id: 25,             // number(entier)       : identifiant unique
    name: "Pikachu",    // string               : nom
    weightKg: 6.0,      // number(décimal)      : poids
    hpMax: 80,          // number(entier)       : points de vie max
    attacks : [          // Array(tableau indexé): liste des attaques
        {
            name: "Vive-Attaque", // string         : nom de l'attaque
            damages: 10,         // number(entier)  : puissce attaque
        },
        {
            name: "Boule Élek",
            damages: 20,
        }
    ]
};

console.log("pikachu = ", pikachu);


// creation d'une fonction 
function listerAttaquesPokemon(pokemon) {
    // affiche la phrase qui énone les attaques
    console.log(`${pokemon.name} possède ${pokemon.attacks.length} 
        attaques :`);

    // pour chaqu attaque dans le tableau indexé okemon.attacks
    for (let i =0; i < pokemon.attacks.length; i++) {
        //récupération du tableau associatif de l'attaque
        //le ieme élement
        const attaque = pokemon.attacks[i];
        // écriture d'une ligne d'attaque
        console.log(`\t"${attaque.name}" (puissance 
            ${attaque.damages})`);
    }
}

// appel de la fonction listerAttaquesPokemon en lui passant 
// pikachu comme argument / paramètre 
listerAttaquesPokemon(pikachu);