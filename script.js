function drawShapes() {

    let form = document.forms.makeShapes;
    // Takes user input. Determines width and height of shapes:
    let input = parseFloat(makeShapes.input.value);
    // The final pattern that is displayed:
    let output = "";

    /*
        Validates that input is a number.
        If not, an error is shown.
        If so, the program continues.
    */
    if (isNaN(input) || !Number.isInteger(input)) {
        document.getElementById("results").innerHTML = "Error: Please enter only whole numbers.";
    }
    else {
        // Clears any previous results/errors.
        document.getElementById("results").innerHTML = "";

        // Shape 1: (top)
        for (let row = 0; row < input; row++) {            
            // Pound signs:
            for (let column = input; column > row; column--) {
                output += "# ";
            }
            // Spaces:
            for (let s = 0; s < row; s++) {
                output += "  ";
            }
            output += "\n";
        }
        document.getElementById("results").innerHTML += output;
        output = "";

        // Shape 2: (upper middle)
        for (let row = 0; row < input; row++) {
            // Pound signs:
            for (let column = 0; column <= row; column++) {
                output += "# ";
            }
            // Spaces:
            for (let s = input - 1; s > row; s--) {
                output += "  ";
            }
            output += "\n";
        }
        document.getElementById("results").innerHTML += output;
        output = "";
        
        // Shape 3: (lower middle)
        for (let row = 0; row < input; row++) {
            // Spaces:
            for (let s = 0; s < row; s++) {
                output += "  ";
            }
            // Pound signs:
            for (let column = input; column > row; column--) {
                output += "# ";
            }
            output += "\n";
        }
        document.getElementById("results").innerHTML += output;
        output = "";

        // Shape 4: (bottom)
        for (let row = 0; row < input; row++) {
            // Spaces:
            for (let s = input - 1; s > row; s--) {
                output += "  ";
            }
            // Pound signs:
            for (let column = 0; column <= row; column++) {
                output += "# ";
            }
            output += "\n";
        }
        document.getElementById("results").innerHTML += output;
        output = "";
    }

    // Debug
    // console.log(input);
}