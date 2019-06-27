function clickEvent() {
    var eventType = prompt("Event type?");

    if (eventType === 'casual' || eventType === 'semi-formal' || eventType === 'formal') {
        var tempFahr = prompt("What is the temperature today?");

        switch (eventType) {
            case 'casual':
                var outfit = "something comfy";
                break;
            case 'semi-formal':
                var outfit = "a polo";
                break;
            case 'formal':
                var outfit = "a suit";
                break;
        }
    
        if (tempFahr > -50 && tempFahr < 54) {
            var outWear = "a coat";
        } else if (tempFahr >= 54 && tempFahr <= 70) {
            var outWear = "a jacket";
        } else if (tempFahr > 70 && tempFahr < 125) {
            var outWear = "no jacket";
        } else { 
            alert("Please enter a temperature between -50 and 125.");
            var tempFahr = prompt("What is the temperature today?");

            if (tempFahr > -50 && tempFahr < 54) {
                var outWear = "a coat";
            } else if (tempFahr >= 54 && tempFahr <= 70) {
                var outWear = "a jacket";
            } else if (tempFahr > 70 && tempFahr < 125) {
                var outWear = "no jacket";
            }
        }

        var result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear " + outfit + " and " + outWear + ".";

        document.getElementById("suggestion").innerHTML = result;

    } else {
        alert('Please only enter "casual," semi-formal" or "formal." Thank you.');
        var error = "Error. Cannot provide suggestion."
        document.getElementById("suggestion").innerHTML = error;
    } 

}
