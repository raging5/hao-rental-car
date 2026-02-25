document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const currentItem = question.parentElement;
            
            // 檢查是否已經開啟
            const isOpen = currentItem.classList.contains('active');
            
            // 先關閉所有其他的 FAQ (若想一次只開一個)
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });

            // 如果原本是關閉的，就打開它
            if (!isOpen) {
                currentItem.classList.add('active');
            }
        });
    });
});