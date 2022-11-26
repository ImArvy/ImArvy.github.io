$(document).ready(() => {
    loadFilters();
    loadImages();
});

let loadFilters = () => {
    for (let i = 0; i < 100; i++) {
        $("#left").html("");
        $.getJSON("../data/" + i + ".json", (data) => {
            let attributes = data.attributes;
            for (let j = 0; j < attributes.length; j++) {
                $("#left").append("<li>" + attributes[j].trait_type + "</li>");
            }
        });
    }
};

let loadImages = () => {
    for (let i = 0; i < 100; i++) {
        $("#right").html("");
        $.getJSON("../data/" + i + ".json", (data) => {
            $("#right").append("<a href = details.html?id=" + i + "><img src = https://s7nspfp.mypinata.cloud/ipfs/" + data.image + " id = " + i + "></a>");
        });
    }
};