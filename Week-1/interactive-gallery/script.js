document.addEventListener("DOMContentLoaded", () => {
  const images = [
    {
      thumbnail: "assets/img1_thumbnail.png",
      full: "assets/img1.jpg",
      caption: "Caption 1",
    },
    {
      thumbnail: "assets/img2_thumbnail.png",
      full: "assets/img2.jpg",
      caption: "Caption 2",
    },
    {
      thumbnail: "assets/img3_thumbnail.png",
      full: "assets/img3.jpg",
      caption: "Caption 3",
    },
    {
      thumbnail: "assets/img1_thumbnail.png",
      full: "assets/img1.jpg",
      caption: "Caption 1",
    },
    {
      thumbnail: "assets/img2_thumbnail.png",
      full: "assets/img2.jpg",
      caption: "Caption 2",
    },
    {
      thumbnail: "assets/img3_thumbnail.png",
      full: "assets/img3.jpg",
      caption: "Caption 3",
    },
  ];

  const galleryContainer = document.querySelector("#gallery-container");
  const lightbox = document.querySelector("#lightbox");
  const lightboxImage = document.querySelector("#lightbox-image");
  const caption = document.querySelector("#caption");
  const closeBtn = document.querySelector("#close");
  const prevBtn = document.querySelector("#prev");
  const nextBtn = document.querySelector("#next");

  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    lightboxImage.src = images[index].full;
    caption.textContent = images[index].caption;
    lightbox.style.display = "flex";
    updateNavButtons();
  }

  function closeLightbox() {
    lightbox.style.display = "none";
  }

  function showNext() {
    if (currentIndex < images.length - 1) {
      openLightbox(currentIndex + 1);
    }
  }

  function showPrev() {
    if (currentIndex > 0) {
      openLightbox(currentIndex - 1);
    }
  }

  function updateNavButtons() {
    prevBtn.style.display = currentIndex === 0 ? "none" : "block";
    nextBtn.style.display =
      currentIndex === images.length - 1 ? "none" : "block";
  }

  images.forEach((image, index) => {
    const img = document.createElement("img");
    img.src = image.thumbnail;
    img.alt = image.caption;
    img.addEventListener("click", () => openLightbox(index));
    galleryContainer.appendChild(img);
  });

  closeBtn.addEventListener("click", closeLightbox);
  nextBtn.addEventListener("click", showNext);
  prevBtn.addEventListener("click", showPrev);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
});
