// Ambil semua anchor link pada halaman
const links = document.querySelectorAll('a');

// Loop melalui setiap anchor link dan tambahkan atribut title jika belum ada
links.forEach((link) => {
  if (!link.hasAttribute('title')) {
    link.setAttribute('title', link.textContent);
  }
});
