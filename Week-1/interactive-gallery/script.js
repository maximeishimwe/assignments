document.addEventListener("DOMContentLoaded", () => {
  const images = [
    {
      thumbnail: "assets/img1_thumbnail.png",
      full: "assets/img1.jpg",
      caption: "Nice city lights",
    },
    {
      thumbnail: "assets/img2_thumbnail.png",
      full: "assets/img2.jpg",
      caption: "Sky and mountains",
    },
    {
      thumbnail: "assets/img3_thumbnail.jpg",
      full: "assets/img3.jpg",
      caption: "Yellow car",
    },
    {
      thumbnail: "assets/img4_thumbnail.jpg",
      full: "assets/img4.jpg",
      caption: "Green field",
    },
    {
      thumbnail: "assets/img5_thumbnail.jpg",
      full: "assets/img5.jpg",
      caption: "Fruits",
    },
    {
      thumbnail: "assets/img6_thumbnail.jpg",
      full: "assets/img6.jpg",
      caption: "Camera",
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
