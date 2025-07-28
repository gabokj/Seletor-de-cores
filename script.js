const colorInput = document.getElementById('colorinput');
const colorPreview = document.getElementById('colorPreview');
const hexValue = document.getElementById('hexValue');
const hexBox = document.getElementById('hexBox');
const tooltip = document.getElementById('tooltip');

colorInput.addEventListener('input', (e) => {
  const color = e.target.value;
  colorPreview.style.backgroundColor = color;
  hexValue.textContent = color.toUpperCase();
});

hexBox.addEventListener('click', () => {
  const color = hexValue.textContent;
  navigator.clipboard.writeText(color).then(() => {
    tooltip.style.opacity = 1;
    setTimeout(() => {
      tooltip.style.opacity = 0;
    }, 1500);
  });
});