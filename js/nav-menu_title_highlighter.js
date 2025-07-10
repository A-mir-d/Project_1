const pageTitle = document.title.replace(/\s+/g, ' ').trim();

const allMainItems = document.querySelectorAll('.header-menu .nav-menu__item');
const mobileAllMainItems = document.querySelectorAll(".nav-menu--mobile .nav-menu__item");

let contactLi = null;

for (let i = 0; i < allMainItems.length; i++) {
    let li = allMainItems[i];
    let mobileLi = mobileAllMainItems[i];

    let link = li.querySelector('a.nav-menu__link');
    if (link && link.textContent.replace(/\s+/g, ' ').trim() === 'تماس با ما') {
        contactLi = li;
        mobileContactLi = mobileLi;
        break;
    }
}

let pagesLi = null;

for (let i = 0; i < allMainItems.length; i++) {
    let li = allMainItems[i];
    let mobileLi = mobileAllMainItems[i];

    let link = li.querySelector('a.nav-menu__link');

    if (link && link.textContent.replace(/\s+/g, ' ').trim() === 'صفحات') {
        pagesLi = li;
        mobilePageLi = mobileLi;
        break;
    }
}

let pageSubItems = [];
let mobilePageSubItems = [];

if (pagesLi) {
    pageSubItems = pagesLi.querySelectorAll('.nav-submenu__item');
    mobilePageSubItems = mobilePageLi.querySelectorAll('.nav-submenu__item');
}

const subPageTitles = [
    "سبد خرید",
    "لیست علاقه مندی ها",
    "صفحه پرداخت",
    "حساب کاربری"
];

allMainItems.forEach(li => li.classList.remove("activePage"));
mobileAllMainItems.forEach(li => li.classList.remove("activePage"));
pageSubItems.forEach(li => li.classList.remove("activePage"));

if (pageTitle === 'تماس با ما' && contactLi) {
    contactLi.classList.add("activePage");
    mobileContactLi.classList.add("activePage");
}
else if (subPageTitles.includes(pageTitle)) {

    Array.from(pageSubItems).forEach(subLi => {
        const link = subLi.querySelector('a');
        if (link && link.textContent.replace(/\s+/g, ' ').trim() === pageTitle) {
            subLi.classList.add("activePage");
        }
    });
    Array.from(mobilePageSubItems).forEach(subLi => {
        const link = subLi.querySelector('a');
        if (link && link.textContent.replace(/\s+/g, ' ').trim() === pageTitle) {
            subLi.classList.add("activePage");
        }
    });
    if (pagesLi) {
        pagesLi.classList.add("activePage");
        mobilePageLi.classList.add("activePage");
    }
}