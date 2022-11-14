"use strict";
/***********************************************************************/
/*********                    Funktionen 02                   **********/
/***********************************************************************/

/********* Rechner **********/
/*
    0. a+b / a-b/ a*b / a/b  // ergebnis c 
    1. Dateneingabe + -überprüfung :
    2. Auswahl Rechenart : 
    3. Fkt. Grundrechenarten :
    4. Ausgabe in Konsole :
*/

/***********************************************************************/
/*********                     Beispiel 01                    **********/
/***********************************************************************/
function calculate( a, b, t ) {
    let a = Number( prompt( "Gib Deine Rechnung ein (5/2" ); );
    if ( t == "+" ) { 
        let c = "Das Ergebnis von " + a + " + " + b + " = " + (a + b); 
    } else if ( t == "-" ) { 
        let c = "Das Ergebnis von " + a + " - " + b + " = " + (a - b); 
    } else if ( t == ":" || t == "/" ) { 
        let c = "Das Ergebnis von " + a + " / " + b + " = " + (a / b); 
    } else if ( t == "*" ) { 
        let c = "Das Ergebnis von " + a + " * " + b + " = " + (a * b); 
    } else { 
        let c = "Du musst schon eine Mathematische Funktion eingeben\nzB: +, -, /, *";
    }
    console.log( c )
}