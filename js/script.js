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

  // 观察Hero背景区域
  const heroHeader = document.querySelector('.hero-header');
  if (heroHeader) {
    observer.observe(heroHeader);
  }

  // 观察器材调试详情卡片
  document.querySelectorAll('.detail-card').forEach(card => {
    observer.observe(card);
  });

  // 观察其他可能需要发光效果的卡片
  document.querySelectorAll('.contact-card').forEach(card => {
    observer.observe(card);
  });
})();

// 图片轮播功能
(function() {
  class GallerySlider {
    constructor(sliderElement) {
      this.slider = sliderElement;
      this.track = this.slider.querySelector('.slider-track');
      this.items = this.slider.querySelectorAll('.slider-item');
      this.wrapper = this.slider.closest('.gallery-slider-wrapper');
      this.currentIndex = 0;
      this.galleryType = this.slider.dataset.gallery;
      
      this.init();
    }
    
    init() {
      // 创建指示点
      this.createDots();
      
      // 触摸滑动支持
      this.addTouchSupport();
      
      // 自动播放（可选）
      // this.startAutoPlay();
    }
    
    createDots() {
      const dotsContainer = document.querySelector(`[data-dots="${this.galleryType}"]`);
      if (!dotsContainer) return;
      
      this.items.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = `slider-dot ${index === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `跳转到第${index + 1}张`);
        dot.addEventListener('click', () => this.goTo(index));
        dotsContainer.appendChild(dot);
      });
      
      this.dots = dotsContainer.querySelectorAll('.slider-dot');
    }
    
    updateDots() {
      this.dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === this.currentIndex);
      });
    }
    
    goTo(index) {
      this.currentIndex = index;
      const offset = -100 * index;
      this.track.style.transform = `translateX(${offset}%)`;
      this.updateDots();
    }
    
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
      this.goTo(this.currentIndex);
    }
    
    prev() {
      this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
      this.goTo(this.currentIndex);
    }
    
    addTouchSupport() {
      let startX = 0;
      let currentX = 0;
      let isDragging = false;
      
      this.slider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
      });
      
      this.slider.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        currentX = e.touches[0].clientX;
      });
      
      this.slider.addEventListener('touchend', () => {
        if (!isDragging) return;
        isDragging = false;
        
        const diff = startX - currentX;
        if (Math.abs(diff) > 50) {
          if (diff > 0) {
            this.next();
          } else {
            this.prev();
          }
        }
      });
    }
    
    startAutoPlay(interval = 5000) {
      setInterval(() => this.next(), interval);
    }
  }
  
  // 初始化所有轮播
  document.querySelectorAll('.gallery-slider').forEach(slider => {
    new GallerySlider(slider);
  });
})();
