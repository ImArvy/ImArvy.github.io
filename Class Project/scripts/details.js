$(document).ready(() => {
    let id = localStorage['jsonNumber'];
    localStorage.removeItem('jsonNumber');
    $("#details").html("");
    $.getJSON("../data/" + id + ".json", (data) => {
        let attributes = data.attributes;
        for (let j = 0; j < attributes.length; j++) {
            $("#details").append("<li><h2>" + attributes[j].trait_type + "</h2><h3>" + attributes[j].value + "</h3></li>");
        }
    });
    /*
    for (let i = 0; i < 50; i++) {
        $("#details").html("");
        $.getJSON("../data/" + i + ".json", (data) => {
            let attributes = data.attributes;
            for (let j = 0; j < attributes.length; j++) {
                $("#details").append("<li><h2>" + attributes[j].trait_type + "</h2><h3>" + attributes[j].value + "</h3></li>");
            }
        });
    }
    */
});