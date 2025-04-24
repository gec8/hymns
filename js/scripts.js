window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    let timeoutId;
    const elements = document.querySelectorAll('.post-preview');

    const handleScroll = () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            const currentTop = document.body.getBoundingClientRect().top * -1;
            // 处理导航栏逻辑
            if ( currentTop < scrollPos) {
                // Scrolling Up
                if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                    mainNav.classList.add('is-visible');
                } else {
                    console.log(123);
                    mainNav.classList.remove('is-visible', 'is-fixed');
                }
            } else {
                // Scrolling Down
                mainNav.classList.remove('is-visible');
                if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                    mainNav.classList.add('is-fixed');
                }
            }
            scrollPos = currentTop;

            // 处理滚动特效
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (elementTop < windowHeight * 0.9) {
                    element.classList.add('fade-in');
                }
            });
        }, 200);
    };

    window.addEventListener('scroll', handleScroll);
});
// 添加滚动特效
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.post-preview');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight * 0.9) {
            element.classList.add('fade-in');
        }
    });
});
