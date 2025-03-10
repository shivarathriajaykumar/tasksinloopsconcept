// Prompt the user to enter the number of rows
let rows = parseInt(prompt("Enter the number of rows for the triangle:"));

// Outer loop for rows
for (let i = 1; i <= rows; i++) {
    let stars = "";
    
    // Inner loop for columns (stars in each row)
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    
    console.log(stars); // Print stars for the current row
}
