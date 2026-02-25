document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.con-tab');
    const contents = document.querySelectorAll('.contract-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-target');

            // 1. 切換按鈕 active 樣式
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // 2. 切換內容顯示
            contents.forEach(content => {
                if (content.id === target) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });

            // 3. 切換後自動回到頂部 (Scroll box 內部)
            const activeBox = document.querySelector('.contract-content.active .contract-scroll-box');
            if (activeBox) activeBox.scrollTop = 0;
        });
    });
});