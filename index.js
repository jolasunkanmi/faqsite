const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".question");
  const image = item.querySelector("img");

  question.addEventListener("click", () => {
    item.classList.toggle("active");

    if (item.classList.contains("active")) {
      image.src = "./icon-minus.svg";
    } else {
      image.src = "./icon-plus.svg";
    }
  });
});
