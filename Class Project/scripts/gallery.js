$(document).ready(() => {
    //for (let i = 0; i < 3334; i++) {
    for (let i = 0; i < 50; i++) {
        $("#right").html("");
        $.getJSON("../data/" + i + ".json", (data) => {
            $("#right").append("<a href = details.html id = " + i + "><img src = https://s7nspfp.mypinata.cloud/ipfs/" + data.image + "></a>");
        });
    }

    let images = $("#right img");
    $(images).each(() => {
        let id = $(this).attr("id");
        $(this).click((evt) => {
            evt.preventDefault();
            $.getJSON("../data/" + id + ".json", (data) => {
                let attributes = data.attributes;
                for (let i = 0; i < attributes.length; i++) {
                    $("#details").append("<li><h2>" + attributes[i].trait_type + "</h2><h3>" + attributes[i].value + "</h3></li>");
                }
            });
        });
    });
});
