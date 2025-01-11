document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("img");
    if (images.length === 0) {
        console.warn("Tidak ada gambar ditemukan di halaman.");
        return;
    }
    images.forEach((img, index) => {
        img.style.opacity = "0";
        img.style.transition = "opacity 1s";
        setTimeout(() => {
            img.style.opacity = "1";
        }, 200 * index);
    });
});
