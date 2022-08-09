
$("#sos").on("click", function () {
    $.ajax({
        url: decodeURI("https://geek-jokes.sameerkumar.website/api?format=json"),
        type: "get",
        success: (retorno) => {
            console.log(retorno);
            $("body").append(
                $("h1", {class:"text-center"})
            )
            
        },
        error: (motivo) => {
            console.log(motivo);
        }, 
    })
})

$("#meu_ip").on("click", function () {
    $.ajax(
        {
            url: "https://httpbin.org/ip",
            type: "get",
            success: function (retorno) {
                console.log("Funfou ehe", retorno);
            },
            error: function (motivo) {
                console.warn("Ixiiii", motivo)
            }
        }
    )
})
