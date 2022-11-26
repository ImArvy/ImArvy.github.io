$(document).ready(() => {
    loadFilters();
    //loadImages();
    displayData();
});

let loadImages = () => {
    for (let i = 0; i < 100; i++) {
        $("#right").html("");
        $.getJSON("../data/" + i + ".json", (data) => {
            $("#right").append(`<a href = details.html?id=${i}><img src = https://s7nspfp.mypinata.cloud/ipfs/${data.image} id = ${i}></a>`);
        });
    }
};

let loadFilters = () => {
    // First loop to add trait_types
    let traitTypes = [];
    for (let i = 0; i < 100; i++) {
        $("#left ul").html("");
        $.getJSON("../data/" + i + ".json", (data) => {
            let attributes = data.attributes;
            for (let j = 0; j < attributes.length; j++) {
                let trait = attributes[j].trait_type;
                let traitSplit = trait.split(" ");
                if (traitTypes.includes(attributes[j].trait_type) === false) {
                    traitTypes.push(attributes[j].trait_type);
                    $("#left ul").append(`<li id = ${traitSplit[0]}><a href = '#'>${attributes[j].trait_type}</a></li>`);
                }
            }
        });
    }

    // Second loop to add values
    let values = [];
    for (let i = 0; i < 100; i++) {
        $("#left ul li").html("");
        $.getJSON("../data/" + i + ".json", (data) => {
            let attributes = data.attributes;
            for (let j = 0; j < attributes.length; j++) {
                let trait = attributes[j].trait_type;
                let traitSplit = trait.split(" ");
                let value = attributes[j].value;
                let valueSplit = value.split(" ");
                if (values.includes(attributes[j].value) === false ) {
                    values.push(attributes[j].value);
                    $("#" + traitSplit[0]).append(`<a href = gallery.html?id=${attributes[j].value} class = 'hidden' id = ${attributes[j].value}>${attributes[j].value}</a>`);
                }
            }
        });
    }
};

let filterImages = (id) => {
    // Filter images by id
    for (let i = 0; i < 100; i++) {
        $("#right").html("");
        $.getJSON("../data/" + i + ".json", (data) => {
            let attributes = data.attributes;
            for (let j = 0; j < attributes.length; j++) {
                let value = attributes[j].value;
                let valueSplit = value.split(" ");
                if (valueSplit[0] === id) {
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
            return String.fromCharCode("0x" + text.substr(1,2));
        }
    );
    return text;
};
    
let displayData = () => {
    let query = location.search.replace("?", "");
    if (query == "") {
        return;
    }
    
    let fields = query.split("&");
    if (fields.length == 0) {
        $("#right").html("");
        $("#right").append("<div><h2>NULL</h2><h3>NULL</h3></div>");
    } else {
        let field_parts;
        for (const i in fields) {
            field_parts = fields[i].split("=");
            field_parts[1] = decode(field_parts[1]);
            filterImages(field_parts[1]);
        }
    }
};