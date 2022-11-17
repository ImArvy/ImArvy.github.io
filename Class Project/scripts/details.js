$(document).ready(() => {
    displayData();
});

let loadJSON = (num) => {
    $("#box").html("");
    $.getJSON("data/" + num + ".json", (data) => {
        let attributes = data.attributes;
        for (let j = 0; j < attributes.length; j++) {
            $("#box").append("<div><h2>" + attributes[j].trait_type + "</h2><h3>" + attributes[j].value + "</h3></div>");
        }
    });
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
    if (query == "") return;
    
    let fields = query.split("&");
    if (fields.length == 0) {
        $("#box").html("");
        $("#box").append("<div><h2>NULL</h2><h3>NULL</h3></div>");
    } else {
        let field_parts;
        for (const i in fields) {
            field_parts = fields[i].split("=");
            field_parts[0] = decode(field_parts[0]);
            field_parts[1] = decode(field_parts[1]);
            loadJSON(field_parts[1]);
        }
    }
};