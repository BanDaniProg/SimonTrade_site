const kereso = document.querySelector(".inputField input");
const kategoriak = document.querySelectorAll(".catalogCategory");

kereso.addEventListener("input", function () {
    const keresettSzoveg = kereso.value.trim().toLowerCase();

    kategoriak.forEach(function (kategoria) {
        const kartyak = kategoria.querySelectorAll(".catalogGroup");
        let vanTalalatAKategoriaban = false;

        // Ha üres a kereső, álljon vissza alapállapotra
        if (keresettSzoveg === "") {
            kategoria.style.display = "";
            kategoria.classList.remove("active");

            kartyak.forEach(function (kartya) {
                kartya.style.display = "";
            });

            return;
        }

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
            kategoria.style.display = "";
            kategoria.classList.add("active");
        } else {
            kategoria.style.display = "none";
            kategoria.classList.remove("active");
        }
    });
});