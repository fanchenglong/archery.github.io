// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// 表单提交处理
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('感谢您的留言！我们会尽快与您联系。');
        this.reset();
    });
}

// 课程报名按钮
const enrollButtons = document.querySelectorAll('.enroll-btn');
enrollButtons.forEach(button => {
    button.addEventListener('click', function() {
        const courseName = this.parentElement.querySelector('h3').textContent;
        alert(`您已选择报名：${courseName}\n我们的工作人员会尽快与您联系！`);
    });
});

// 页面加载动画
window.addEventListener('load', function() {
    const cards = document.querySelectorAll('.about-card, .course-card, .equipment-card, .post-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s, transform 0.5s';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 50);
        }, index * 100);
    });
});

// CTA按钮点击处理
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', function() {
        document.querySelector('#courses').scrollIntoView({
            behavior: 'smooth'
        });
    });
}
