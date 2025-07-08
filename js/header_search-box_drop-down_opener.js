(function () {
    const sel = document.getElementById('categorySelect');
    const box = sel.querySelector('.select-box');
    const drop = sel.querySelector('.dropdown');
    const input = sel.querySelector('.search');
    const items = Array.from(sel.querySelectorAll('.option'));

    box.addEventListener('click', e => {
        sel.classList.toggle('open');
        input.value = '';
        filter('');
        if (sel.classList.contains('open')) input.focus();
    });

    document.addEventListener('click', e => {
        if (!sel.contains(e.target)) sel.classList.remove('open');
    });

    function filter(text) {
        items.forEach(li => {
            li.style.display =
                li.textContent.includes(text) ? 'block' : 'none';
        });
    }
    input.addEventListener('input', e => filter(e.target.value));
    items.forEach(li => {
        li.addEventListener('click', () => {
            sel.querySelector('.option.selected')
                .classList.remove('selected');
            li.classList.add('selected');
            box.textContent = li.textContent;
            sel.classList.remove('open');
        });
    });
})();