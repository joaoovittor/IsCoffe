//Interactive Menu
function menuclickFunction() {
  const tabMenu = document.querySelectorAll(".menu-item-js");
  const contentMenu = document.querySelectorAll(".menu-js");
  const h3 = document.querySelectorAll(".menu-item-js h3");
  if (tabMenu.length && contentMenu.length) {
    h3[0].classList.add("active");
    contentMenu[0].classList.add("active");
    function tabClick(e) {
      contentMenu.forEach((item) => {
        item.classList.remove("active");
      });
      h3.forEach((item) => {
        item.classList.remove("active");
      });
      h3[e].classList.add("active");
      contentMenu[e].classList.add("active");
    }
    tabMenu.forEach((item, target) => {
      item.addEventListener("click", () => {
        tabClick(target);
      });
    });
  }
}
menuclickFunction();

function TabJs() {
  const questionTab = document.querySelectorAll(".listJs");
  const questionTabh3 = document.querySelectorAll(".listJs h3");

  if (questionTab.length && questionTabh3.length) {
    questionTabh3[0].nextElementSibling.classList.add("active");
    questionTabh3[0].classList.add("active");
    function Halfclick(index) {
      questionTabh3.forEach((item) => {
        item.nextElementSibling.classList.remove("active");
        item.classList.remove("active");
      });
      questionTabh3[index].nextElementSibling.classList.add("active");
      questionTabh3[index].classList.add("active");
    }

    questionTab.forEach((item, index) => {
      item.addEventListener("click", () => {
        Halfclick(index);
      });
    });
  }
}
TabJs();
