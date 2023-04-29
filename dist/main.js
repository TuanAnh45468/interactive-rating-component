const ratingBtn = document.getElementsByClassName("rating");

for (let button of ratingBtn) {
  button.addEventListener("click", (event) => {
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
