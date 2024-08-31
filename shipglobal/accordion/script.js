
const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
    const content = header.nextElementSibling;
            const isOpen = content.classList.contains('open');

            document.querySelectorAll('.accordion-content.open').forEach(openContent => {
        openContent.classList.remove('open');
                openContent.style.maxHeight = null;
            });

            if (!isOpen) {
                  content.classList.add('open');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });