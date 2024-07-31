const galleryData = {
  "galleryImages": [
    { "path": "./assets/img/Gallery/image1.jpg", "alt": "gallery image 1" },
    { "path": "./assets/img/Gallery/image2.jpg", "alt": "gallery image 2" },
    { "path": "./assets/img/Gallery/image3.jpg", "alt": "gallery image 3" },
    { "path": "./assets/img/Gallery/image4.jpg", "alt": "gallery image 4" },
    { "path": "./assets/img/Gallery/image5.jpeg", "alt": "gallery image 5" },
    { "path": "./assets/img/Gallery/image6.jpeg", "alt": "gallery image 6" },
    { "path": "./assets/img/Gallery/image7.jpeg", "alt": "gallery image 7" },
    { "path": "./assets/img/Gallery/image8.jpeg", "alt": "gallery image 8" },
    { "path": "./assets/img/Gallery/image9.jpeg", "alt": "gallery image 9" },
    { "path": "./assets/img/Gallery/image10.jpeg", "alt": "gallery image 10" },
    { "path": "./assets/img/Gallery/image11.jpeg", "alt": "gallery image 11" },
    { "path": "./assets/img/Gallery/image12.jpeg", "alt": "gallery image 12" },
    { "path": "./assets/img/Gallery/image13.jpeg", "alt": "gallery image 13" },
    { "path": "./assets/img/Gallery/image14.jpeg", "alt": "gallery image 14" },
    { "path": "./assets/img/Gallery/image15.png", "alt": "gallery image 15" },
    { "path": "./assets/img/Gallery/image16.png", "alt": "gallery image 16" },
    { "path": "./assets/img/Gallery/image17.png", "alt": "gallery image 17" },
    { "path": "./assets/img/Gallery/image18.png", "alt": "gallery image 18" },
    { "path": "./assets/img/Gallery/image19.png", "alt": "gallery image 19" },
    { "path": "./assets/img/Gallery/image20.png", "alt": "gallery image 20" },
    { "path": "./assets/img/Gallery/image21.png", "alt": "gallery image 21" },
    { "path": "./assets/img/Gallery/image22.png", "alt": "gallery image 22" },
    { "path": "./assets/img/Gallery/image23.png", "alt": "gallery image 23" },
    { "path": "./assets/img/Gallery/image24.png", "alt": "gallery image 24" },
    { "path": "./assets/img/Gallery/image25.png", "alt": "gallery image 25" },
    { "path": "./assets/img/Gallery/image26.png", "alt": "gallery image 26" },
    { "path": "./assets/img/Gallery/image27.png", "alt": "gallery image 27" },
    { "path": "./assets/img/Gallery/image28.png", "alt": "gallery image 28" },
    { "path": "./assets/img/Gallery/image29.png", "alt": "gallery image 29" },
    { "path": "./assets/img/Gallery/image30.png", "alt": "gallery image 30" },
    { "path": "./assets/img/Gallery/image31.png", "alt": "gallery image 31" },
    { "path": "./assets/img/Gallery/image32.png", "alt": "gallery image 32" },
    { "path": "./assets/img/Gallery/image33.png", "alt": "gallery image 33" },
    { "path": "./assets/img/Gallery/image34.png", "alt": "gallery image 34" },
    { "path": "./assets/img/Gallery/image35.png", "alt": "gallery image 35" },
    { "path": "./assets/img/Gallery/image36.png", "alt": "gallery image 36" },
    { "path": "./assets/img/Gallery/image37.png", "alt": "gallery image 37" },
    { "path": "./assets/img/Gallery/image38.png", "alt": "gallery image 38" },
    { "path": "./assets/img/Gallery/image39.png", "alt": "gallery image 39" },
    { "path": "./assets/img/Gallery/image40.png", "alt": "gallery image 40" },
    { "path": "./assets/img/Gallery/image41.png", "alt": "gallery image 41" },
    { "path": "./assets/img/Gallery/image42.png", "alt": "gallery image 42" },
    { "path": "./assets/img/Gallery/image43.png", "alt": "gallery image 43" },
    { "path": "./assets/img/Gallery/image44.png", "alt": "gallery image 44" },
    { "path": "./assets/img/Gallery/image45.png", "alt": "gallery image 45" },
    { "path": "./assets/img/Gallery/image46.png", "alt": "gallery image 46" },
    { "path": "./assets/img/Gallery/image47.png", "alt": "gallery image 47" },
    { "path": "./assets/img/Gallery/image48.png", "alt": "gallery image 48" },
    { "path": "./assets/img/Gallery/image49.png", "alt": "gallery image 49" },
    { "path": "./assets/img/Gallery/image50.png", "alt": "gallery image 50" },
    { "path": "./assets/img/Gallery/image51.png", "alt": "gallery image 51" },
    { "path": "./assets/img/Gallery/image52.png", "alt": "gallery image 52" },
    { "path": "./assets/img/Gallery/image53.png", "alt": "gallery image 53" },
    { "path": "./assets/img/Gallery/image54.png", "alt": "gallery image 54" },
    { "path": "./assets/img/Gallery/image55.png", "alt": "gallery image 55" },
    { "path": "./assets/img/Gallery/image56.png", "alt": "gallery image 56" },
    { "path": "./assets/img/Gallery/image57.png", "alt": "gallery image 57" },
    { "path": "./assets/img/Gallery/image58.png", "alt": "gallery image 58" },
    { "path": "./assets/img/Gallery/image59.png", "alt": "gallery image 59" },
    { "path": "./assets/img/Gallery/image60.png", "alt": "gallery image 60" },
    { "path": "./assets/img/Gallery/image61.png", "alt": "gallery image 61" },
    { "path": "./assets/img/Gallery/image62.png", "alt": "gallery image 62" },
    { "path": "./assets/img/Gallery/image63.png", "alt": "gallery image 63" },
    { "path": "./assets/img/Gallery/image64.png", "alt": "" },
    { "path": "./assets/img/Gallery/image65.png", "alt": "" },
    { "path": "./assets/img/Gallery/image66.png", "alt": "" }
  ]
};


// Function to generate HTML for gallery images
function generateGalleryHTML(galleryData) {
  const galleryContainer = document.querySelector('.gallery-container');
  if (!galleryContainer) return;

  galleryData.galleryImages.forEach(image => {
    const anchor = document.createElement('a');
    anchor.href = `${image.path}`; // Assuming the images have a .jpg extension
    anchor.setAttribute('data-lightbox', 'mygallery');

    const img = document.createElement('img');
    img.src = `${image.path}`;
    img.alt = image.alt || '';

    anchor.appendChild(img);
    galleryContainer.appendChild(anchor);
  });
}

// Call the function to generate the gallery
generateGalleryHTML(galleryData);