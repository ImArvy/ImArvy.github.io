$(document).ready(() => {
    loadJSON();
});

let loadJSON = () => {
    for (let i = 0; i < 100; i++) {
        $("#right").html("");
        $.getJSON("../data/" + i + ".json", (data) => {
            $("#right").append("<a href = details.html?id=" + i + "><img src = https://s7nspfp.mypinata.cloud/ipfs/" + data.image + " id = " + i + "></a>");
        });
    }
};