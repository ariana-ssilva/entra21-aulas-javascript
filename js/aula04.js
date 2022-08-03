console.group("Ler conteúdos com jQuery");
console.log($("#paragrafo_1"));
console.log($("#paragrafo_1").text());
console.groupEnd();

console.group("Alterar com jQuery");
$("#paragrafo_2").text("Conteúdo reescrito com jQuery");
console.log($("#paragrafo_2").text());
console.groupEnd();

console.group("Ler vários conteudos com jQuery");
let lista = $("p");
console.log(lista);
console.log(lista.text());
$("p").each(function () {
    console.log(this.textContent);
})
console.groupEnd();

console.group("Escrever varios conteudos com jQuery");
$("li").text("li escrito com jQuery");
console.groupEnd();

console.group("Criar elementos com jQuery");
$("<button>", {
    text: "Clique aqui",
    class: "btn btn-outline-primary"
}).appendTo("body")

$("body").append(
    $("<b>"),
    $("<b>", { text: "Texto negrito" }),
    $("<b>"),
    $("<b>", { text: "Texto italico" }),

)

console.groupEnd();

console.group('mais de um item com jQuery');

console.groupEnd();

console.group("Exercicio gerando conteudos com jQuery");

$("<table>", {class: "table table-dark table-striped table-bordered table-hover"}).append(
    $("<thead>").append(
        $("<th>", {text: "Nome"}),
        $("<th>", {text: "Idade"}),
        $("<th>", {text: "Cidade"}),
    ),
    $("<tbody>").append(
        $("<tr>").append(
            $("<td>", {text:'Fulano'}),
            $("<td>", {text:'22'}),
            $("<td>", {text:'Jba'}),
        ),

        $("<tr>").append(
            $("<td>", {text:'Ciclano'}),
            $("<td>", {text:'33'}),
            $("<td>", {text:'Hdo'}),
        ), 
        $("<tr>").append(
            $("<td>", {text:'Fulano'}),
            $("<td>", {text:'22'}),
            $("<td>", {text:'Jba'}),
        )
    ),
).appendTo("body")

console.groupEnd();