// VARIABLES
const clickHere = document.getElementById("cherry-click");
const fuerteDeclaracion = document.getElementById("fuerte-declaracion");

let date = new Date();
let day = date.getDay();
let dayString = "";
let dayNumber = date.getDate();
let monthNumber = date.getMonth();
let monthString = "";
let year = date.getFullYear();

// FUNCIONES

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

const mes = (monthNumber) => {
    let monthString = "";

    switch(monthNumber) {
        case 0:
            monthString = "Enero";
            break;

        case 1:
            monthString = "Febrero";
            break;

        case 2:
            monthString = "Marzo";
            break;

        case 3:
            monthString = "Abril";
            break;

        case 4:
            monthString = "Mayo";
            break;

        case 5:
            monthString = "Junio";
            break;

        case 6:
            monthString = "Julio";
            break;

        case 7:
            monthString = "Agosto";
            break;


        case 8:
            monthString = "Septiembre";
            break;

        case 9:
            monthString = "Octubre";
            break;

        case 10:
            monthString = "Noviembre";
            break;

        case 11:
            monthString = "Diciembre";
            break;
    }

    return monthString;
}

// LLAMADAS A FUNCIONES

dayString = diaSemana(day);

monthString = mes(monthNumber);

// EVENTOS

clickHere.addEventListener("click", () =>{
    return fuerteDeclaracion.innerHTML = `
    <div class="row">
        <div class="col-sm">
            <h2>Hooooooooooola Hoooooooooooola bueeeeeenossssss dddííííííííííííaaaaasssss</h2>
            <h3>¿Sabes? Quise hacer algo original para este ${dayString} de fuertes declaraciones; y bueno, pues realmente lo que te quiero decir es que precisamente el día de hoy ${dayString} TE ELIJO A TI 🍒.</h3>
            <h3>Estoy seguro que te ves bellísima, lo sé porque cada vez que te veo eres aún más bella y sensual y es que si me lo preguntas, el sencillo hecho de poder mirarte llegar, abrirte la puerta, darte la mano para que bajes de la camioneta y poder admirarte hace que me gustes aún más</h3>
            <h3 id="cherries">🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒</h3>
            <h3>Por cierto, esto puedes consultarlo el día que quieras no sólo aplica para los días Viernes, por lo que si lo checas cualquier otro día te darás cuenta que hoy ${dayString}, ${dayNumber} de ${monthString} del ${year} te sigo eligiendo.</h3>
            <h3>Y eso es sencillamente porque NO ES EL LUGAR ES LA PERSONA, y contigo NO ES EL LUGAR, ERES TÚ</h3>
            <br>
            <br>
            <br>
            <br>
            <p>PD: Este creo que es el detalle más ñoño y geek que puede existir 🤓🤓 pero como siempre es desde aquí --> ❤</p>
        </div>
    </div>`
});