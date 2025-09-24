// Fungsi untuk memastikan posisi scroll di landing section
window.addEventListener("load", function () {
  const landingSection = document.querySelector(".relative.w-full.h-screen"); // Pilih section landing
  landingSection.scrollIntoView({
    behavior: "smooth", // Efek scroll halus
    block: "start", // Menyusun ke bagian atas elemen
  });
});

// Menampilkan Section Gallery saat tombol diklik
document
  .getElementById("showGalleryBtn")
  .addEventListener("click", function () {
    // Cari elemen yang ingin dituju
    const gallerySection = document.querySelector(".galeri-section");

    // Gunakan scrollIntoView untuk scroll ke bagian tersebut
    gallerySection.scrollIntoView({
      behavior: "smooth", // Efek scroll halus
      block: "start", // Menyusun ke bagian atas elemen
    });
  });
