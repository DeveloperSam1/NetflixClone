const scrollContainer = document.querySelector('.mainpictures');
const scrollLeftBtn = document.getElementById('scrollLeftBtn');
const scrollRightBtn = document.getElementById('scrollRightBtn');

function getScrollAmount() {
  const firstBox = scrollContainer.querySelector('.totalpic');
  if (!firstBox) return 0;
  const boxWidth = firstBox.offsetWidth;

  // Get the gap from computed style
  const style = window.getComputedStyle(scrollContainer);
  let gap = parseInt(style.columnGap || style.gap || 0);

  // If gap is not found by columnGap or gap, fallback to 0
  if (isNaN(gap)) gap = 0;

  // Scroll amount is width of one box plus gap, times 4
  return (boxWidth + gap) * 4;
}

scrollLeftBtn.addEventListener('click', () => {
  const scrollAmount = getScrollAmount();
  scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

scrollRightBtn.addEventListener('click', () => {
  const scrollAmount = getScrollAmount();
  scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});