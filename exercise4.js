// demonstrate the dom manupulation

const toggleBttn = document.getElementById("toggleBttn");
const contentDiv = document.getElementById("content");

let showMore = false;

function toggleContent() {
  if (showMore) {
    contentDiv.textContent = "";
    toggleBttn.textContent = "Show More";
  } else {
    contentDiv.textContent =
      "Here's some more content. Click the button to show less.";
    toggleBttn.textContent = "Show Less";
  }

  showMore = !showMore;
}

toggleBttn.addEventListener("click", toggleContent);
