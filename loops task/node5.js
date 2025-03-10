// Prompt the user to enter the number of rows
let rows = parseInt(prompt("Enter the number of rows for the pyramid:"));

// Outer loop for rows
for (let i = 1; i <= rows; i++) {
    let pattern = "";

    // Inner loop for spaces (to center the stars)
    for (let j = 1; j <= rows - i; j++) {
        pattern += " ";
    }

    // Inner loop for stars (printing increasing odd number of stars)
    for (let k = 1; k <= 2 * i - 1; k++) {
        pattern += "*";
    }

    console.log(pattern); // Print the pattern for the current row
}
