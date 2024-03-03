// let addToCartButtons = document.querySelectorAll('.add-to-cart');

// // Function to print "Add to Cart Successfully" message
// function printSuccessMessage() {
//     alert('Add to Cart Successfully');
// }

// // ARROW FINCTION IS A CONCISE WAY OF WRITING AN FUNCTION:

// addToCartButtons.forEach(button => {
//     button.addEventListener('click', printSuccessMessage);
// });


// document.addEventListener('DOMContentLoaded', function() {
//     // Your code here
// });
// document.addEventListener('DOMContentLoaded', function() {
//     document.addEventListener('click', function(event) {
//         if (event.target.classList.contains('add-to-cart')) {
//             printSuccessMessage();
//         }
//     });
// });




let addToCartButtons = document.querySelectorAll('.add-to-cart');

// Function to display a pop-up message when the button is clicked
function displaySuccessMessage() {
    alert('Item added to cart successfully!');
}

// Attach event listener to each button
addToCartButtons.forEach(button => {
    button.addEventListener('click', displaySuccessMessage);
});