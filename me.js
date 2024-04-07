document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.content').forEach(contentDiv => {
        contentDiv.addEventListener('click', function() {
            this.classList.toggle('active');
            document.querySelectorAll('.content').forEach(otherDiv => {
                if (otherDiv !== this) {
                    otherDiv.classList.remove('active');
                }
            });
        });
    });
});