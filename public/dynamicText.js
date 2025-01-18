document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      const buttonID = event.target.id;
      const targetDiv = document.querySelector(`.div-for-${buttonID}`);

      if (targetDiv) {
        targetDiv.textContent = "Hello Yash Bhatnagar";
        console.log(`Text added to the div for button with ID: ${buttonID}`);
      } else {
        console.error(
          "Target div not found. Please check your classes or data attributes."
        );
      }
    }
  });
});
