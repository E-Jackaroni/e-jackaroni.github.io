// Loading Spinner
window.onload = function() {
    document.getElementById("page-loading").style.display = "none";
};
// Determine my age
function calculateage(){
    var birthday = new Date(2000, 4, 9);
    var today = new Date();
    var yearsold = Math.floor((today - birthday)/(31536000000));
    document.getElementById("age").innerHTML = "I am " + yearsold + " years old";
};

// Hackermode button
function hackermode() {
    document.getElementById("mainpagebody").style.cssText = "background: black; color: lightgreen; text-shadow: 2px 2px 4px white; background-image: url('images/digitalrain.gif');";
    document.getElementById("jackpic").src="images/hackerjack.png";
    document.getElementById("maddypic").src="images/hackermaddy.png";
}

// Call my functions once the page has loaded
document.addEventListener("DOMContentLoaded", function(){
    calculateage();
    hmbutton = document.getElementById("hackermodebutton");
    hmbutton.onclick = hackermode;
});
