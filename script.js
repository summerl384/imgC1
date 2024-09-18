let isDark = false;

function changeImage(imageSrc) {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = imageSrc;
}

function toggleDark() {
    const mainImage = document.getElementById('mainImage');
    isDark = !isDark;
    mainImage.classList.toggle('dark', isDark);
}
