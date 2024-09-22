/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltÃ  puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non Ã¨ stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/


/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*  I principali datatype che  troviamo in Javascript sono:
stringa: è una sequenza di caratteri delimitata dagli apici ("" ; '') 
numeri: è qualsiasi numero compreso tra e -(253-1) e +(253-1)
Array: è una lista di dati.
oggetti: sono raccolte di coppie chiave-valore ad esempio ("nome":"alessio","età" "21"...) 
Booleani: si usano abbinati ad "if" e "else" si usano per verifiche e controlli e si definiscono in ture o false. 
null: una variabile con valore nulle cioè che il valore che gli è stato attibuito è vuoto
undefined : ancora nessuno ha specificato cosa ci va dentro la variabile*/



/* ESERCIZIO 2
 Descrivi cos'Ã¨ un oggetto in JavaScript, con parole tue.*/

/*  l'oggetto puo contenere al suo interno una quantità indefinita di dati caratterizzati dal rapporto chiave e valore  */



/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let numerouno = 12 
let numerodue = 20
let somma = numerouno + numerodue 
console.log (somma)



/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12



/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Alessio"



/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let numero4 = 4
somma2 = x - numero4
console.log (somma2)



/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: Ã¨ la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "john"
let name2 = "John"
console.log (name1 == name2)
console.log ( name1 == name2.toLowerCase())