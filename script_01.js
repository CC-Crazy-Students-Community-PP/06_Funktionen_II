"use strict";
/***********************************************************************/
/*********                    Funktionen 02                   **********/
/***********************************************************************/

/********* Rechner **********/
/*
    0. a+b / a-b/ a*b / a/b  // ergebnis c 
    1. Dateneingabe + -überprüfung :
    2. Auswahl Rechenart :  check!
    3. Fkt. Grundrechenarten : check!
    4. Ausgabe in Konsole : check!
*/

/***********************************************************************/
/*********                     Beispiel 01                    **********/
/***********************************************************************/

    // application / app:
    // starApp();
    function starApp() {
        output1( calculate1( getNumber1("first"), getNumber1("second"), getOp1() ) );
    }
    // module: number input:
    function getNumber1( figure ) {
        let ipnutStr = prompt( "Please insert " + figure + " number: " );
        let num = Number( ipnutStr );
        return num;
    }
    // output1( getOp1() )
    // module: operator input:
    function getOp1() { 
        let op1 = prompt( "Please insert correct operator: " );
        //ist op1 gültig? true or false
        if ( isValidOp(op1) ) {
            return op1;
        } else {
            getOp1();
        }
    }
    // module: check if operator input is valid:
    function isValidOp(op1) {
        return op1 == "+" || op1 == "-" || op1 == "*" || op1 == "/" || op1 == ":";
    }

    // module: calculator:
    // agreement: +, -, *, /, :
    // output1( calculate1( 2, 2, "+" ) );
    // output1( calculate1( 2, 2, "-" ) );
    // output1( calculate1( 2, 2, "*" ) );
    // output1( calculate1( 2, 2, "/" ) );
    // output1( calculate1( 2, 2, ":" ) );
    // output1( calculate1( 2, 2, """ ) );
    // output1( calculate1( 2, 2, "!" ) );
    function calculate1( a1, b1, op1 ) {
        switch ( op1 ) {
            case "+":                   // addition
                return add1( a1, b1 );
            case "-":                   // subtraction
                return sub1( a1, b1 );
            case "*":                   // mutliplication
                return mul1( a1, b1 );
            case "/":                   // division1
            case ":":                   // division2
                return div1( a1, b1 );
            default:                    // default
                return "Error: insert wrong";
        }
    }
    // module: console output:
    // output1( "Test" );                  // test
    // output1( 2 );                       // test
    function output1( outputData1 ){ 
        if ( typeof outputData1 == "number" ) {
            console.log( "The result is: " + outputData1 );
        } else {
            console.log( "ERROR: " + outputData1 );
        }
    }
    // module: addition:
    // output1( add1(2,5) );                                           // test
    function add1( a1, b1 ) { 
        let c1 = a1 + b1;                                           // lange ausführliche Schreibweise
        return c1;                                                  // Ausleitung der Variable
    }
    // module: subtraction:
    // output1( sub1(5,2) );                                           // test
    function sub1( a1, b1 ) {
        return a1 - b1;                                             // schnelle Schreibweise und direkte Ausleitung
    }
    // module: division:
    // output1( div1(8,2) );                                           // test
    function div1( a1, b1 ) { 
        if ( b1 == 0 ) { return "Division by 0 not possible!"; }
        return a1 / b1; 
    }
    // module: multiplication:
    // output1( mul1(2,2) );                                           // test
    function mul1( a1, b1 ) { return a1 * b1; }                     // alles als Einzeiler

/***********************************************************************/
/*********                     Beispiel 02                    **********/
/***********************************************************************/
    let userInput2 = prompt( "Gib Deine Rechnung ein (5/2, 5*2): " );
    getInput2( userInput2 );

    function output2( outputData2 ){ console.log( outputData2 ) }

    // function calculate2(a2, b2, o2) {
    //     switch (o2) {
    //         case "+":               // addition
    //         case "plus":            // addition
    //             output2( "Addition von " + a2 + "+" + b2 + " ergibt: " + ( Number( a2 ) + Number( b2 ) ) );
    //             break;
    //         case "-":               // subtraction
    //         case "minus":           // subtraction
    //             output2( "Subtraktion von " + a2 + "-" + b2 + " ergibt: " + ( Number( a2 ) - Number( b2 ) ) );
    //             break;
    //         case "*":               // mutliplication
    //         case "mal":             // mutliplication
    //             output2( "Multiplikation von " + a2 + "*" + b2 + " ergibt: " + ( Number( a2 ) * Number( b2 ) ) );
    //             break;
    //         case "/":               // division1
    //         case ":":               // division2
    //         case "geteilt":         // division2
    //         case "geteilt durch":   // division2
    //             output2( "Division von " + a2 + "/" + b2 + " ergibt: " + ( Number( a2 ) / Number( b2 ) ) );
    //             break;
    //         default:                // default
    //             output2( "Eingabefehler!!\nEingabeschema:\n5*2 oder 6+5 oder 8/2" );
    //             break;
    //     }
    // }
    // function getInput2( userInput2 ) {
    //     switch ( userInput2.indexOf() ) {
    //         case "+":
    //             console.log( "Index gefunden" );
    //             break;
    //         default:
    //             console.log( "Kein Index gefunden" )
    //             break;
    //     }

        // if ( userInput2.indexOf( "+" ) != -1 ) {
        //     let addArray2 = userInput2.split( "+" );

        //     calculate2( uaddArray2[0], addArray2[1], plus2 );
        // } else if ( userInputArray2.indexOf( minus2 ) != -1)  {
        //     calculate2( userInputArray2.split( minus2 )[0], userInputArray2.split( minus2 )[1], minus2 );
        // } else if ( userInputArray2.indexOf( divide21 ) != -1)  {
        //     calculate2( userInputArray2.split( divide21 )[0], userInputArray2.split( divide21 )[1], divide21 );
        // } else if ( userInputArray2.indexOf( divide22 ) != -1)  {
        //     calculate2( userInputArray2.split( divide22 )[0], userInputArray2.split( divide22 )[1], divide22 );
        // } else if ( userInputArray2.indexOf( multiply2 ) != -1)  {
        //     calculate2( userInputArray2.split( multiply2 )[0], userInputArray2.split( multiply2 )[1], multiply2 );
        // } else {
        //     calculate2 ( false, false, false );
        // }
   // }

    function calculate2( userInputArray2, opElement2 ) {
        output2( "Output: " +  userInputArray2 + ", " + opElement2 );
        switch (opElement2) {
            case "+":
            case " plus ":
            case " add ":
                const userOp = "+";
                break;
            default:
                const userOp = false;
                break;
        }
        const userFirstNum2 = userInputArray2[ 0 ], userLastNum2 = userInputArray2[ 1 ];

    }
    function getInput2( userInput2 ) {
        let opArray2 = [ "+", "-", "*", "/", ":" ];
        opArray2.forEach( opElement2 => {
            if ( userInput2.indexOf( opElement2 ) != -1 ) {
                const userInputArray2 = userInput2.split( opElement2 );
                calculate2( userInputArray2, opElement2 );
            }
        });
    }

