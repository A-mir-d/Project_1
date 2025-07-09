const pageTitle = document.title.trim();

const allMainItems = document.querySelectorAll('.header-menu .nav-menu__item');

let contactLi = null;

for (let i = 0; i < allMainItems.length; i++) {
    let li = allMainItems[i];
    let link = li.querySelector('a.nav-menu__link');

    if (link && link.textContent.trim() === 'تماس با ما') {
        contactLi = li;
        break; 
    }
}

let pagesLi = null;

for (let i = 0; i < allMainItems.length; i++) {
  let li = allMainItems[i];
  let link = li.querySelector('a.nav-menu__link');

  if (link && link.textContent.trim() === 'صفحات') {
    pagesLi = li;
    break; 
  }
}

let pageSubItems = [];

if (pagesLi) {
  pageSubItems = pagesLi.querySelectorAll('.nav-submenu__item');
}

const subPageTitles = [
    "سبد خرید",
    "لیست علاقه مندی ها",
    "صفحه پرداخت",
    "حساب کاربری"
];

allMainItems.forEach(li => li.classList.remove("activePage"));
pageSubItems.forEach(li => li.classList.remove("activePage"));

if (pageTitle === 'تماس با ما' && contactLi) {
    contactLi.classList.add("activePage");
}

else if (subPageTitles.includes(pageTitle)) {

    Array.from(pageSubItems).forEach(subLi => {
        const link = subLi.querySelector('a');
        if (link && link.textContent.trim() === pageTitle) {
            subLi.classList.add("activePage");
        }
    });
    if (pagesLi) {
        pagesLi.classList.add("activePage");
    }
}