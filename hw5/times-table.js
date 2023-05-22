function displayTimes(){
    var input = document.getElementById('number').value;

    if(input >= 1 && input <= 9 && Number.isInteger(Number(input))) {
        input = parseInt(input, 10);
        let result = "";

        for(var i = 1; i <= 9; i++) {
            result += input + " * " + i + " = " + (input * i) + "<br>";
        }

        document.getElementById('times-result').innerHTML = result;
    }
    else {
        document.getElementById('times-result').innerHTML = "Input Error!";
    }
}