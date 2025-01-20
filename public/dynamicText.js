(function () {
  document.addEventListener("DOMContentLoaded", () => {
   
    
    document.addEventListener("click", (event) => {
      if (event.target.tagName === "BUTTON") {
        const buttonID = event.target.id;
        const targetDiv = document.querySelector(`.div-for-${buttonID}`);

        if (targetDiv) {
          targetDiv.setAttribute("data-clicked", "true");
          targetDiv.textContent = `Attribute added! Button ID: ${buttonID}`;
          console.log(
            `Attribute added to the div for button with ID: ${buttonID}`
          );
        } else {
          console.error(`Div for button ID ${buttonID} not found.`);
        }
      }
    });
  });
})();
