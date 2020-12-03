// VARIABLES
const clickHere = document.getElementById("cherry-click");
const fuerteDeclaracion = document.getElementById("fuerte-declaracion");

let date = new Date();
let day = date.getDay();
let dayString = "";

console.log(day);

// FUNCIONES

const imprimeFuerteDeclaracion = () => {
    return fuerteDeclaracion.innerHTML = `
        <div class="row">
            <div class="col-sm">
                <h3>Hoooola Hooooola bueeeeeenossssss dddííííííííííííaaaaasssss</h3>
            </div>
        </div>`
}

const diaSemana = (day) => {
    let dayString = "";

    switch(day){
        case 0: 
            dayString = "Domingo";
            break;

        case 1: 
            dayString = "Lunes";
            break;

        case 2: 
            dayString = "Martes";
            break;

        case 3: 
            dayString = "Miércoles";
            break;

        case 4: 
            dayString = "Jueves";
            break;

        case 5: 
            dayString = "Viernes";
            break;

        case 6: 
            dayString = "Sábado";
            break;
        
        default:
            dayString = "el día de hoy"
    }

    return dayString;
}

// LLAMADAS A FUNCIONES

dayString = diaSemana(day);

// EVENTOS

clickHere.addEventListener("click", () =>{
    return fuerteDeclaracion.innerHTML = `
    <div class="row">
        <div class="col-sm">
            <h2>Hoooola Hooooola bueeeeeenossssss dddííííííííííííaaaaasssss</h2>
            <h3>¿Sabes? Quise hacer algo original para este ${dayString} de fuertes declaraciones; y bueno, pues realmente lo que te quiero decir es que precisamente el día de hoy ${dayString} TE ELIJO A TI.</h3>
            <h3>Estoy seguro que te ves bellísima, lo sé porque cada vez que te veo eres aún más bella y sensual y es que si me lo preguntas, el sencillo hecho de poder mirarte llegar, abrirte la puerta, darte la mano para que bajes de la camioneta y poder admirarte para mí es algo MUY ESPECIAL</h3>
        </div>
    </div>`
});