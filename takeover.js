document.addEventListener("scroll", function () {
  const sections = document.querySelectorAll(".image-section");

  const section = sections[0];
  const image = section.querySelector(".image");
  const textBox = section.querySelector(".text-box");
  const rect = section.getBoundingClientRect();

  // Check if the image is at or below 50vh
  if (rect.top <= window.innerHeight - 2 && rect.top >= 0) {
    // section.style.overflow = "visible";
    const scaleProgress = 1 - rect.top / (window.innerHeight - 2);
    image.style.transform = `scale(${1 + scaleProgress * 0.5})`;
    image.style.filter = `brightness(${1 - scaleProgress * 0.3})`;

    // Gradually show the text box and adjust its position
    textBox.style.bottom = `${-10 + scaleProgress * 10}vh`;
    textBox.style.opacity = scaleProgress;
  } else if (rect.top <= 0) {
    image.style.transform = "scale(1.5)";
    image.style.filter = "brightness(0.7)";
    textBox.style.bottom = "0";
    textBox.style.opacity = "1";
  } else {
    // Reset image and text box styles if out of scroll range
    // section.style.overflow = "hidden";
    image.style.transform = "scale(1)";
    image.style.filter = "brightness(1)";
    textBox.style.opacity = "0";
    textBox.style.bottom = "-10vh";
  }
  if (window.scrollY == 0) {
    image.style.transform = "scale(1)";
    image.style.filter = "brightness(1)";
  }
  // If image reaches top (0vh), make it full width with text at the bottom
});
