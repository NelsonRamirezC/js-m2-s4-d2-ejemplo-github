$(function () { //función ready

    //CAPTURAMOS EL H1 POR ID y le damos un evento doble click para cambiar color
    $("#tituloPrincipal").on("dblclick", function(){
        $(this).css("color", "red");
    })


    //EVENTO CLICK A LAS TARJETAS QUE PERMITE OCULTAR LAS DESCRIPCIONES
    $("#cardsEjemplo .card .card-title").on("click", function(){
        //$("#cardsEjemplo .card .card-text").hide();
        $("#cardsEjemplo .card .card-text").toggle("slow");
    })


})