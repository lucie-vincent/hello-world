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


//opérateurs d'affectation spéciaux : 

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

// opérateur de concaténation 

/*
sert à fusionner
 + si suivi de type string 
 += fonctionne pour concaténation
*/

const prenom = "John";
const nom = "Smith";
const nomComplet = prenom + " " + nom;
console.log("Je m'appelle " + nomComplet);

// interpolation 

/*
sert à incruster
 string entre `` 
 valeurs entre ${}
 += fonctionne pour concaténation
*/

console.log(`Je m'appelle ${prenom} ${nom}, 
soyez bienvenu`);


//opérateurs d'égalité et d'inégalité : 

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



//opérateurs de comparaison : 

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


//opérateurs de logiques : 

/* 

sert à lier plusieurs conditions
pour savoir si l'ensemble est true ou false

&& : et logique; si les 2 conditions sont vraies

|| : ou logique : si au moins 1 est vraie

! : non logique : inverse une condition

*/

// cas simples : 2 conditions liées

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


//  opérateur ternaire 

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


// blocs de condition

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
// si la condition du if est false, le programme entre dans le bloc du else
// le else n'a pas de condition