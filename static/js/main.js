document.querySelectorAll('.svg-box').forEach(svg => {
  svg.addEventListener('click', () => {
    const shape = svg.querySelector('.shape');
    if (shape.classList.contains('circle')) {
      shape.classList.toggle('circle-border-anim');
    } else {
      svg.classList.toggle('clicked');
    }
  });
});
