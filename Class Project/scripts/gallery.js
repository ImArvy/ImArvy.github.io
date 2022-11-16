$(document).ready(() => {
    //for (let i = 0; i < 3334; i++) {
    for (let i = 0; i < 50; i++) {
        $("#right").html("");
        $.getJSON("../data/" + i + ".json", (data) => {
            $("#right").append("<a href = details.html><img src = https://s7nspfp.mypinata.cloud/ipfs/" + data.image + " id = " + i + "></a>");
        });
    }

    let images = $("#right img");
    $(images).each(() => {
        let id = $(this).attr("id");
        $(this).click((evt) => {
            evt.preventDefault();
            localStorage.setItem( 'jsonNumber', id );
        });
    });
});
