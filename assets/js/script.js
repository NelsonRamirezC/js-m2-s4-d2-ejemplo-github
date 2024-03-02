$(function () { //función ready

    //CAPTURAMOS EL H1 POR ID y le damos un evento doble click para cambiar color
    $("#tituloPrincipal").on("dblclick", function(){
        $(this).css("color", "red");
    })

})