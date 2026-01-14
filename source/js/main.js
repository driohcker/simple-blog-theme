// 主题主脚本文件

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 平滑滚动效果
  smoothScroll();
  
  // 响应式导航菜单（移动端）
  mobileNav();
  
  // 代码高亮初始化（如果需要）
  // initHighlight();
});

// 平滑滚动函数
function smoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // 考虑头部高度
          behavior: 'smooth'
        });
      }
    });
  });
}

// 移动端导航菜单
function mobileNav() {
  const navMenu = document.querySelector('.nav-menu');
  const menuToggle = document.querySelector('.menu-toggle');
  
  if (menuToggle && navMenu) {
    // 点击切换菜单
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
    
    // 窗口大小变化时关闭菜单
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
      }
    });
    
    // 点击菜单外部关闭菜单
    document.addEventListener('click', function(e) {
      if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        navMenu.classList.remove('active');
      }
    });
  }
}

// 代码高亮初始化示例
function initHighlight() {
  // 这里可以添加代码高亮库的初始化代码
  // 例如 Prism.js、Highlight.js 等
  // 示例：
  // if (typeof Prism !== 'undefined') {
  //   Prism.highlightAll();
  // }
}