export function initializeWebflow() {
  document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", (event) => {
      if (event.target.tagName === "BUTTON") {
        const buttonID = event.target.id;
        const targetDiv = document.querySelector(`.div-for-${buttonID}`);

        if (targetDiv) {
          targetDiv.textContent = `Hello from Yash Bhatnagar! Button ID: ${buttonID}`;
          console.log(`Text added to the div for button with ID: ${buttonID}`);
        } else {
          console.error(`Div for button ID ${buttonID} not found.`);
        }
      }
    });
  });
}
