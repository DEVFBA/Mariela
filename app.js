// VARIABLES
const clickHere                         = document.getElementById("cherry-click");
const clickDiciembre2020                = document.getElementById("recuerdo-diciembre2020");
const fuerteDeclaracion                 = document.getElementById("fuerte-declaracion");
const buttonDec11                       = document.getElementById("viernes11Diciembre");
const subtitulo                         = document.getElementById("subtitulo");
const buttonDec18                       = document.getElementById("viernes18Diciembre");
const buttonDec25                       = document.getElementById("viernes25Diciembre");
const buttonJan01                       = document.getElementById("viernes01Enero");
const buttonSonrisa                     = document.getElementById("laMejorSonrisa");

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

buttonDec18.addEventListener("click", () => {
    return fuerteDeclaracion.innerHTML = `
        <div class="row">
            <div class="col-sm">
                <h2>Hooooooooooola Hoooooooooooola ${saludo}</h2>
                <h3>En este Viernes de Fuertes Declaraciones sólo quiero decirte que en verdad mientras más pasa el tiempo más me doy cuenta de lo mucho que te deseo</h3>
                <h3>Y es esa clase deseo que suma tanto lo físico como lo del alma; y es que en verdad mirarte, pensarte me hace fantasear tantas cosas contigo. Eres sencillamente una mujer cuya sensualidad va más allá del hermoso cuerpo que tienes, te pienso y sólo quiero perderme en tu piel pero también en tu corazón, poder mirarte a los ojos mientras te hago el amor y que sean mis ojos y mis labios quienes te demuestren a cada segundo lo que siento por ti.</h3>
                <h3>Precisamente, porque el deseo que siento por ti va más allá de lo físico, es que deseo que seas muy feliz; y si eso significa que deba dejer que navegues y esperar para que me cuentes lo que hayas encontrado lo haré.</h3>
                <br>
                <h3>De nueva cuenta hay una canción para este viernes que describe tal cual lo que quiero decir porque aún una parte de mi no se ha rendido y es que no dejo de pensar que lo vales, y sencillamente hoy TE SIGO ELIGIENDO A TI MARIELA</h3>
                <br>
                <br>
                <h3>"I don't wanna be someone who walks away so easily</h3>
                <h3>I'm here to stay and make the difference that I can make</h3>
                <h3>Our differences they do a lot to teach us how to use</h3>
                <h3>The tools and gifts we got, yeah, we got a lot at stake</h3>
                <h3>And in the end, you're still my friend at least we did intend</h3>
                <h3>For us to work we didn't break, we didn't burn</h3>
                <h3>We had to learn how to bend without the world caving in</h3>
                <h3>I had to learn what I've got, and what I'm not</h3>
                <h3>And who I am<h3>
                <br>
                <h3>I won't give up on us</h3>
                <h3>Even if the skies get rough</h3>
                <h3>I'm giving you all my love</h3>
                <h3>I'm still looking up, I'm still looking up" 🎶🎵</h3>
                <br>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/O1-4u9W-bns" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>`
});

buttonDec25.addEventListener("click", () => {
    let thisDate                         = new Date();
    let thisHour                         = thisDate.getHours();
    let thisMinute                       = thisDate.getMinutes();
    let thisMinuteLength                 = thisMinute.toString().length;

    return fuerteDeclaracion.innerHTML = `
        <div class="row">
            <div class="col-sm">
                <h2>Hooooooooooola Hoooooooooooola ${saludo}</h2>
                <h3>En este Viernes de Fuertes Declaraciones Navideño; además obviamente de desearte Feliz Navidad quiero aprovechar para dar gracias a Dios por permitirme conocerte una Navidad más, no sé que vaya a pasar pero creeme que estoy muy agradecido y el mejor regalo de Navidad que puedo tener sencillamente es conocerte.</h3>
                <br>
                <h3>Así que sencillamente Feliz Navidad, mis mejores deseos.</h3>
                <br>
                <h3>Hoy, siendo las ${thisHour}:${addZeroToMinute(thisMinute, thisMinuteLength)} del ${dayString}, ${dayNumber} de ${monthString} del ${year} te sigo eligiendo.</h3>
            </div>
        </div>`
});

