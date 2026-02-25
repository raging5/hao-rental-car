document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    
    // 點擊漢堡選單的反應 (簡易範例)
    mobileMenu.addEventListener('click', () => {
        alert('選單功能開發中！這裡將會彈出手機版側邊欄。');
    });

    // 設定預設日期為今天
    const dateInputs = document.querySelectorAll('input[type="date"]');
    const today = new Date().toISOString().split('T')[0];
    dateInputs.forEach(input => {
        input.setAttribute('min', today);
    });
});

// 車款分類切換簡易邏輯
const tabs = document.querySelectorAll('.tab-btn');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        // 這裡後續可以增加真正過濾卡片的程式碼
        console.log(`您選擇了分類：${tab.innerText}`);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.tab-btn');
    const carCards = document.querySelectorAll('.car-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. 切換按鈕的 active 樣式
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // 2. 取得點擊的分類名稱
            const filterValue = button.getAttribute('data-filter');

            // 3. 過濾卡片
            carCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (filterValue === 'all' || filterValue === cardCategory) {
                    card.style.display = 'block'; // 顯示
                    // 增加一個小動畫（可選）
                    card.style.animation = 'fadeIn 0.5s ease';
                } else {
                    card.style.display = 'none'; // 隱藏
                }
            });
        });
    });
});