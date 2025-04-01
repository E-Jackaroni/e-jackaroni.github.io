// Loading Spinner
$(window).on("load", function () {
    $("#loading").hide();
})


// Determine my age
function calculateage(){
    var birthday = new Date(2000, 4, 9);
    var today = new Date();
    var yearsold = Math.floor((today - birthday)/(31536000000));
    document.getElementById("age").innerHTML = "I am " + yearsold + " years old";
}

// Hackermode button


// Call my functions once the page has loaded
document.addEventListener("DOMContentLoaded", function(){
calculateage();
});
