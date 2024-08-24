// Elements
const headerInput = document.getElementById("headerText");
const descriptionInput = document.getElementById("descriptionText");
const imageUploader = document.getElementById("imageUploader");
const posterHeader = document.getElementById("posterHeader");
const posterImage = document.getElementById("posterImage");
const posterDescription = document.getElementById("posterDescription");
const colorPicker = document.getElementById("colorPicker");
const downloadButton = document.getElementById("downloadButton");

// For preview
headerInput.addEventListener("input", () => {
  posterHeader.textContent = headerInput.value;
});

descriptionInput.addEventListener("input", () => {
  posterDescription.textContent = descriptionInput.value;
});

imageUploader.addEventListener("change", (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = function (event) {
    posterImage.src = event.target.result;
  };
  reader.readAsDataURL(file);
});

colorPicker.addEventListener("input", () => {
  posterHeader.style.color = colorPicker.value;
});

// Header Alignment
function alignHeader(alignment) {
  posterHeader.style.textAlign = alignment;
}

// Description Alignment
function alignDescription(alignment) {
  posterDescription.style.textAlign = alignment;
}

// Download poster as image
downloadButton.addEventListener("click", () => {
  const posterPreview = document.getElementById("posterPreview");
  html2canvas(posterPreview).then((canvas) => {
    const link = document.createElement("a");
    link.href = canvas.toDataURL();
    link.download = "poster.png";
    link.click();
  });
});
