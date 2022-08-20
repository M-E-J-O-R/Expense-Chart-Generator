$(function () {
   barChart = async () => {
      response = await fetch("data.json");
      data = await response.json();
      return data;
   };
   let data = barChart();
   data.then((day) => {
      day.forEach((element) => {
         templateChild = document.querySelector(".template").content.cloneNode(true).children[0];

         bar = templateChild.querySelector(".bar");
         $(bar).attr("title", `$${element.amount}`);
         function style() {
            styles = {
               height: `${element.amount * 3}px`,
            };
            Object.assign(bar.style, styles);
         }

         if (element.day == "wed") {
            style();
            bar.classList.add("cyan");
         } else if (element.day == "thu") {
            style();
            bar.classList.add("pale-orange");
         } else {
            style();
            bar.classList.add("soft-red");
         }

         barDay = templateChild.querySelector(".bar-day");

         barDay.innerText = element.day;

         $(".bar-chart").append(templateChild);
      });
   });
});
