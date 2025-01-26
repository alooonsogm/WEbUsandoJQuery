$(document).ready(function () {
    //Cambiar estilo de pagina
    $("#cambiarEstilos").click(function () {
        $("#encabezado").toggleClass("estilo1 estilo2");
        $("#Introducion").toggleClass("estilo1 estilo2");
        $("#losVideos").toggleClass("estilo1 estilo2");
        $("#losAudios").toggleClass("estilo1 estilo2");
        $("#lasFotos").toggleClass("estilo1 estilo2");
        $("#cajaTexto").toggleClass("estilo1 estilo2");
        $("#pieDePagina").toggleClass("estilo1 estilo2");
    });

    //Desplegar y plegar videos, audios e imagnes
    $("#titulo1").click(function () {
        $("video").slideToggle();
    });

    $("#titulo2").click(function () {
        $("audio").slideToggle();
    });

    $("#titulo3").click(function () {
        $("img").slideToggle();
    });

    //Mostrar mensaje click y doble click
    $("video").click(function () {
        alert("Ha hecho click en un video");
    });

    $("img").dblclick(function () {
        alert("La extension es: jpg");
    });

    //Desactivar boton derecho
    $("video").unbind("contextmenu");

    $("audio").unbind("contextmenu");

    $("img").unbind("contextmenu");

    //Cambiar titulos de la pagina
    $("#cambiar").click(function () {
        $("h1").text($("#textoIntroducido").val());
    });

    $("#añadirDelante").click(function () {
        $("h1").prepend($("#textoIntroducido").val());
    });

    $("#añadirDetras").click(function () {
        $("h1").append($("#textoIntroducido").val());
    });

    //Cambiar fondo pie de pagina
    $("#pieDePagina").hover(function () {
        $(this).css("background-color", "pink");
        $("#pieDePagina p").css("color", "white");
    }, function () {
        $(this).css("background-color", "");
        $("#pieDePagina p").css("color", "");
    }
    );
});