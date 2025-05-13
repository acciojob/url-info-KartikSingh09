javascript code for Uppercase input field 
document.getElementById("fname").addEventListener("blur", function() {
    this.value = this.value.toUpperCase();
});