//Interactive Menu
function menuclickFunction() {
  const tabMenu = document.querySelectorAll(".menu-item-js");
  const contentMenu = document.querySelectorAll(".menu-js");

  if (tabMenu.length && contentMenu.length) {
    contentMenu[0].classList.add("active");
    function tabClick(e) {
      contentMenu.forEach((item) => {
        item.classList.remove("active");
      });
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
