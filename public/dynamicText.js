document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (event) => {
    // Check if the clicked element is a button
    if (event.target.tagName === "BUTTON") {
      // Get the ID of the clicked button
      const buttonID = event.target.id;

      // Dynamically find the corresponding div using a class pattern
      const targetDiv = document.querySelector(`.div-for-${buttonID}`);

      // Check if the target div exists
      if (targetDiv) {
        // Set the text content of the div
        targetDiv.textContent = `Hello from Yash Bhatnagar! Button ID: ${buttonID}`;

        // Log the action for debugging
        console.log(`Text added to the div for button with ID: ${buttonID}`);
      } else {
        console.error(
          `Div for button ID ${buttonID} not found. Ensure it has the correct class.`
        );
      }
    }
  });
});
