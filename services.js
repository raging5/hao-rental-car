document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.service-box');

    // 加入進場動畫
    boxes.forEach((box, index) => {
        box.style.opacity = '0';
        box.style.transform = 'translateY(20px)';
        box.style.transition = `all 0.5s ease ${index * 0.1}s`;

        setTimeout(() => {
            box.style.opacity = '1';
            box.style.transform = 'translateY(0)';
        }, 100);
    });
});