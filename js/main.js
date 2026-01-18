                              /* ==========================================================================                                                                                          
                                         Copyright © 2026 Nguyen Manh Tuan. All rights reserved.
                                ======================================================================= */
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => preloader.style.display = 'none', 800);
    }
    document.body.classList.add('loaded');
    animateStats();
    const animatedElements = document.querySelectorAll('.food-card, .list-item, .cat-item');
    animatedElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });
}); 
/* ==========================================================================
   || LOGIC CUỘN TRANG VÀ ĐIỀU HƯỚNG 
   ========================================================================== */
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    const btnTop = document.getElementById('back-to-top');
    
    if (window.scrollY > 100) {
        if (header) header.classList.add('header-scrolled');
    } else {
        if (header) header.classList.remove('header-scrolled');
    }
    
    if (window.scrollY > 500) {
        if (btnTop) btnTop.classList.add('show');
    } else {
        if (btnTop) btnTop.classList.remove('show');
    }
});
const btnBackToTop = document.getElementById('back-to-top');
if (btnBackToTop) {
    btnBackToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === "#") return;

        const target = document.querySelector(targetId);
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
/* ==========================================================================
   || HIỆU ỨNG XUẤT HIỆN KHI CUỘN 
   ========================================================================== */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);
document.querySelectorAll('.food-card, .list-item, .cat-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
/* ==========================================================================
   || QUẢN LÝ DỮ LIỆU VÀ NÚT XEM THÊM 
   ========================================================================== */
const viewMoreBtn = document.getElementById('view-more-btn');
const popularList = document.getElementById('popular-list');
const additionalItems = [
    { img: './images/v1_115.png', title: 'Cơm Tấm Sài Gòn - Elite', address: '123 Nguyễn Thị Minh Khai, Quận 1...' },
    { img: './images/v1_129.png', title: 'Bánh Mì Thịt Nướng Gold', address: '456 Lê Lợi, Quận 3...' },
    { img: './images/v1_155.png', title: 'Phở Bò Hà Nội Gia Truyền', address: '789 Trần Hưng Đạo, Quận 5...' },
    { img: './images/v1_169.png', title: 'Gỏi Cuốn Tôm Nhảy', address: '321 Võ Văn Tần, Quận 3...' },
    { img: './images/v1_182.png', title: 'Bún Bò Huế Cung Đình', address: '654 Cách Mạng Tháng 8, Quận 10...' },
    { img: './images/v1_394.png', title: 'Canh Chua Cá Miền Tây', address: '987 Nguyễn Văn Cừ, Quận 5...' }
];
let currentIndex = 0;
if (viewMoreBtn) {
    viewMoreBtn.addEventListener('click', () => {
        const itemsToAdd = additionalItems.slice(currentIndex, currentIndex + 3);
        itemsToAdd.forEach(item => {
            const newItem = document.createElement('div');
            newItem.className = 'list-item';
            newItem.innerHTML = `
                <img src="${item.img}" alt="${item.title}">
                <div class="item-details">
                    <h4 style="color:var(--primary-blue); font-weight:800;">${item.title}</h4>
                    <p style="font-size:13px; color:var(--text-muted);">${item.address}</p>
                </div>
            `;
            popularList.insertBefore(newItem, viewMoreBtn);
            setTimeout(() => {
                newItem.style.opacity = '1';
                newItem.style.transform = 'translateY(0)';
            }, 100);
        });
        currentIndex += 3;
        if (currentIndex >= additionalItems.length) {
            viewMoreBtn.style.display = 'none';
        }
    });
}
/* ==========================================================================
   || HIỆU ỨNG ĐẾM SỐ THỐNG KÊ 
   ========================================================================== */
function animateStats() {
    const stats = document.querySelectorAll('.stat-num');
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-val'));
        if (isNaN(target)) return;
        let count = 0;
        const duration = 2000;
        const increment = target / (duration / 20);
        const updateCount = () => {
            if (count < target) {
                count += increment;
                stat.innerText = Math.ceil(count).toLocaleString();
                setTimeout(updateCount, 20);
            } else {
                stat.innerText = target.toLocaleString() + (stat.innerText.includes('+') ? '+' : '');
            }
        };
        updateCount();
    });
} 
/* ==========================================================================
   || ENGINE XỬ LÝ VÒNG LẶP VÀ BỘ LỌC ĐẲNG CẤP
   ========================================================================== */
const foodData = [
    { name: "Gà Rán KFC - Bến Xóm Củi", addr: "48 - 50 Cần Giuộc, Q8", img: "./images/v1_74.png" },
    { name: "Gà Rán Popeyes - Lê Đại Hành", addr: "397A Lê Đại Hành, Q11", img: "./images/v1_62.png" },
    { name: "Chè Kỳ Đồng", addr: "16C Kỳ Đồng, Q3", img: "./images/v1_224.png" },
    { name: "Bún Riêu Trung Kiên", addr: "27 Bế Văn Đàn, Tân Bình", img: "./images/v1_210.png" }
];
let loopIndex = 1;
function renderDishes(data) {
    const list = document.getElementById('popular-list');
    data.forEach(item => {
        const html = `
            <div class="list-item animate__animated animate__fadeInUp">
                <img src="${item.img}" alt="${item.name}"> 
                <div class="item-details">
                    <h4 style="font-weight:800; color:var(--primary-blue);">${item.name}</h4>
                    <p style="font-size:13px; color:#718096; margin-top:5px;">${item.addr}</p>
                    <div style="margin-top:10px; color:var(--accent-gold); font-weight:700;">
                        <i class="fa fa-star"></i> 4.8 • 1.5km • 20 phút
                    </div>
                </div>
            </div>`;
        list.insertAdjacentHTML('beforeend', html);
    });
}
function handleInfiniteLoad() {
    const btn = document.getElementById('view-more-btn');
    const loader = document.getElementById('ui-loader-spin');

    btn.style.display = 'none';
    loader.style.display = 'block';

    setTimeout(() => {
        renderDishes(foodData);        
        loader.style.display = 'none';
        btn.style.display = 'flex';
        window.scrollBy({ top: 250, behavior: 'smooth' });
    }, 800);
}
function applyFilter(type, element) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    element.classList.add('active');
    const list = document.getElementById('popular-list');
    const btnContainer = document.querySelector('.load-more-container');
    list.innerHTML = ""; 
    if (type === 'all') {
        renderDishes(foodData);
        btnContainer.style.display = 'flex';
    } 
    else if (type === 'near') {
        const nearData = [...foodData, foodData[0], foodData[1]];
        renderDishes(nearData);
        btnContainer.style.display = 'none';
    } 
    else if (type === 'fav') {
        const favData = [...foodData, ...foodData, foodData[0], foodData[1]];
        renderDishes(favData);
        btnContainer.style.display = 'none'; 
    }
}
window.onload = () => {
    renderDishes(foodData);
};
/* ==========================================================================
   ||                                  KHUYẾN MÃI (box)
   ========================================================================== */
document.querySelector('.promo-pill').addEventListener('click', function () {
    alert("🎉 Chúc mừng! Bạn đã nhận Giảm giá – Giảm 30% phí ship!");
});