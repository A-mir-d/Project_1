const button = document.querySelector('.category-button');
const dropdown = document.querySelector('.category-dropdown');

dropdown.style.display = 'none';

button.addEventListener('click', function (e) {
    e.stopPropagation();
    if (dropdown.style.display === 'none') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
});

dropdown.addEventListener('click', function () {
    dropdown.style.display = 'none';
});

document.addEventListener('click', function (e) {
    if (!dropdown.contains(e.target) && !button.contains(e.target)) {
        dropdown.style.display = 'none';
    }
});