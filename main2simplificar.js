let Frontend = 0;
let Backend = 0;
let Mobile = 0;
let Data = 0;

let nombre = prompt("Cual es tu nombre...");

alert(`Hola ${nombre}, responde las siguientes preguntas`);

let pregOpciones = [
    {
        texto: "Cuantos caramelos tengo",
        Frontend :  "Tengo ocho",
        Backend :  "Tengo siete",
        Mobile :  "Tengo cuatro",
        Data :  "Tengo nueve",
    },
    {
        texto: "Cuantos caramelos tengo",
        Frontend :  "Tengo ocho",
        Backend :   "Tengo siete",
        Mobile :  "Tengo cuatro",
        Data :  "Tengo nueve",
    },
    {
        texto: "Cuantos caramelos tengo",
        Frontend :  "Tengo ocho",
        Backend :   "Tengo siete",
        Mobile :  "Tengo cuatro",
        Data :  "Tengo nueve",
    },
    {
        texto: "Cuantos caramelos tengo",
        Frontend :  "Tengo ocho",
        Backend :   "Tengo siete",
        Mobile :  "Tengo cuatro",
        Data :  "Tengo nueve",
    }
];
for(let i = 0; i < pregOpciones.length; i++){
    let res = prompt (pregOpciones[i].texto +'\n 1-'+ pregOpciones[i].Frontend +'\n 2-'+ pregOpciones[i].Backend +'\n 3-'+ pregOpciones[i].Mobile +'\n 4-'+ pregOpciones[i].Data );
if (res == 1){
    Frontend++;
} else if(res == 2){
    Backend++;
} else if(res == 3){
    Mobile++;
} else if(res == 4){
    Data++;
} else {
    alert(`Esa opción no existe!`);
} 
};
if (Mobile > Data && Mobile > Frontend && Mobile > Backend){
    alert(`${nombre} perteneces a la casa de los Mobile!!`);
} else if(Data > Frontend && Data > Backend && Data > Mobile){
    alert(`${nombre} perteneces a la casa de los Data!!`);
} else if(Frontend > Data && Frontend > Backend && Frontend > Mobile){
    alert(`${Frontend} perteneces a la casa de los Frontend!!`);  
} else if (Backend > Mobile && Backend > Data && Backend > Frontend){
    alert(`${nombre} perteneces a la casa de los Backend!!`);
};


console.log(`Bien hecho! ${nombre} perteneces a la casa con mas puntos de las siguientes: \n Frontend:${Frontend} puntos! \n Backend:${Backend} puntos! \n Mobile:${Mobile} puntos! \n Data:${Data} puntos!`);
