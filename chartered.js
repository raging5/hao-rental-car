document.addEventListener('DOMContentLoaded', () => {
    // 數字增加動畫效果 (針對價格)
    const tableCells = document.querySelectorAll('.price-table td');
    
    const animatePrices = () => {
        tableCells.forEach(cell => {
            if (cell.innerText.includes('NT$')) {
                cell.style.color = '#d32f2f';
                cell.style.fontWeight = 'bold';
            }
        });
    };

    // 這裡可以使用 ScrollReveal 或是簡單的監聽
    animatePrices();
    
    console.log("附駕包車頁面邏輯已加載");
});