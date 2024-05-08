document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image img');
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlay-image');
    const closeBtn = document.getElementById('close-btn');

    images.forEach(image => {
        image.addEventListener('click', function() {
            const src = this.getAttribute('src');
            overlayImage.setAttribute('src', src);
            overlay.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', function() {
        overlay.style.display = 'none';
    });
});
