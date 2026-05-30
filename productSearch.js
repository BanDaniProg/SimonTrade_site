const kereso = document.querySelector(".inputField input");
const kategoriak = document.querySelectorAll(".catalogCategory");

kereso.addEventListener("input", function () {
  const keresettSzoveg = kereso.value.toLowerCase();

  kategoriak.forEach(function (kategoria) {
    const kartyak = kategoria.querySelectorAll(".catalogGroup");
    let vanTalalatAKategoriaban = false;

    kartyak.forEach(function (kartya) {
      const kartyaSzoveg = kartya.textContent.toLowerCase();

      if (kartyaSzoveg.includes(keresettSzoveg)) {
        kartya.style.display = "block";
        vanTalalatAKategoriaban = true;
      } else {
        kartya.style.display = "none";
      }
    });

    if (vanTalalatAKategoriaban) {
      kategoria.style.display = "block";
    } else {
      kategoria.style.display = "none";
    }
  });
});
