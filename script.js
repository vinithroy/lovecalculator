document.addEventListener("DOMContentLoaded", function() {
    var nameInputs = document.querySelectorAll(".names");
    var displayInput = document.getElementById("display");
    var calculateButton = document.querySelector("#btn button");
    var mainElement = document.getElementById("main");
    var isBackgroundImageSet = 0;

    function calculateLovePercentage() {
        
        var percentage = Math.floor(Math.random() * 100);

        displayInput.value = `Love Percentage : ${percentage}%`;
    }

    calculateButton.addEventListener("click", function() {
        calculateLovePercentage();
        toggleBackgroundImage();
    });

    nameInputs.forEach(function(input) {
        input.addEventListener("click", function() {
            this.value = "";
            displayInput.value = "";
        });
    });

    function toggleBackgroundImage() {
        if (!isBackgroundImageSet) {
            mainElement.style.backgroundImage = 'url("https://images.unsplash.com/photo-1517856713891-215e57a13c0d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")';
            isBackgroundImageSet = 1;
        } else {
            mainElement.style.backgroundImage = 'url("https://images.unsplash.com/photo-1617873993961-76d4261006bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI4fHxoZWFydHxlbnwwfHwwfHx8MA%3D%3D")';
            isBackgroundImageSet = 0;
        }
    }
});
