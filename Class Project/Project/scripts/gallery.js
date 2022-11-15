$(document).ready(() => {
    //for (let i = 0; i < 3334; i++) {
    for (let i = 0; i < 50; i++) {
        $("#right").html("");
        $.getJSON("../data/" + i + ".json", (data) => {
            $("#right").append("<a href = details.html id = " + i + "><img src = https://s7nspfp.mypinata.cloud/ipfs/" + data.image + "></a>");
        });
    }
});