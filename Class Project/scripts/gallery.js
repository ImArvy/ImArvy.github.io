$(document).ready(() => {
    loadFilters();
    displayData();
});

let loadImages = () => {
    for (let i = 0; i < 100; i++) {
        $("#right").html("");
        $.getJSON("/Class Project/data/" + i + ".json", (data) => {
            $("#right").append(`<a href = details.html?id=${i}><img src = https://s7nspfp.mypinata.cloud/ipfs/${data.image} id = ${i}></a>`);
        });
    }
};

let loadFilters = () => {
    let traitTypes = [];
    let values = [];
    for (let i = 0; i < 100; i++) {
        $("#left ul").html("");
        $.getJSON("/Class Project/data/" + i + ".json", (data) => {
            let attributes = data.attributes;
            for (let j = 0; j < attributes.length; j++) {
                // Add trait_type attributes to filter
                let trait = attributes[j].trait_type;
                let traitJoined = trait.replace(/\s/g, '');
                let traitFixed = traitJoined.replace('#', '');
                if (traitTypes.includes(trait) === false) {
                    traitTypes.push(trait);
                    $("#left ul").append(`<li id = ${traitFixed}><a>${trait}</a></li>`);
                }

                // Add value attributes to filter
                let value = attributes[j].value;
                let valueJoined = value.replace(/\s/g, '');
                let valueFixed = valueJoined.replace('#', '');
                if (values.includes(value) === false ) {
                    values.push(value);
                    $(`#${traitFixed}`).append(`<a href = gallery.html?id=${valueFixed} class = 'hidden' id = ${valueFixed}>${value}</a>`);
                }
            }
        });
    }
};

let filterImages = (id) => {
    // Filter images by id
    for (let i = 0; i < 100; i++) {
        $("#right").html("");
        $.getJSON("/Class Project/data/" + i + ".json", (data) => {
            let attributes = data.attributes;
            for (let j = 0; j < attributes.length; j++) {
                let value = attributes[j].value;
                let valueJoined = value.replace(/\s/g, "");
                let valueFixed = valueJoined.replace("#", "");
                if (valueFixed === id) {
                    $("#right").append(`<a href = details.html?id=${i}><img src = https://s7nspfp.mypinata.cloud/ipfs/${data.image} id = ${i}></a>`);
                }
            }
        });
    }
};

let decode = (text) => {
    text = text.replace(/\+/g, " ");
    text = text.replace(/%[a-fA-F0-9]{2}/g, 
        (text) => {
            return String.fromCharCode("0x" + text.substr(1, 2));
        }
    );
    return text;
};
    
let displayData = () => {
    let query = location.search.replace("?", "");
    // Load all images if there is no query => no filter applied
    if (query == "") {
        loadImages();
    // Filter images if there is a query => filter applied
    } else {
        let fields = query.split("&");
        if (fields.length == 0) {
            $("#right").html("");
            $("#right").append("<h2>NULL</h2><h3>NULL</h3>");
        } else {
            let field_parts;
            for (const i in fields) {
                field_parts = fields[i].split("=");
                field_parts[1] = decode(field_parts[1]);
                filterImages(field_parts[1]);
            }
        }
    }
};