document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('rentalForm');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // 獲取表單數值
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;

        // 這裡通常會串接 API 送出郵件，目前以 Alert 代替
        alert(`感謝您，${name}！\n我們已收到您的「${subject}」需求，將儘速撥打 ${phone} 與您聯繫。`);
        
        // 重置表單
        contactForm.reset();
    });
});