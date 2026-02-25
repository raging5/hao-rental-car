document.addEventListener('DOMContentLoaded', () => {
    // 點擊優惠卡片整體也可以跳轉 (選配)
    const cards = document.querySelectorAll('.promo-card');
    
    cards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', (e) => {
            if (e.target.tagName !== 'A') {
                const link = card.querySelector('.promo-link');
                link.click();
            }
        });
    });

    console.log("優惠頁面已啟動");
});

