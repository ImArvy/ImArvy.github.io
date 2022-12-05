$(document).ready(function() {
    hoverImages();
    clickImages();
    placeOrder();
    clearOrder();
});

let hoverImages = () => {
    let images = $("ul li a img");

    $(images).each(function() {
        // Save source of original image
        let original = $(this).attr("src"); 
        
        // Preload rollover images
        let image = new Image();
        image.src = $(this).attr("id");

        // Change images on mouse hover
        $(this).hover(
            function(evt) {
                evt.preventDefault();
                $(this).attr("src", image.src);
            }
        ,
            function(evt) {
                evt.preventDefault();
                $(this).attr("src", original);
            }
        );
    });
};

let clickImages = () => {
    // Get images and initialize total
    let images = $("ul li a img");

    // Add items to order and update total on mouse click
    $(images).each(function() {
        $(this).click(function(evt) {
            evt.preventDefault();
            let price = $(this).attr("price");
            let name = $(this).attr("name");

            let total = parseFloat($("#total").attr("value")); // Get total from value attribute of #total
            total += parseFloat(price); // Add current price to this total
            $("#total").attr("value", total); // Update value of #total with new total

            $("#order").append("<option>$" + price + " - " + name + "</option>");
            $("#total").html("Total: $" + total.toFixed(2));
        });
    });
};

let placeOrder = () => {
    // Get place order button
    let button = $("#place_order");

    // Open checkout page on mouse click
    $(button).click(function(evt) {
        evt.preventDefault();
        window.location.href = "checkout.html";
    });
};

let clearOrder = () => {
    // Get clear order button
    let button = $("#clear_order");

    // Clear order and total on mouse click
    $(button).click(function(evt) {
        evt.preventDefault();
        $("#order").html("");
        $("#total").html("");
        $("#total").attr("value", "0.00");
    });
};