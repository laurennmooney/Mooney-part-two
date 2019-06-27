function clickEvent() {
    var eventType = prompt("Event type?");
    // var tempFahr = prompt("What is the temperature today?");
    
    // if (eventType = "casual") {
    //     var outfit = "something comfy";
    // } else if (eventType = "semiformal") {
    //     var outfit = "a polo";
    // } else if (eventType = "formal") {
    //     var outfit = "a suit";
    // } 
    // well for some reason, this didn't work; let's try a switch statement instead.

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
    
        if (tempFahr < 54) {
            var outWear = "a coat";
        } else if (tempFahr >= 54 && tempFahr <= 70) {
            var outWear = "a jacket";
        } else if (tempFahr > 70) {
            var outWear = "no jacket";
        }

        var result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear " + outfit + " and " + outWear + "."

        document.getElementById("suggestion").innerHTML = result;
        
    } else {
        alert('Please only enter "casual," semi-formal" or "formal." Thank you.');
        var error = "Error. Cannot provide suggestion."
        document.getElementById("suggestion").innerHTML = error;
    }
}
