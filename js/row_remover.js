document.addEventListener('DOMContentLoaded', function () {
    const tbody = document.querySelector('tbody');

    tbody.addEventListener('click', function (event) {
        const btn = event.target.closest('.remove-tr-btn');
        console.log(btn);
        
        if (!btn) { return }

        const row = btn.closest('tr');
        if (row) {
            row.remove();
        }
    });
});
