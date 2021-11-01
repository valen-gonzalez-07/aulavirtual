const quizQuestions = document.getElementById("quiz-questions-container");
const quiz = document.getElementById("cuestionario");
const data = document.getElementById("curso");
const boton = document.getElementById("quiz-btn");
const resultado = document.getElementById("quiz-result");

const ejercicios = [
    {
        pregunta: "1. ¿Qué sucederá al cliquear un enlace que tiene target='_self'?",
        respuestas: {
            a: "No se abre el enlace",
            b: "Se abre el enlace en otra ventana",
            c: "Se abre el enlace en la misma ventana"
        },
        respuestaCorrecta: "c"
    },
    {
        pregunta: "2. ¿Qué tipo de display tienen por defecto los elementos <b>span</b>?",
        respuestas: {
            a: "Block",
            b: "Flex",
            c: "Grid",
            d: "Inline",
            e: "Inline-block"
        },
        respuestaCorrecta: "d"
    },
    {
        pregunta: "3. El selector a:hover, se emplea para definir el estilo de:",
        respuestas: {
            a: "Un enlace cuando el mouse pasa sobre él",
            b: "Un enlace activo",
            c: "Un enlace visitado",
            d: "Todas las anteriores son correctas"
        },
        respuestaCorrecta: "a"
    },
    {
        pregunta: "4. ¿Qué es un REM?",
        respuestas: {
            a: "Una etiqueta HTML",
            b: "Un formato de imagen de mapa de pixeles",
            c: "Una unidad de medida relativa",
            d: "Un formato de imagen indexada de mapa de píxeles"
        },
        respuestaCorrecta: "c"
    },
    {
        pregunta: "5. ¿Qué componente de Bootstrap se utiliza para recorrer elementos como una presentación de diapositivas?",
        respuestas: {
            a: "Orbit",
            b: "Scrollspy",
            c: "Carousel",
            d: "Slideshow"
        },
        respuestaCorrecta: "c"
    },
    {
        pregunta: "6. El sistema de cuadrículas de Bootstrap permite adaptar el contenido de mi sitio web para que sea visualizado correctamente en múltiples dispositivos.",
        respuestas: {
            a: "Verdadero",
            b: "Falso"
        },
        respuestaCorrecta: "a"
    },
    {
        pregunta: "7. ¿Cuál es el resultado del siguiente fragmento de código en JavaScript? <br/>  let x = 2; <br />  let y = '2'; <br/>  if(x===y) <br/>    {console.log('Son iguales');} <br/>  else <br/>    {console.log('No son iguales');}",
        respuestas:{
            a: "Salida por consola: 'Son iguales'",
            b: "Salida por consola: 'No son iguales'"
        },
        respuestaCorrecta: "b"
    },
    {
        pregunta: "8. ¿Cuál es el resultado del siguiente fragmento de código en JavaScript?: <br/>  for(var i= 0; i<2; i++){<br/>    continue<br/>  } <br/>  console.log(i)",
        respuestas: {
            a: "Salida por consola: 0",
            b: "Salida por consola: 1",
            c: "Salida por consola: Uncaught ReferenceError: i is not defined",
            d: "Salida por consola: Uncaught ReferenceError: continue is not defined",
            e: "Salida por consola: 2"
        },
        respuestaCorrecta: "e"
    },
    {
        pregunta: "9. Vue.js usa como marcador de posición para los datos lo siguiente:",
        respuestas: {
            a: "{{  }}",
            b: "{  }",
            c: "${  }"
        },
        respuestaCorrecta: "a"
    },
    {
        pregunta: "10. Cuando un objeto Vue se encuentra vinculado a un elemento HTML, el elemento HTML podrá cambiar cuando el objeto Vue cambie.",
        respuestas: {
            a: "Verdadero",
            b: "Falso"
        },
        respuestaCorrecta: "a"
    }
];

function mostrarCuestionario(){
    data.style.display = "none";
    quiz.style.display = "inline-block";
    const preguntasYrespuestas = [];
    ejercicios.forEach((preguntaActual, numeroDePregunta) => {
        const respuestas = [];
        for(letraRespuesta in preguntaActual.respuestas){
            respuestas.push(
                `
                <label>
                    <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}" />
                    ${letraRespuesta}: ${preguntaActual.respuestas[letraRespuesta]}
                </label> <br />
                `
            );
        }
        preguntasYrespuestas.push(
            `
            <div class="quiz-questions">
                <div class="question"> ${preguntaActual.pregunta} </div>
                <div class="respuestas"> ${respuestas.join('')} </div>
            </div>
            `
        )
    })
    quizQuestions.innerHTML = preguntasYrespuestas.join('');
}

function mostrarResultado(){
    quiz.style.display = "none";
    const respuestas = quizQuestions.querySelectorAll(".respuestas");
    let respuestasCorrectas = 0;
    ejercicios.forEach((preguntaActual, numeroDePregunta) => {
        const todasLasRespuestas = respuestas[numeroDePregunta];
        const checkboxRespuestas = `input[name="${numeroDePregunta}"]:checked`;
        console.log(checkboxRespuestas)
        const respuestaElegida = (todasLasRespuestas.querySelector(checkboxRespuestas) || {}).value;
        if(respuestaElegida === preguntaActual.respuestaCorrecta){
            respuestasCorrectas++;
        }
    });
    resultado.innerHTML = 
    `<div class="quiz-result-container">
        <p>Tu calificación es de <b>${respuestasCorrectas}</b> / 10 puntos.</p>
        <p>¡Gracias por participar!</p>
        <a href="frontend.html" class="btn-primary">Volver</a>
    </div>`
};
