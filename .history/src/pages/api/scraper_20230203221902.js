
const fileInput = document.querySelector('input[type="file"]');
const reader = new FileReader();

reader.onload = function() {
  console.log(reader.result);
};

fileInput.addEventListener('change', function() {
  reader.readAsText(fileInput.files[0]);
});
