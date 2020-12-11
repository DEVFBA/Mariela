// VARIABLES
const clickHere                         = document.getElementById("cherry-click");
const clickDiciembre2020                = document.getElementById("recuerdo-diciembre2020");
const fuerteDeclaracion                 = document.getElementById("fuerte-declaracion");
const buttonDec11                       = document.getElementById("viernes11Diciembre");
const subtitulo                         = document.getElementById("subtitulo");

let date                                = new Date();
let day                                 = date.getDay();
let dayString                           = "";
let dayNumber                           = date.getDate();
let monthNumber                         = date.getMonth();
let monthString                         = "";
let year                                = date.getFullYear();
let hour                                = date.getHours();
let minute                              = date.getMinutes();
let minuteLength                        = minute.toString().length;
let saludo                              = "";

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

        default:
            monthString = "de este mes"
    }

    return monthString;
}

const addZeroToMinute = (minute, minuteLength) => {
    let minuteString = "";

    if(minuteLength === 1){
        minuteString = "0" + minute;
    } else{
        minuteString = minute;
    }

    return minuteString;
}

const defineSaludo = (hour) => {
    let saludoString = "";

    if(hour < 12){
        saludoString = "bueeeeeenossssss dddííííííííííííaaaaasssss"
    } else if(hour < 19){
        saludoString = "bueeeeeenassssss taaaaaaaaaaaaarrrdessssss"
    } else {
        saludoString = "bueeeeeenassssss nooooooooccccheeeeeeeeees"
    }

    return saludoString;
}

const escribeSubtitulo = (dayName, day, month, year) => {
    return subtitulo.innerHTML = `
        Porque hoy ${dayName}, ${day} de ${month} del ${year} te elijo 🍒`
}

// LLAMADAS A FUNCIONES

saludo = defineSaludo(hour);

dayString = diaSemana(day);

monthString = mes(monthNumber);

escribeSubtitulo(dayString, dayNumber, monthString, year);

// EVENTOS

clickHere.addEventListener("click", () => {
    let thisDate                         = new Date();
    let thisHour                         = thisDate.getHours();
    let thisMinute                       = thisDate.getMinutes();
    let thisMinuteLength                 = thisMinute.toString().length;

    return fuerteDeclaracion.innerHTML = `
        <div class="row">
            <div class="col-sm">
                <h2>Hooooooooooola Hoooooooooooola ${saludo}</h2>
                <h3>¿Sabes? Quise hacer algo original para este Viernes (4 de Diciembre) de fuertes declaraciones; y bueno, pues realmente lo que te quiero decir es que precisamente el día de hoy TE ELIJO A TI 🍒.</h3>
                <h3>Aunque ya no es Viernes 4 de Diciembre sigo estando seguro que te ves bellísima, sencillamente lo sé porque cuando te vuelva a ver me gustarás aún más.</h3>
                <h3 id="cherries">🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒</h3>
                <h3>Por cierto, esto puedes consultarlo el día que quieras no sólo aplica para los días Viernes, por lo que si lo checas cualquier otro día te darás cuenta que hoy, siendo las ${thisHour}:${addZeroToMinute(thisMinute, thisMinuteLength)} del ${dayString}, ${dayNumber} de ${monthString} del ${year} te sigo eligiendo.</h3>
                <h3>Y eso es sencillamente porque NO ES EL LUGAR ES LA PERSONA, y contigo NO ES EL LUGAR, ERES TÚ</h3>
                <br>
                <p>PD: Este creo que es el detalle más ñoño y geek que puede existir 🤓🤓 pero como siempre es desde aquí --> ❤</p>
                <img id="image-viernes" src="./Te_elijo_Mariela.png">
            </div>
        </div>`
});

clickDiciembre2020.addEventListener("click", () => {
    return fuerteDeclaracion.innerHTML = `
        <div class="row">
            <div class="col-sm">
                <h2>Hooooooooooola Hoooooooooooola ${saludo}</h2>
                <h3>Debes saber que siempre estoy orgulloso de ti y eso jamás nadie lo podrá cambiar</h3>
                <h3>Muchas felicidades por tu año más de logros y por todos aquellos venideros que seguro estarán llenos de éxitos y muchas muchas alegrías. Te mereces lo mejor, así que lucha por lo mejor. Y para que nunca lo olvides te dejo un bonito recuerdo!!! 😌😌😌</h3>
                <br>
                <br>
                <h3>06/12/20 🍒🍒🍒</h3>
                <img id="image-5anios" src="./festejo_5_anios.jpg">
            </div>
        </div>`
});

buttonDec11.addEventListener("click", () => {
    return fuerteDeclaracion.innerHTML = `
        <div class="row">
            <div class="col-sm">
                <h2>Hooooooooooola Hoooooooooooola ${saludo}</h2>
                <h3>No quiero dejar pasar este Viernes de Fuertes Declaraciones</h3>
                <h3>Que haya decidido dejarlo de intentar no quiere decir que haya dejado de sentir algo por ti y que me muera por escribirte. Hay una canción que dice:</h3>
                <h3>"I know you think that I shouldn't still love you,</h3>
                <h3>Or tell you that.</h3>
                <h3>But if I didn't say it, while I'd still have felt it</h3>
                <h3>Where's the sense on that?"</h3>
                <br>
                <h3>Y si lo piensas, hay mucha razón en esa canción. Qué sentido tiene sentir algo que no puedes decir?</h3>
                <br>
                <h3>Recuerdas que me dijiste que hay canciones que dicen justamente lo que quieres decir o lo que sientes? Bueno esta canción llegó a mí esta semana y hace tiempo no la escuchaba y la verdad no pude evitar pensarte.</h3>
                <br>
                <h3>No haré más largo y sencillamente diré, en este viernes de fuertes declaraciones:</h3>
                <br>
                <h3>"...I'm in love and always will be" 🎶🎵</h3>
                <br>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/j-fWDrZSiZs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>`
});
