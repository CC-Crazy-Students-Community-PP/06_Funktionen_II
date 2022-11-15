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

/************************************************************************/
/*********                     Beispiel 01                     **********/
/************************************************************************/

    // application / app:
    starApp();
    function starApp() {
        let num11,num12,op;
        isNotAborted1 = true;
    
        if (isNotAborted1){ num11 = getNumber1( "first" ); }
        if (isNotAborted1){ num12 = getNumber1( "second" ); }
        if (isNotAborted1){ op = getOp1(); }
        
        if (isNotAborted1){
            output1( calculate1( num11, num12, op ) ); 
        } else{
            output1("Aborted by user!");
        }
    }
    // module: number input:
    function getNumber1( figure ) {
        const displayStr1 = "Please insert " + figure + " number: ";
        let ipnutStr1 = prompt( displayStr1 ) 
        let num1 = Number( ipnutStr1 );

        // if num is NOT a number AND user DIDN'T click at Abbrechen
        while ( isNaN( num1 ) && ( ipnutStr1 !== null ) ) {
            ipnutStr1 =  prompt( displayStr1 );
            num1 = parseInt( ipnutStr1 ); 
        }
        
        // if this is aborted, ALL gets aborted ...
        if( ipnutStr1 == null ){ isNotAborted1 = false; }
        return num1;
    
        return num1;
    }
    // output1( getOp1() )
    // module: operator input:
    function getOp1() { 
        const opStr1 = "Please insert correct operator [ + | - | * | : | / ]:";
        let op1 = prompt( opStr1 );

         // if op is NOT valid AND user DIDN'T click at abort
        while (isNotValidOp(op) && (op !== null)) {
            op1 = prompt(displayStr);
        }
    
        if (op1 == null){isNotAborted = false;}
        return op1;
    }
    // module: check if operator input is valid:
    function isValidOp( op1 ) {
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

/************************************************************************/
/*********                     Beispiel 02                     **********/
/************************************************************************/
    // module: declarations
    // const userInput2 = "40 mal 5";
    // const userInput2 = prompt( "Gib eine Rechnung ein:\nBeispiele:\n[ 2*3 ], [ 7 mal 8 ], [ 9 / 5 ] " );
    const addOp2 = [ "+", "add", " add ", "plus", " plus " ];
    const subOp2 = [ "-", "minus", " minus ", "subtract", " subtract " ];
    const mulOp2 = [ "*", "mal", " mal ", "multiply", " multiply " ];
    const divOp2 = [ "/", ":", "geteilt", " geteilt ", "geteilt durch", " geteilt durch ", "divide", " divide ", "divide by", " divide by " ];
    const opArr2 = [ ...addOp2, ...subOp2, ...mulOp2, ...divOp2 ];
    // module: start app
    // calculate2( userInput2 );
    // module: output
    // output2( "Test" );
    function output2( o2 ){ console.log( o2 ); }
    // module: calculate
    // output2( calculate2( "4+5" ) );
    function calculate2( userInput2 ) {
        let calcVal = checkOp2( userInput2 );
        if ( calcVal.calcOpName == "Division" && calcVal.numberTwo == 0 ) {
            output2( "Division by 0 not possible!" );
        } else {
            if ( calcVal === false ){
                output2( "Not the correct operator used" );
                output2( "No Result" );
            } else {
                output2( calcVal.calcOpName + ": " + calcVal.numberOne + " " + calcVal.calcOperator + " " + calcVal.numberTwo );
                output2( "Result: " + ( calcVal.opFunc(calcVal.numberOne, calcVal.numberTwo) ) );
            }
        }
    }
    // module: check the operator
    // output2( checkOp2( "4+5" ) );
    function checkOp2( userInput2 ) {
        let resOp = false;
        opArr2.forEach( op2 => {
            if ( userInput2.indexOf( op2 ) > -1 ) {
                let calcOperator, calcOpName, opFunc;
                let inputSplit = userInput2.split( op2 );
                let numberOne = Number( inputSplit[ 0 ].replace( ",", "." ) );
                let numberTwo = Number( inputSplit[ 1 ].replace( ",", "." ) );
                if ( op2 == "+" || op2 == "add" || op2 == " add " || op2 == "plus" || op2 == " plus " ) {
                    calcOperator = "+";
                    calcOpName = "Addition";
                    opFunc = function( a, b ){ return a+b }
                } else if ( op2 == "-" || op2 == "minus" || op2 == " minus " || op2 == "subtract" || op2 == " subtract " ) {
                    calcOperator = "-";
                    calcOpName = "Subtraction";
                    opFunc = function( a, b ){ return a-b }
                } else if ( op2 == "*" || op2 == "mal" || op2 == " mal " || op2 == "multiply" || op2 == " multiply " ) {
                    calcOperator = "*";
                    calcOpName = "Multiplication";
                    opFunc = function( a, b ){ return a*b }
                } else if ( op2 == "/" || op2 == ":" || op2 == "geteilt" || op2 == " geteilt " || op2 == "geteilt durch" || op2 == " geteilt durch " || op2 == "divide" || op2 == " divide " || op2 == "divide by" || op2 == " divide by " ) {
                    calcOperator = ":";
                    calcOpName = "Division";
                    opFunc = function( a, b ){ return a/b }
                } else {
                    calcOperator = false;
                    calcOpName = false;
                    opFunc = false;
                }  
                resOp = { calcOperator, numberOne, numberTwo, calcOpName, opFunc };
            }
        });
        return resOp;
    }

/************************************************************************/
/*********                     Beispiel 03                     **********/
/************************************************************************/
    // module: calculator:
    // agreement: +, -, *, /, :
    // console.log( calculate1( 2, 2, "+" ) );
    // console.log( calculate1( 2, 2, "-" ) );
    // console.log( calculate1( 2, 2, "*" ) );
    // console.log( calculate1( 2, 2, "/" ) );
    // console.log( calculate1( 2, 2, ":" ) );
    // console.log( calculate1( 2, 2, "%" ) );
    // console.log( calculate1( 2, 2, "!" ) );
    function calculate1( a3, b3, op3 ) {
        switch ( op3 ) {
            case "+":                   // addition 
                return a3 + b3;
            case "-":                   // subtraction
                return a3 - b3;
            case "*":                   // mutliplication
                return a3 * b3;
            case "/":                   // division1
            case ":":                   // division2
                return ( b3 == 0 ) ? "Division by 0 not possible!" : a3 / b3;
            default:                    // default
                return "Error: wrong operator used";
        }
    }
