(function () {
  document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", (event) => {
      if (event.target.tagName === "BUTTON") {
        const buttonID = event.target.id;
        const targetDiv = document.querySelector(`.div-for-${buttonID}`);

        if (targetDiv) {
          // Set the text content of the div to "Hello"
          targetDiv.textContent = "Hello";

          // Change the div class name to "hello2"
          targetDiv.className = "hello2";

          console.log(`Text and class updated for button ID: ${buttonID}`);
        } else {
          console.error(`Div for button ID ${buttonID} not found.`);
        }
      }
    });
  });
})();
