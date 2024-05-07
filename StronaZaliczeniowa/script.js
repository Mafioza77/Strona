document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlay-image');
    const closeBtn = document.getElementById('close-btn');
    const galleryImages = document.querySelectorAll('.gallery-image');

    galleryImages.forEach(image => {
        image.addEventListener('click', function () {
            overlayImage.src = this.src;
            overlay.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', function () {
        overlay.style.display = 'none';
    });
});
