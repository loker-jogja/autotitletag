// Cari semua tag <a> di dalam dokumen
const links = document.querySelectorAll("a");

// Iterasi setiap tag <a>
for (let i = 0; i < links.length; i++) {
  // Periksa apakah tag <a> memiliki atribut title
  if (!links[i].hasAttribute("title")) {
    // Jika tidak ada, tambahkan atribut title dengan nilai isi dari tag <a>
    links[i].setAttribute("title", links[i].innerHTML);
  }
}
