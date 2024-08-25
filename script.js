// Elements
const headerInput = document.getElementById("headerText");
const descriptionInput = document.getElementById("descriptionText");
const imageUploader = document.getElementById("imageUploader");
const posterHeader = document.getElementById("posterHeader");
const posterImage = document.getElementById("posterImage");
const posterDescription = document.getElementById("posterDescription");
const colorPickerHeader = document.getElementById("colorPickerHeader");
const colorPickerDescription = document.getElementById(
  "colorPickerDescription"
);
const downloadButton = document.getElementById("downloadButton");

// Toggle control visibility
function toggleControl(controlId) {
  const control = document.getElementById(controlId);
  control.style.display = control.style.display === "block" ? "none" : "block";
}

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

colorPickerHeader.addEventListener("input", () => {
  posterHeader.style.color = colorPickerHeader.value;
});

colorPickerDescription.addEventListener("input", () => {
  posterDescription.style.color = colorPickerDescription.value;
});

// Header and Description Alignment
function alignHeader(alignment) {
  posterHeader.style.textAlign = alignment;
}

function alignDescription(alignment) {
  posterDescription.style.textAlign = alignment;
}

// Download poster as image
document.getElementById("downloadButton").addEventListener("click", () => {
  const posterPreview = document.getElementById("posterPreview");
  html2canvas(posterPreview).then((canvas) => {
    const link = document.createElement("a");
    link.href = canvas.toDataURL();
    link.download = "poster.png";
    link.click();
  });
});
