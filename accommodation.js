document.addEventListener('DOMContentLoaded', () => {
    // 初始化所有類別的 Swiper
    const swiperInstances = new Swiper(".mySwiper", {
        slidesPerView: 1,        // 手機預設一張
        spaceBetween: 20,       // 幻燈片間距
        loop: true,             // 循環播放，這點很重要，讓滑動不間斷
        speed: 800,             // 滑動過程的時間 (ms)
        
        autoplay: {
            delay: 3500,        // 每 3.5 秒自動換下一張
            disableOnInteraction: false,
        },

        // 圓點分頁
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },

        // 左右導航箭頭
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        // 螢幕尺寸斷點
        breakpoints: {
            768: {
                slidesPerView: 2, // 平板以上顯示兩張，滑動效果更明顯
                spaceBetween: 30,
            },
            1100: {
                slidesPerView: 2, // 電腦版
                spaceBetween: 40,
            }
        }
    });
});