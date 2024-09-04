let Frontend = 0;
let Backend = 0;
let Mobile = 0;
let Data = 0;

let nombre = prompt("Cual es tu nombre...");

alert(`Hola ${nombre}, responde las siguientes preguntas`);

let pregunta1 = prompt ("Cuantos caramelos tengo?\n 1-Tengo ocho \n 2-Tengo siete \n 3-Tengo cuatro \n 4-Tengo nueve");
    if (pregunta1 == 1){
        Frontend += 1;
        alert("Punto para Frontend!");
    } else if(pregunta1 == 2){
        Backend += 1;
        alert("Punto para Backend!!");
    } else if(pregunta1 == 3){
        Mobile += 1;
        alert("Punto para Mobile!!");
    } else if(pregunta1 == 4){
        Data += 1;
        alert("Punto para Data!!");  
    } else{
        alert('Tu opcion no es valida')
    };
let pregunta2 = prompt ("Que dia es hoy?\n 1-Jueves \n 2-Lunes \n 3-Domingo \n 4-Martes");
    if (pregunta2 == 1){
        Frontend += 1;
        alert("Punto para Frontend!");
    } else if(pregunta2 == 2){
        Backend += 1;
        alert("Punto para Backend!!");
    } else if(pregunta2 == 3){
        Mobile += 1;
        alert("Punto para Mobile!!");
    } else if(pregunta2 == 4){
        Data += 1;
        alert("Punto para Data!!");  
    };
    if (Mobile > Data || Mobile > Frontend || Mobile > Backend){
        alert(`${nombre} perteneces a la casa de los Mobile!!`);
    } else if(Data > Frontend || Data > Backend || Data > Mobile){
        alert(`${nombre} perteneces a la casa de los Data!!`);
    } else if(Frontend > Data || Frontend > Backend || Frontend > Mobile){
        alert(`${Frontend} perteneces a la casa de los Frontend!!`);  
    } else if (Backend > Mobile || Backend > Data || Backend > Frontend){
        alert(`${nombre} perteneces a la casa de los Backend!!`);
    } else {
        alert('Esa opción no existe GAME OVER!')
    }
    console.log(`Bien hecho! ${nombre} perteneces a la casa con mas puntos de las siguientes: \n Frontend:${Frontend} puntos! \n Backend:${Backend} puntos! \n Mobile:${Mobile} puntos! \n Data:${Data} puntos!`);


    