buttonJan01.addEventListener("click", () => {
    let thisDate                         = new Date();
    let thisHour                         = thisDate.getHours();
    let thisMinute                       = thisDate.getMinutes();
    let thisMinuteLength                 = thisMinute.toString().length;

    return fuerteDeclaracion.innerHTML = `
        <div class="row">
            <div class="col-sm">
                <h2>Hooooooooooola Hoooooooooooola ${saludo}</h2>
                <h3>Inicio de Año Nuevo y en Viernes, coincidencias de la vida jeje.</h3>
                <h3>Haya una Fuerte Declaración en este Viernes tan especial, y tan único y es mi primer propósito del año 2021. El año pasado tuve un propósito que fue que tú y y estemos bien sea juntos o no; y espero haberlo logrado, por lo menos así lo creo y fue por ello mi decisión de dejar de intentar.... Sabes? de verdad tengo miedo de estropearlo por seguir buscando el final perfecto a todo esto y si te soy honesto lo qye más deseo es que esto se vuelva sencillamente un bonito recuerdo.</h3>
                <h3>Lo que me lleva a mi primer propósito de este año Mariela, y que siendo Viernes podría volverse una fuerte declaración....</h3>
                <h3>Mi propósito es...... QUE SEAS FELIZ MARIELA, y no me importa lo que cueste en verdad deseo que seas feliz, porque en serio lo mereces. Dios, en ti me dió un regalo de verdad único y quizá en su ironía su plan siempre fue que seas solo un viaje en mi vida; un viaje que por cierto volvería a realizar si la vida me lo permitiera, porque fue un viaje en serio hermoso.</h3>
                <h3>Y hablo de ironías porque sabes bien que todo indicaba que no había razón para conocernos; más sin embargo, fue así, nos cruzamos por alguna razón. Si es cierto que tú pedías paz y llegue yo, y que yo no me quería volver a enamorar y apareciste en mi puerta; creo entonces que ha sido el juego más irónico que Dios ha jugado conmigo. Sé que en algún momento encontraré la razón por la cual todo sencillamente fue así, por la cual me la quise jugar aún sabiendo el riesgo. Y es que vales cada uno de los riesgos que tomé, vales incluso este sentimiento que no sé cómo describir más que quizá una mezcla entre decepción y alegría.</h3>
                <h3>Decepción, porque mi ego no termina de entender qué me faltó para poder hacerte sentir algo por mí, qué fue lo que me faltó para poder ganarme tu mejor versión.</h3>
                <h3>Y alegría porque aunque hoy sé cual fué el resultado de jugármela, al menos no me quedé con la duda; y estoy agradecido contigo completamente por haber hecho el esfuerzo de darme la oportunidad de conquistarte. No pude, perdí, pero en verdad dejé el corazón en cada detalle y mensaje que te hice, en cada beso que pude darte, en cada caricia y las pocas veces que pudimos hacer el amor.</h3>
                <h3>Por eso es que mi propósito es que seas feliz y sé que incluso ya lo eres, por eso sé que te aguarda una felicidad mayor en la vida. Una que ni te imaginas, y es que estoy seguro que allá afuera existe ese alguien que te motivará a ser tu mejor versión, y es que no habrá nadie que te ame como yo, sino que te amará aún más y que te demostrará cada día de tu vida que eres ÚNICA.</h3>
                <h3>Mariela (Cereza 🍒) TE AMO y por eso lo que sea que vaya a suceder, o que ya haya sucedido si es que esto lo llegas a leer después, lo entiendas. Alguién un día me dijo que la mayor prueba de amor que puedes hacer a una persona, irónicamente, es una muy dolorosa pero es la más auténtica porque involucra no solo el amor que le tienes a un tercero sino el amor propio.</h3>
                <h3>Los nueve deseos que te hice el año pasado fueron de corazón y sé que llegarán cargados de bendiciones, y nunca va a faltar el día que te envíe porras, buenas vibras y tal vez en algún momento tan solo un susurro a tu oído desde donde este diciéndote "Hoy será el mejor día de tu vida"</h3>
                <h3>Así que...... sencillamente SE FELIZ y que cada Año Nuevo en tu vida sea mucho mejor que el anterior.</h3>
                <br>
                <br>
                <h3>Hoy, siendo las 00:00 del Viernes, 01 de Enero del 2021 te sigo eligiendo y porque te elijo Mariela es que decido sencillamente....... permitir que seas aún más FELIZ.</h3>
            </div>
        </div>`
});

buttonSonrisa.addEventListener("click", () => {
    let thisDate                         = new Date();
    let thisHour                         = thisDate.getHours();
    let thisMinute                       = thisDate.getMinutes();
    let thisMinuteLength                 = thisMinute.toString().length;

    return fuerteDeclaracion.innerHTML = `
        <div class="row">
            <div class="col-sm">
                <img class="img-fluid" src="./La_Mejor_Sonrisa.jpg"></img>
            </div>
        </div>`
});