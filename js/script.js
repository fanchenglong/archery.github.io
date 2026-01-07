/**
 * 射箭吧网站 JavaScript
 * 功能：深色模式切换
 */

// 深色模式切换
(function() {
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;
  
  // 从 localStorage 读取主题设置，默认为深色
  const savedTheme = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);
  
  // 切换主题
  themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
})();

// 平滑滚动（可选，现代浏览器已支持 CSS scroll-behavior）
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      
      // 处理首页链接
      if (href === '#home') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        return;
      }
      
      const target = document.querySelector(href);
      if (target) {
        // 获取header高度作为偏移量
        const header = document.querySelector('.header');
        const headerHeight = header ? header.offsetHeight : 70;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  });
});

// 预约体验按钮
document.querySelector('.btn-primary')?.addEventListener('click', () => {
  alert('请通过以下方式联系我们预约体验：\n\n旺角广场店：13683636747\n万科时代中心店：13581677270');
});

// 卡片滚动进入视口时发光效果
(function() {
  const observerOptions = {
    root: null,
    rootMargin: '-10% 0px -10% 0px', // 当卡片进入视口中间区域时触发
    threshold: 0.3 // 至少30%可见时触发
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 卡片进入视口，添加发光效果
        entry.target.classList.add('in-view');
        
        // 2秒后移除类，以便下次滚动时可以再次触发
        setTimeout(() => {
          entry.target.classList.remove('in-view');
        }, 2000);
      }
    });
  }, observerOptions);

  // 观察所有服务卡片
  document.querySelectorAll('.service-card').forEach(card => {
    observer.observe(card);
  });

  // 观察其他可能需要发光效果的卡片
  document.querySelectorAll('.contact-card').forEach(card => {
    observer.observe(card);
  });
})();
