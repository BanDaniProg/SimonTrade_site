const categoryG = document.querySelectorAll(".catalogCategoryTitle");

for (let category of categoryG) {
    let osszeZaro = document.createElement("button");
    let arrow1 = document.createElement("div");
    let arrow2 = document.createElement("div");
    osszeZaro.innerText = "Több";
    osszeZaro.classList.add("CategoryCloser");
    arrow1.classList.add("arrow1");
    arrow2.classList.add("arrow2");
    osszeZaro.appendChild(arrow1);
    osszeZaro.appendChild(arrow2);
    category.after(osszeZaro);
}

const osszeZarok = document.querySelectorAll(".CategoryCloser");

for (let item of osszeZarok) {
    item.onclick = () => {
        item.classList.toggle("active");
        const catalogCategory = item.closest(".catalogCategory");
        catalogCategory.classList.toggle("active");
         if (item.classList.contains("active")) {
            item.firstChild.textContent = "Bezár";
        } else {
            item.firstChild.textContent = "Több";
        }
        const catalogGroups = catalogCategory.querySelectorAll(".catalogGroup");
        for (let group of catalogGroups) {
            group.classList.toggle("active");
        }
    };
   
}