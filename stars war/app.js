function loadPlanets() {
  fetch("https://swapi.py4e.com/api/planets")
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // پروژه ایراد داشت اینو گذاشتم که برسی کنم و هندلینک ارور هم تمرین شده باشه و دیباگینگ

      if (!data.results) {
        console.error("ساختار پاسخ معتبر نیست:", data);
        return;
      }

      const planets = data.results;
      const list = document.getElementById("planetList");

      planets.forEach((planet) => {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = `نام سیاره: ${planet.name} - جمعیت: ${planet.population}`;
        list.appendChild(li);
      });
    })
    .catch((error) => {
      console.error("خطا در دریافت اطلاعات:", error);
    });
}

loadPlanets();

//پروژه تمرینی جنک ستارگان با استفاده از fetch و لیترال بجای رشته ی معمولی