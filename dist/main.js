const ratingBtn = document.getElementsByClassName("rating");

for (let button of ratingBtn) {
  button.addEventListener("click", (event) => {
    // Remove the selected class and reset the styles of all buttons
    for (let otherButton of ratingBtn) {
      otherButton.classList.remove("selected");
      otherButton.classList.remove("bg-orange", "text-white");
    }

    event.target.classList.add("selected", "bg-orange", "text-white");

    window.selectedRating = event.target.textContent;
  });
}

function submitForm(event) {
  event.preventDefault();
  const feedbackForm = document.getElementById("feedbackForm");
  const feedbackDiv = document.getElementById("feedback");

  const ratingSpan = document.getElementById("rating");
  ratingSpan.textContent = selectedRating;

  feedbackForm.classList.add("hidden");
  feedbackDiv.classList.remove("hidden");
}
