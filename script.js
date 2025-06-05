var height = document.querySelector("#height");
var weight = document.querySelector("#weight");
var btn = document.querySelector("#btn");
var error = document.querySelector("#error");
var result = document.querySelector("#result");

btn.addEventListener("click",function(){
    var h = height.value;
    var w = weight.value;
    if(h === "" || w === ""){
        error.innerHTML = "please enter Both height and weight.";
        result.innerHTML = ""; 
    }
    else{
        error.innerHTML = "";
        var bmi = w/((h/100) * (h/100));
        var total = bmi.toFixed(2);
        result.innerHTML = `Your BMI is ${total}`;


    }
});
