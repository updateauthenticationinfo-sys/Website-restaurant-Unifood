                              /* ==========================================================================                                                                                          
                                         Copyright © 2026 Nguyen Manh Tuan. All rights reserved.
                                ======================================================================= */
   const tabs = document.querySelectorAll('.tab-btn');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
            });
        });
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.style.padding = '12px 0';
                header.style.background = 'rgba(255, 255, 255, 0.98)';
            } else {
                header.style.padding = '18px 0';
                header.style.background = 'rgba(255, 255, 255, 0.9)';
            }
        });
  